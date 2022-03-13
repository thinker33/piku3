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
            usage: `${client.config.prefix}leave`,
            modsOnly: true,
            baseXp: 0
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
    const tem =
			"assets/ezgif-1-3294f0e28c.mp4";
		await M.reply `${tem}`,`(`*Goodbye* 👋`)` 
        await this.client.groupLeave(M.from).catch(() => M.reply('Failed to leave the Group'))
}
}
,
