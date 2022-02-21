import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'report',
            aliases: ['rpt'],
            category: 'general',
            usage: `${client.config.prefix}report`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.mods.sendMessage( M.sender.jid
        const term = joined.trim(),
        return void this.client.mods.sendMessage(M.reply, {term}, {quoted:M.WAMessage,
            caption: `Sent you the report in personal message \n` }
        )
    ));
}
}
