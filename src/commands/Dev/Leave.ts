import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'leave',
            description: 'Bot Leaves the group',
            category: 'dev',
            dm: true,
            usage: `${client.config.prefix}leave`,
            modsOnly: true,
            baseXp: 0
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        if (!M.urls.length) return void M.reply('Link?')
        const url = M.urls.find((url) => url.includes('chat.whatsapp.com'))
        if (!url) return void M.reply('No WhatsApp Invite URLs found in your message')
        if (this.client.config.mods?.includes(M.sender.jid)) {
            const groups = this.client.chats
                .all()
                .filter((chat) => chat.jid.endsWith('g.us'))
                .map((chat) => chat.jid)
            const s = url.split('/')
            
        await M.reply(`*Goodbye* 👋`)
        return void M.reply(`leave ${(await this.client.fetchGroupMetadataFromWA(gid)).subject}`)
       
    }
}
}
