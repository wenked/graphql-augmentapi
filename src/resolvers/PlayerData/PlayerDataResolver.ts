import chalk from "chalk";
import { Arg, Query, Resolver } from "type-graphql";
import { Player } from "../../models/Player";
import { getPlayerData } from "./services";

@Resolver()
export default class PlayerDataResolver {
	@Query(() => Player)
	async getPlayer(@Arg("name") name: string) {
		try {
			console.log(name);
			const player = await getPlayerData(name);

			return player;
		} catch (error) {
			console.log(chalk.redBright(`Error: ${error}`));
			throw new Error("Erro ao buscar player.");
		}
	}
}
