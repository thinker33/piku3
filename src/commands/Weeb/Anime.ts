import { MessageType } from '@adiwajshing/baileys'
import request from '../../lib/request'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'anime',
            aliases: ['a', 'ani'],
            description: 'Searches the given anime. ',
            category: 'weeb',
            
            usage: `${client.config.prefix}anime [title]`
        })
    }
    // static count = 0
    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        
        if (!joined) return void M.reply('✖ Provide an anime to search, Baka!')
        const chitoge = joined.trim()
        console.log(chitoge)
        const { data } = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${chitoge}`)
if (!data.results[0].title) return void M.reply( await request.buffer(`https://www.linkpicture.com/q/IMG-20220118-WA0387.png`),
        MessageType.image,
                    undefined,
                    undefined,
                    `404 Error can not find the anime *${chitoge}*`,
                    undefined
                )
        const buffer = await request.buffer(data.results[0].image_url).catch((e) => {
            return void M.reply(e.message)
        })
        while (true) {
            try {
                M.reply(
                    buffer || '✖ An error occurred. Please try again later',
                    MessageType.image,
                    undefined,
                    undefined,
                    `🎀 *Title: ${data.results[0].title}*\n🎋 *Ongoing: ${data.results[0].airing}*\n🎐 *Premiered on: ${data.results[0].start_date}*\n🎗 *Ended on: ${data.results[0].end_date}*\n💠 *Total Episodes: ${data.results[0].episodes}*\n🌟 *Score: ${data.results[0].score}*\n💎 *Rating: ${data.results[0].rated}*\n❄ *Description: ${data.results[0].synopsis}*\n\n🌐 *MyAnimeList URL: ${data.results[0].url}*\n`,
                    undefined
                ).catch((e) => {
                    console.log(`This error occurs when an image is sent via M.reply()\n Child Catch Block : \n${e}`)
                    // console.log('Failed')
                    M.reply(`✖ An error occurred. Please try again later.`)
                })
                break
            } catch (e) {
                // console.log('Failed2')
                M.reply(`✖ An error occurred. Please try again later.`)
                console.log(`This error occurs when an image is sent via M.reply()\n Parent Catch Block : \n${e}`)
            }
        }
        return void null
    }
}
