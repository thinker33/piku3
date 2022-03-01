import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "info",
			description: "Will display the info the bot",
			category: "utils",
			usage: `${client.config.prefix}info`,
			baseXp: 0,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
        try {
            pfp =
                'https://i.ibb.co/v18ZFWK/images-1-5.jpg'
        }
		/*eslint-disable @typescript-eslint/no-explicit-any*/
                let pfp: string
                const users = await this.client.DB.user.count();
		const chats: any = this.client.chats
			.all()
			.filter((v) => !v.jid.endsWith && !v.archive)
			.map((v) => v.jid)
			.map((jids) => (jids.includes("g.us") ? jids : name))
			.filter((v) => v);
                const pad = (s: any) => (s < 10 ? "0" : "") + s;
		const formatTime = (seconds: any) => {
			const hours = Math.floor(seconds / (60 * 60));
			const minutes = Math.floor((seconds % (60 * 60)) / 60);
			const secs = Math.floor(seconds % 60);
			return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
		};
		const uptime = () => formatTime(process.uptime());
		await M.reply(
                await request.buffer(
                pfp
            ),
            MessageType.image,
            undefined,
            undefined,
			` 🅿︎🅸︎🅺︎🆄︎ \n\n➰ *Groups:* ${
		this.client.chats.all().filter(chat => chat.jid.endsWith('g.us')).length}\n*Users: ${users}*\n♻️ *Uptime:${uptime()}*`
		);
	};
}
