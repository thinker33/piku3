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
            aliases: ['rules'],
            category: 'general',
            usage: `${client.config.prefix}rules`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        // fetch result of https://tenor.com/view/sappletoast-gif-21862218
        return void M.reply( await request.buffer('https://c.tenor.com/U_dtJlIKJYEAAAAd/sappletoast.gif'),
        MessageType.gif,
                    undefined,
                    undefined,
                    `_*----⚠️[Rule]📋----*_\n\n📃Please Kindly follow the rules \n📢 use ,mods to know anything\n🔖  bot doesn't talk. So don't try
To chat\n*📌 If you want to add bot in your group the contact the mods by *,mods* \n⚡ Dont use wrong command, 📎use the command given in the *help list* *(,help)* \n⚠️ Dont spam the bot with commands if the bot is not responding, It means the bot maybe offline or facing internet issue. \n⚔️ Dont Dm the bot \n\n💣IF YOU DONT FOLLOW THE RULES THEN YOU WILL BE BAN SOON🚫  `,
                    undefined
                ).catch((reason: any) =>
            M.reply(`✖ An error occurred. Please try again later.`))
    }
}
