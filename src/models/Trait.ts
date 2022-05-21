import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class Trait {
	@Field()
	name: string;

	@Field()
	num_units: number;

	@Field()
	style: number;

	@Field()
	tier_current: number;

	@Field()
	tier_total: number;
}
