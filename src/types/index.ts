export interface participant {
	augments: string[];
	companion: {
		content_ID: string;
		skin_ID: string;
		species: string;
	};
	gold_left: number;
	last_round: number;
	level: number;
	placement: number;
	players_eliminated: number;
	puuid: string;
	time_eliminated: number;
	total_damage_to_players: number;
	traits: [
		{ name: string; num_units: number; style: number; tier_current: number; tier_total: number }
	];
	units: [
		{
			character_id: string;
			itemNames: string[];
			items: number[];
			name: string;
			rarity: number;
			tier: number;
		}
	];
}

export interface matchDataProps {
	info: {
		game_datetime: number;
		game_length: number;
		game_version: string;
		participants: participant[];
		queue_id: number;
		tft_game_type: string;
		tft_set_name: string;
		tft_set_number: number;
	};
	metadata: {
		data_version: string;
		match_id: string;
		participants: string[];
	};
}
