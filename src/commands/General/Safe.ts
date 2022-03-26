import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType, Mimetype } from "@adiwajshing/baileys";
import { Sticker, Categories, StickerTypes } from "wa-sticker-formatter";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
            aliases: ['fick'],
            command: 'testm',
            description: 'removes the mentioned users',
            category: 'moderation',
            usage: `testm`,
            baseXp: 10
        })
    }

    run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
        let text = '*Action*\n\n'
       
             else {
                text += `🟥 Removed *@${user.split('@')[0]}*\n`
                await this.client.groupRemove(M.from, [user])
            }
        
        await M.reply(`${text}`, undefined, undefined, [M.sender.jid])
    }
}
