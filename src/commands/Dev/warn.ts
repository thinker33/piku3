import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'warn',
            description: 'Bans the tagged users globally',
            category: 'dev',
            usage: `${client.config.prefix}warn [@mention | tag]`,
            modsOnly: true,
            basewarnings: 1
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const immortals = this.client.config.mods
            ? [M.sender.jid, this.client.user.jid, ...this.client.config.mods]
            : [M.sender.jid, this.client.user.jid]

        if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
            const data = await this.client.getUser(user)
            // const info = this.client.getContact(user)
            // const username = info.notify || info.vname || info.name || user.split('@')[0]
            // const username = user.split('@')[0]
            if (data?.warnings) {
                text += `🟨 @${user.split('@')[0]}: Already warned\n`
                continue
            }
            await this.client.blockUser(user);
            await this.client.setwarnings(user);
            await this.client.setwarnings(M.sender.jid)
            text += `🟥 @${user.split('@')[0]}: warned\n`
        }
        await M.reply(
            `${text}`,
            undefined,
            undefined,
            // undefined
            [...M.mentioned, M.sender.jid]
        )
    }
}
