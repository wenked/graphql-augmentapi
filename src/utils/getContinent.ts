export default function getContinent(region: string) {
	switch (region) {
		case "br1":
		case "la1":
		case "la2":
		case "na1":
			return "americas";
		case "eun1":
		case "euw1":
		case "ru":
		case "tr1":
			return "europe";
		case "jp1":
		case "kr":
			return "asia";
		default:
			return "";
	}
}
