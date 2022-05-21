import { ApolloServer } from "apollo-server";
import "reflect-metadata";

import chalk from "chalk";
import path from "path";
import { buildSchema } from "type-graphql";
import AugmentResolver from "./src/resolvers/AugmentResolver";
import PlayerDataResolver from "./src/resolvers/PlayerData/PlayerDataResolver";

async function main() {
	const schema = await buildSchema({
		emitSchemaFile: path.resolve(__dirname, "schema.gql"),
		resolvers: [AugmentResolver, PlayerDataResolver],
	});

	const server = new ApolloServer({ schema });

	const { url } = await server.listen();
	console.log(`${chalk.bold.green("Server is running")} on ${chalk.bold.blueBright(url)}`);
}

main();
