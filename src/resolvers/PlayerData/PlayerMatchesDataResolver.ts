import { Arg, Query, Resolver } from "type-graphql";
import { MatchDetail } from "../../models/MatchDetail";

import { log } from "../../utils";
import { getPlayerMatchesData } from "./services";

@Resolver()
export default class PlayerMatchesDataResolver {
	@Query(() => [MatchDetail])
	async MatchesData(@Arg("name") name: string, @Arg("region") region: string) {
		try {
			const matchesData = await getPlayerMatchesData({ name, region });

			return matchesData;
		} catch (error) {
			log.info(`Error in getPlayer: ${error}}`);
			throw new Error(error);
		}
	}
}
