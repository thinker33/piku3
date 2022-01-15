import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType, Mimetype } from "@adiwajshing/baileys";
import { Sticker, Categories, StickerTypes } from "wa-sticker-formatter";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "heveryone",
			description: "Tags all users in group chat",
			aliases: ["al", "tall", "piing"],
			category: "moderation",
			usage: `${client.config.prefix}heveryone`,
			adminOnly: true,
			baseXp: 20,
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
			"https://media.tenor.com/videos/b5bb295fb219e5cd12cb74d29eaa079c/mp4",
			"https://media.tenor.com/videos/cb603deb19eefdb7feee3aa7aa1aa7b6/mp4",
			"https://media.tenor.com/videos/31edd50dd5096731be4690a67142a1aa/mp4",
			"https://media.tenor.com/videos/8fb551bffa77b6f6d875eb0a0a5e8fa9/mp4",
			"https://media.tenor.com/videos/e09c85e729650f03ca9099663718e38c/mp4",
			"https://media.tenor.com/videos/9eda38308ee0b60c51962dde63d203c7/mp4",
			"https://media.tenor.com/videos/f4c3cd17a4348142d254a1f5f206a0d7/mp4",
		];
			const text = `${term}\n\n Regards ~ *${M.sender.username}*`;
			this.client.sendMessage(chats[i], { url: selected }, MessageType.video, {
				mimetype: Mimetype.gif,
				caption: `${text}`,
				contextInfo: {
					mentionedJid: M.groupMetadata?.participants.map((user) => user.jid),
				},
			});
		}
	};
}
