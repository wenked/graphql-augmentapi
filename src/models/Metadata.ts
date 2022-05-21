import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Metadata {
	@Field()
	data_version: string;

	@Field()
	match_id: string;

	@Field((type) => [String])
	participants: string[];
}
