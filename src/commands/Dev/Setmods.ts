import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'setmods',
            description: 'Will replace the old prefix with the given term',
            category: 'dev',
            dm: true,
            usage: `${client.config.prefix}setmods [new_contact]`,
            modsOnly: true,
            baseXp: 0
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        const addmods = this.client.config.mods.map((mod) => this.client.add.Contact(mod)).filter((user) => user)
        if (!addmods) return void (await M.reply(`Please provide the new prefix.\n\n*Example: ${this.client.config.prefix}setmods $`))
        this.client.config.mods = addmods
        const text = `✅ *Successfully changed the prefix to $mods}.*`
        M.reply(text)
     }
}
