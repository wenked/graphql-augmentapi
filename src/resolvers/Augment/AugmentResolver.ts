import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { Augment } from "../../models/Augment";
import { Historic_Stats } from "../../models/Historic_Stats";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import { sendToQueue } from "../../../queue";
import { log } from "../../utils";

@Resolver()
export default class AugmentResolver {
	@Query(() => [Augment])
	async augments() {
		try {
			log.info("Buscando dados dos augments");
			const augments = await prisma.augments.findMany();

			return augments;
		} catch (error) {
			log.error(`Error in Augments: ${error}`);
			throw new Error("Error fetching augments");
		}
	}

	@Query(() => Historic_Stats)
	async sendToQueue(@Arg("service") service: string) {
		try {
			const historicStats = await prisma.historic_stats.create({
				data: {
					service,
					status: "Inicializando",
					user: "teste",
				},
			});

			await sendToQueue("augments_queue", { ...historicStats });

			return historicStats;
		} catch (error) {
			log.error(`Error in Send_to_queue: ${error}`);
			throw new Error("Erro ao enviar para fila");
		}
	}

	@Query(() => Historic_Stats)
	async getHistoricStats(@Arg("id") id: number) {
		try {
			const historic_stats = await prisma.historic_stats.findUnique({ where: { id } });

			return historic_stats;
		} catch (error) {
			log.error(`Error in get_Historic_Stats: ${error}`);
			throw new Error("Erro ao entcontrar hiusotric stats");
		}
	}
}
