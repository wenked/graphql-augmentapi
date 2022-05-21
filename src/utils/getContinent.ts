export default function getContinent(region: string) {
	switch (region) {
		case "br1" || "la1" || "la2" || "na1":
			return "americas";
		case "eun1" || "euw1" || "tr1" || "ru":
			return "europe";
		case "jp1" || "kr":
			return "asia";
		default:
			return "";
	}
}
