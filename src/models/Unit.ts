import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Unit {
	@Field()
	character_id: string;

	@Field((_type) => [String])
	itemNames: string[];

	@Field((_type) => [Number])
	items: number[];

	@Field()
	name: string;

	@Field()
	rarity: string;

	@Field()
	tier: number;
}
