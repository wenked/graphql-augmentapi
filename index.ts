import "reflect-metadata";
import { ApolloServer } from "apollo-server";

import AugmentResolver from "./src/resolvers/AugmentResolver";
import chalk from "chalk";
import { buildSchema } from "type-graphql";
import path from "path";

async function main() {
	const schema = await buildSchema({
		resolvers: [AugmentResolver],
		emitSchemaFile: path.resolve(__dirname, "schema.gql"),
	});

	const server = new ApolloServer({ schema });

	const { url } = await server.listen();
	console.log(`${chalk.bold.green("Server is running")} on ${chalk.bold.blueBright(url)}`);
}

main();
