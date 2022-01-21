import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'
// import { MessageType, Mimetype } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'rules',
            description: `Get rules list`,
            aliases: ['rules', 'guide', 'bot'],
            category: 'general',
            usage: `${client.config.prefix}rules`,
            baseXp: 5000
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        // fetch result of https://waifu.pics/api/sfw/waifu from the API using axios
        return void M.reply( await request.buffer(`https://i.waifu.pics/anKsYF2.png`),
        MessageType.image,
                    undefined,
                    undefined,
                    `_ *🗃️GUIDE/📄RULE -----=>* _\n⚠️\n📃Please Kindly follow the rules \n\n\n📢 use ,mods to know anything\n\n🔖 bot doesn't talk. So don't try
To chat\n\n📌 If you want to add bot in your group the contact the mods by *,mods* \n\n\n📜 *Bot will not stay in less than 5 participants👀 group* 👋\n\n⚡ Don't use wrong command,\n\n📎use the command given in the *help list* *(,help)* \n\n⚠️ Dont spam the bot with commands if the bot is not responding, It means the bot maybe offline or facing internet issue. \n\n⚔️ Dont Dm the bot \n------------------------------------\n\n💣IF YOU DONT FOLLOW THE RULES THEN YOU WILL BE BAN SOON🚫  `,
                    undefined
                ).catch((reason: any) =>
            M.reply(`✖ An error occurred. Please try again later.`))
    }
}
