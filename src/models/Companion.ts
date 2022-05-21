import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Companion {
	@Field()
	content_ID: string;

	@Field()
	skin_ID: string;

	@Field()
	species: string;
}
