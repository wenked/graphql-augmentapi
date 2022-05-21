import { Field, ObjectType } from "type-graphql";
import { Participant } from "./Participant";

@ObjectType()
export class Info {
	@Field()
	game_datetime: number;

	@Field()
	game_length: number;

	@Field()
	game_version: string;

	@Field((type) => [Participant])
	participants: Participant[];

	@Field()
	queue_id: string;

	@Field()
	tft_game_type: string;

	@Field()
	tft_set_name: string;

	@Field()
	tft_set_number: number;
}
