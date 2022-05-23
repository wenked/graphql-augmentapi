import dayjs from "dayjs";
import logger from "pino";

const log = logger({
	base: {
		pid: false,
	},
	prettyPrint: true,
	timestamp: () => `,"time":"${dayjs().locale("pt-br").format()}"`,
});

export default log;
