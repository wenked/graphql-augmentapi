import { Query, Resolver, Mutation, Arg, Int } from "type-graphql";
import { Augment } from "../models/Augment";
import { Historic_Stats } from "../models/Historic_Stats";

import chalk from "chalk";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { sendToQueue } from "../../queue";

@Resolver()
export default class AugmentResolver {
	@Query(() => [Augment])
	async Augments() {
		try {
			console.log(chalk.greenBright.bold("Executando augments query"));
			const augments = await prisma.augments.findMany();

			console.log(chalk.blueBright.bold(`Found ${augments.length} augments`));

			return augments;
		} catch (error) {
			console.log(chalk.redBright(`Error: ${error}`));
			throw new Error("Error fetching augments");
		}
	}

	@Query(() => Historic_Stats)
	async Send_to_queue() {
		try {
			const historic_stats = await prisma.historic_stats.create({
				data: {
					user: "teste",
					status: "Inicializando",
				},
			});
			const teste = {
				...historic_stats,
				generate_player_data: false,
				grab_match_data: false,
				generete_augment_stats: true,
			};

			await sendToQueue("augments_queue", teste);

			return historic_stats;
		} catch (error) {
			console.log(chalk.redBright(`Error: ${error}`));
			throw new Error("Erro ao enviar para fila");
		}
	}

	@Query(() => Historic_Stats)
	async get_Historic_Stats(@Arg("id") id: number) {
		try {
			const historic_stats = await prisma.historic_stats.findUnique({ where: { id } });

			return historic_stats;
		} catch (error) {
			console.log(chalk.redBright(`Error: ${error}`));
			throw new Error("Erro ao entcontrar hiusotric stats");
		}
	}
}
