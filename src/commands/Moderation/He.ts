import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType, Mimetype } from "@adiwajshing/baileys";
import { Sticker, Categories, StickerTypes } from "wa-sticker-formatter";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "evne",
			description: "Tags all users in group chat",
			aliases: ["alj"],
			category: "moderation",
			usage: `${client.config.prefix}everyone`,
			adminOnly: true,
			baseXp: 20,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		const term = joined.trim();
		{
			const text = `\n${term}\n`,
				caption: `${text}`,
				contextInfo: {
					mentionedJid: M.groupMetadata?.participants.map((user) => user.jid)
					}
					}
		}
	
}
