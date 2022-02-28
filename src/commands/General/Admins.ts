import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'admins',
            description: 'Tags all Admins 🎖️',
            category: 'general',
            usage: `${client.config.prefix}admins (Message)`,
            baseXp: 0
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
       const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
        let username = user === M.sender.jid ? M.sender.username : ''
        if (!username) {
            const contact = this.client.getContact(user)
            username = contact.notify || contact.vname || contact.name || user.split('@')[0]
        }
        return void (await M.reply(`*ADMINS!*\n\n[ You are summoned by *@${user.split('@')[0]}* ]`, undefined, undefined, M.groupMetadata?.admins).catch(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (reason: any) => M.reply(`an error occurred, Reason: ${reason}`)
        ))
    }
}
