import dayjs from "dayjs";
import logger from "pino";

const log = logger({
	base: {
		pid: false,
	},
	prettyPrint: true,
	timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default log;
