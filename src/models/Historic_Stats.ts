import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class Historic_Stats {
	@Field((_type) => ID)
	id: string;

	@Field()
	user: string;

	@Field()
	status: string;

	@Field()
	progresso: number;

	@Field()
	created_at: Date;

	@Field()
	updated_at: Date;
}
