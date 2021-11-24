const ReadText = require('text-from-image');
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import request from "../../lib/request";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "ocr",
			description: `Gives you the text from the given image.`,
			aliases: ["ocr", "oc"],
			category: "educative",
			usage: `${client.config.prefix}ocr [tag_image]`,
			baseXp: 50,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		let buffer;
		if (M.quoted?.message?.message?.imageMessage)
			buffer = await this.client.downloadMediaMessage(M.quoted.message);
		else if (M.WAMessage.message?.imageMessage)
			buffer = await this.client.downloadMediaMessage(M.WAMessage);
		else if (M.quoted?.message?.message?.videoMessage)
			buffer = await this.client.downloadMediaMessage(M.quoted.message);
		else if (M.WAMessage.message?.videoMessage)
			buffer = await this.client.downloadMediaMessage(M.WAMessage);
		if (!buffer) return void M.reply(`Give me an image/gif to search, Baka!`);
		const text = await ReadText(buffer, 2, 3)
		await M.reply(`${text}`);
	}
}
