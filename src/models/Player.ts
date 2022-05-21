import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class Player {
	@Field((_type) => ID)
	id: number;

	@Field()
	name: string;

	@Field()
	puuid: string;

	@Field()
	account_id: string;

	@Field()
	created_at: Date;

	@Field()
	updated_at: Date;
}
