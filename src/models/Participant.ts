import { Field, ObjectType } from "type-graphql";
import { Companion } from "./Companion";
import { Trait } from "./Trait";
import { Unit } from "./Unit";

@ObjectType()
export class Participant {
	@Field((type) => [String])
	augments: string[];

	@Field()
	companion: Companion;

	@Field()
	gold_left: number;

	@Field()
	last_round: number;

	@Field()
	placement: number;

	@Field()
	players_eliminated: number;

	@Field()
	puuid: string;

	@Field()
	time_eliminated: number;

	@Field()
	total_damage_to_players: number;

	@Field((_type) => [Trait])
	traits: Trait[];

	@Field((_type) => [Unit])
	units: Unit[];
}
