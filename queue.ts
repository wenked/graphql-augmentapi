import chalk from "chalk";

interface historicStats {
	id: number;
	user: string;
	status: string;
	progresso: number;
	generate_player_data: number;
	created_at: Date;
	updated_at: Date;
}

function connect() {
	return require("amqplib")
		.connect("amqp://localhost")
		.then((conn) => conn.createChannel());
}

function createQueue(channel, queue) {
	return new Promise((resolve, reject) => {
		try {
			channel.assertQueue(queue, { durable: false });
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

		console.log(chalk.greenBright.bold(`Message sent to queue ${queue}`));
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
