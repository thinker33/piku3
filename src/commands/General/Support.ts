import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            description: 'Get the support group link',
            category: 'general',
            usage: `${client.config.prefix}support [(as caption | tag)[video | image]]`,
            dm: true,
            baseXp: 30
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void this.client.sendMessage(M.sender.jid, `https://chat.whatsapp.com/HEUVtd3ohDP6BIYlQkXfab`, MessageType.text)
    }
}
