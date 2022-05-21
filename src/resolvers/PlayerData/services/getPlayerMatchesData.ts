import { PrismaClient, tft_player } from "@prisma/client";
import axios from "axios";
import chillout from "chillout";
import NodeCache from "node-cache";
import { matchDataProps } from "../../../types";
import { getContinent, log } from "../../../utils";

interface getPlayerDataProps {
	limit?: number;
	name: string;
	page?: number;
	region: string;
}

const CACHE_LIMIT = 60000;
const cache = new NodeCache({ checkperiod: 0.2, stdTTL: CACHE_LIMIT });

export default async function getPlayerMatchesData({
	limit = 10,
	name,
	page = 1,
	region,
}: getPlayerDataProps) {
	try {
		log.info(`Buscando dados do player ${name}`);
		const myQuery = `${name},${region},${page},${limit}`;
		if (cache.has(myQuery)) {
			log.info(`Dados do player ${name} encontrados no cache`);
			return cache.get(myQuery);
		}

		const regions = ["BR1", "EUN1", "EUW1", "JP1", "KR", "LA1", "LA2", "NA1", "OC1", "TR1", "RU"];

		if (!regions.includes(region.toLocaleUpperCase())) {
			throw new Error("Invalid region");
		}

		const prisma = new PrismaClient();
		let player = await prisma.tft_player.findFirst({
			where: {
				name,
			},
		});

		if (!player) {
			const { data } = await axios.get(
				`https://${region.toLowerCase()}.api.riotgames.com/tft/summoner/v1/summoners/by-name/${name}?api_key=${
					process.env.RIOT_API_KEY
				}`
			);

			const { accountId, name: playerName, puuid } = data;
			player = await prisma.tft_player.create({
				data: {
					account_id: accountId,
					name: playerName,
					puuid,
				},
			});
		}

		const continent = getContinent(region);

		const { data: matches } = await axios.get(
			`https://${continent}.api.riotgames.com/tft/match/v1/matches/by-puuid/${player.puuid}/ids?start=${page}&count=${limit}&api_key=${process.env.RIOT_API_KEY}`
		);

		const matchesDetails = [];
		await chillout.forOf(matches, async (match: string) => {
			const { data: matchDetails } = await axios.get(
				`https://${continent}.api.riotgames.com/tft/match/v1/matches/${match}?api_key=${process.env.RIOT_API_KEY}`
			);

			matchesDetails.push(matchDetails);
		});

		cache.set(myQuery, matchesDetails, CACHE_LIMIT);

		return matchesDetails as matchDataProps[];
	} catch (error) {
		log.error(`Error in getPlayerData: ${error}`);
		throw new Error(error);
	}
}
