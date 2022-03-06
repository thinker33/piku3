import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings"; 

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'report',
            aliases: ['rep'],
            description: 'send message mods, report, issue, advice',
            category: 'framework',
            usage: `${client.config.prefix}report`,
            baseXp: 10
        })
    }

    run = async (

		M: ISimplifiedMessage,		{ joined }: IParsedArgs

	): Promise<void> => {
             const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
        let username = user === M.sender.jid ? M.sender.username : ''
        if (!username) {
            const contact = this.client.getContact(user)
            username = contact.notify || contact.vname || contact.name || user.split('@')[0]
        };
        
             const term = joined.trim()
            await this.client.sendMessage(
               // enter your unique gid
`94787915565-1635243335@g.us`,
                `${term} by ${user}`,
                MessageType.text
            );
            return void M.reply('*Your message has been sent to the bot admin!*')
        }}
