import chalk from "chalk";
import log from "./src/utils/logger";

interface historicStats {
	created_at: Date;
	id: number;
	progresso: number;
	service: string;
	status: string;
	updated_at: Date;
	user: string;
}

function connect() {
	return require("amqplib")
		.connect("amqp://localhost")
		.then((conn) => conn.createChannel());
}

function createQueue(channel, queue) {
	return new Promise((resolve, reject) => {
		try {
			channel.assertQueue(queue, { durable: true });
			resolve(channel);
		} catch (err) {
			reject(err);
		}
	});
}

export async function sendToQueue(queue: String, message: historicStats) {
	try {
		const channel = await connect();
		await createQueue(channel, queue);
		channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));

		log.info(`Message sent to queue: ${chalk.bold.blueBright(queue)}`);
	} catch (error) {
		console.log(chalk.redBright(`Error: ${error}`));
		throw new Error("Erro ao enviar para fila");
	}
}

export function consume(queue, callback) {
	connect()
		.then((channel) => createQueue(channel, queue))
		.then((channel) => channel.consume(queue, callback, { noAck: true }))
		.catch((err) => console.log(err));
}
