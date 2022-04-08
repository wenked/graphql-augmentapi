import { Query, Resolver } from "type-graphql";
import { Augment } from "../models/Augment";
import { PrismaClient } from "@prisma/client";
import chalk from "chalk";

const prisma = new PrismaClient();

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
}
