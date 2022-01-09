import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'here',
            aliases: ['inve', 'linkiiogc'],
            description: 'Get the group invite link',
            category: 'general',
            usage: `${client.config.prefix}here`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
      this.client.on ('CB:Presence', json => console.log(json.id + " presence is " + json.type))
  if (!M.groupMetadata?.participants.presence(user)?.includes(this.client.user.jid))
           
        } else {
            return void (await M.reply(
				`${
					M.groupMetadata?.presence || 
				}\n*READ QUOTED MESSAGE*\n*[TAGGED MAGICALLY]*`,
				undefined,
				undefined,
				M.groupMetadata?.participants.presence((user) => user.jid)
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			).catch((reason: any) =>
				M.reply(`✖️ An error occurred, Reason: ${reason}`)
			));
	};
}
