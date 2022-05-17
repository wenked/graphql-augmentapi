import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class Augment {
	@Field((_type) => ID)
	id: string;

	@Field()
	name: string;

	@Field()
	tier: string;

	@Field({ nullable: true })
	pickrate: string;

	@Field()
	placement: string;

	@Field({ nullable: true })
	top4: string;

	@Field({ nullable: true })
	winrate: string;

	@Field()
	stage14: string;

	@Field()
	stage33: string;

	@Field()
	stage46: string;

	@Field({ nullable: true })
	img: string;

	@Field()
	createdAt: Date;

	@Field()
	updatedAt: Date;
}
