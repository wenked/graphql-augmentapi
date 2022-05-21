import { ApolloServer } from "apollo-server";
import "reflect-metadata";

import chalk from "chalk";
import path from "path";
import { buildSchema } from "type-graphql";
import AugmentResolver from "./src/resolvers/Augment/AugmentResolver";
import PlayerMatchesDataResolver from "./src/resolvers/PlayerMatchesData/PlayerMatchesDataResolver";

async function main() {
	const schema = await buildSchema({
		emitSchemaFile: path.resolve(__dirname, "schema.gql"),
		resolvers: [AugmentResolver, PlayerMatchesDataResolver],
	});

	const server = new ApolloServer({ schema });

	const { url } = await server.listen();
	console.log(`${chalk.bold.green("Server is running")} on ${chalk.bold.blueBright(url)}`);
}

main();
