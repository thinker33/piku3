import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings"; 

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: "spam",
            aliases: ["spam"],
            description: "send spam messages in group.",
            category: "fun",
            usage: `${client.config.prefix}spam`,
            dm: true,
            baseXp: 10
        })
    }
         run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
                const texas: any = joined.trim().split("|");
		const term: string = texas[0];
		const amount: number = texas[1];
		if (term === "")
	                return void M.reply(
				`Give me message to spam, Baka!`
			);
		if (!amount)
			return void M.reply(
				`Give me the number of messages to send, Baka!\n\nExample: *${this.client.config.prefix}spam I am spamming|10*`
			);
		if (amount > 20)
			return void M.reply(`Do you want me to *Super Spam* in this group?`);

    for (let i = 0; i < amount; i++) {
         await this.client.sendMessage(
	         M.from,
                `📨 ${term}`,
                MessageType.text
            );
	};
}}
