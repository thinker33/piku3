import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            adminOnly: true,
            command: 'group',
            description: 'Group Description.',
            category: 'moderation',
            aliases: ['ginfo', 'gc'],
            usage: `${client.config.prefix}group)`,
            baseXp: 0
        })
    }
 ​    ​run = async (M: ISimplifiedMessage): Promise<void> => { 
 ​        ​const​ ​metadata​ ​=​ ​await​ ​this​.​groupMetadata​(​jid​) 
 ​        ​const​ ​admins​: ​string​[​]​ ​=​ ​[​] 
 ​        ​metadata​.​participants​.​forEach​(​(​user​)​ ​=>​ ​(​user​.​isAdmin​ ? ​admins​.​push​(​user​.​jid​)​ : ​''​)​) 
 ​        ​let​ ​data​ ​=​ ​await​ ​this​.​GroupModel​.​findOne​(​{​ jid ​}​) 
 ​        ​if​ ​(​!​data​)​ ​data​ ​=​ ​await​ ​new​ ​this​.​GroupModel​(​{​ jid ​}​)​.​save​(​) 
 ​        ​return​ ​{​ metadata​,​ admins​,​ data ​} 
 ​    ​} 
 ​}
