import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings"; 

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'rep',
            aliases: ['report'],
            description: 'Get the group invite link',
            category: 'dev',
            usage: `${client.config.prefix}invite`,
            baseXp: 10
        })
    }

    run = async (

		M: ISimplifiedMessage,		{ joined }: IParsedArgs

	): Promise<void> => {
        
             const term = joined.trim()
            await this.client.sendMessage(
               // enter your unique gid
`916307568766@s.whatsapp.net`,
                `${term} by ${M.sender.username}`,
                MessageType.text
            );
            return void M.reply('Sent the bot admin your report N.b if you used this command for fun you will be banned!!')
        }}
