import { ApolloServer } from "apollo-server";
import "reflect-metadata";

import chalk from "chalk";
import path from "path";
import { buildSchema } from "type-graphql";
import AugmentResolver from "./src/resolvers/Augment/AugmentResolver";
import PlayerMatchesDataResolver from "./src/resolvers/PlayerMatchesData/PlayerMatchesDataResolver";
import log from "./src/utils/logger";

async function main() {
	const schema = await buildSchema({
		emitSchemaFile: path.resolve(__dirname, "schema.gql"),
		resolvers: [AugmentResolver, PlayerMatchesDataResolver],
	});

	const server = new ApolloServer({ schema });

	const { url } = await server.listen();
	log.info(`🚀 Server ready at ${chalk.bold.blueBright(url)}`);
}

main();
