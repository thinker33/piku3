import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient, { toggleableGroupActions } from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            modsOnly: true,
            command: '✋',
            aliases: ['4'],
            category: 'dev',
            usage: `${client.config.prefix}✋ [feature]`,
            baseXp: 0
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        const type = joined.trim().toLowerCase() as toggleableGroupActions
        if (!Object.values(toggleableGroupActions).includes(type))
            return void M.reply(`🟥 Invalid Option: *${this.client.util.capitalize(type)}*`)
        const data = await this.client.getGroupData(M.from)
        if (!data[type]) return void M.reply(`🟨 *${this.client.util.capitalize(type)}* is already *inactived*, Baka!`)
        await this.client.DB.group.updateOne({ jid: M.from }, { $set: { [type]: false } })
        return void M.reply(`🟩 *${this.client.util.capitalize(type)}* is now inactive`)
    }
}
