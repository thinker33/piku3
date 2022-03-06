/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "sbc",
			description:
				"Will make a broadcast for groups where the bot is in. Can be used to make announcements.",
			aliases: ["scast", "silentannouncement", "silentbc"],
			category: "dev",
			dm: true,
			usage: `${client.config.prefix}sbc`,
			modsOnly: true,
			baseXp: 0,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		if (!joined)
			return void (await M.reply(`Please provide the Broadcast Message.`));
		const term = joined.trim();
		const gifs = [
			"https://c.tenor.com/tZVpbfTIjNMAAAAC/pikachu.mp4",
			"https://c.tenor.com/p6I6OADySl4AAAAC/piku.mp4",
			"https://c.tenor.com/jHHKjbx6ZIoAAAAC/pikachu.mp4",
		];
		const selected = gifs[Math.floor(Math.random() * gifs.length)];
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const chats: any = this.client.chats
			.all()
			.filter((v) => !v.read_only && !v.archive)
			.map((v) => v.jid)
			.map((jids) => (jids.includes("g.us") ? jids : null))
			.filter((v) => v);
		for (let i = 0; i < chats.length; i++) {
			const text = `*🍃🎋「 🐇 PIKU says 」🎋🍃*\n\n${term}\n\n`;
			this.client.sendMessage(chats[i], { url: selected }, MessageType.video, {
				mimetype: Mimetype.gif,
				caption: `${text}`,
				},
			});
		}
		await M.reply(`✅ Broadcast Message sent to *${chats.length} groups*.`);
	};
}
