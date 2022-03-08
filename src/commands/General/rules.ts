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
            aliases: ['rules', 'guide'],
            category: 'general',
            usage: `${client.config.prefix}rules`,
            dm: true,
            baseXp: 5000
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void M.reply( await request.buffer(`https://i.ibb.co/FWTD0JT/images-1-7.jpg`),
        MessageType.image,
                    undefined,
                    undefined,
                    `\n🧞‍♂️ *Please, Read every line carefully.....*\n\n🐾Use *${this.client.config.prefix}help* <command_name> to view the command info.\n\n\n📢 use ,mods to know anything\n\n🔖 bot doesn't talk. So don't try To chat\n\n📌 If you want to add bot in your group the contact the mods by *,mods* \n\n\n📜 *Bot will not stay in less than 5 participants👀 group* 👋\n\n🔹 Use report command if you have complaints, issue, suggestions.\n🔺 You will be ban after 3 warning. So don't Spam.\n\n⚡ Don't use wrong command,\n\n📎use the command given in the *help list* *(,help)* \n\n⚠️ Dont spam the bot with commands if the bot is not responding, It means the bot maybe offline or facing internet issue. \n\n⚔️ Dont Dm the bot \n------------------------------------\n\n💣IF YOU DONT FOLLOW THE RULES THEN YOU WILL BE BAN SOON🚫 \n\n${this.client.config.prefix}help\n${this.client.config.prefix}mods\n${this.client.config.prefix}report `,
                    undefined
                ).catch((reason: any) =>
            M.reply(`✖ An error occurred. Please try again later.`))
    }
}
