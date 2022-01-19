import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import akaneko from "akaneko";
import request from "../../lib/request";
import { MessageType } from "@adiwajshing/baileys";
// import { MessageType, Mimetype } from '@adiwajshing/baileys'
const w5botapi = require('w5-textmaker');

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'pquote',
            description: 'Will send you random quote.',
            aliases: ['pqu'],
            category: 'fun',
            usage: `${client.config.prefix}pquote`,
            baseXp: 30
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const cara = joined.trim()
		const wall = await w5botapi.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html",
    cara
     );
        // load JSON
        const quotes = JSON.parse((this.client.assets.get('quotes') as Buffer).toString()) as unknown as {
            quotes: {
                _id: string
                content: string
                author: string
            }[]
        }
        if (!quotes) return void null
        // select a random quote
        const quote = quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)]
        const buffer = await request.buffer(wall).catch((e) => {
			return void M.reply(${quote.content}\n: ${quote.author});
		});
        M.reply(buffer)
    }
}
