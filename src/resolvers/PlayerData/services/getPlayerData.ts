import { PrismaClient, tft_player } from "@prisma/client";
import axios from "axios";
import chalk from "chalk";

export default async function getPlayerData(name: string): Promise<tft_player> {
	try {
		const prisma = new PrismaClient();
		const player = await prisma.tft_player.findFirst({
			where: {
				name,
			},
		});

		if (player) {
			return player;
		}

		const { data } = await axios.get(
			`https://br1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${name}?api_key=${process.env.RIOT_API_KEY}`
		);

		const { accountId, name: playerName, puuid } = data;
		const newPlayer = await prisma.tft_player.create({
			data: {
				account_id: accountId,
				name: playerName,
				puuid,
			},
		});

		return newPlayer;
	} catch (error) {
		console.log(chalk.redBright(`Error: ${error}`));
		throw new Error("Erro ao buscar player.");
	}
}
