import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'
// import { MessageType, Mimetype } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'hsearch',
            description: `Gives you the data of the given Hentai.`,
            aliases: ['hs'],
            category: 'nsfw',
            usage: `${client.config.prefix}hsearch [title]`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void (await M.reply(`Give me a manga title, Baka!`))
        const chitoge = joined.trim()
        console.log(chitoge)
        const { data } = await axios.get(`https://velgrynd.herokuapp.com/api/nhentai?code=${chitoge}`)
        if ( !(await this.client.getGroupData(M.from)).nsfw)
            return void M.reply(
                `Sorry NSFW is not enabled`
            )
        const buffer = await request.buffer(data.result.hasil.cover).catch((e) => {
            return void M.reply(e.message)
        })
        while (true) {
            try {
                M.reply(
                    buffer || '✖ An error occurred. Please try again later.',
                    MessageType.image,
                    undefined,
                    undefined,
                    `🎀 *Title:* ${data.result.hasil.title.default}\n💮 *ID:* ${data.result.hasil.id}\n🌸 *Language:* ${data.result.hasil.language}\n🀄 *parodies* :  ${data.result.hasil.details.parodies[0].name}\n${data.result.hasil.details.parodies[0].count}\n${data.result.hasil.details.parodies[0].link}\n 📃 *Artist* : ${data.result.hasil.details.artists[0].name}\n🗻 Favourites : ${data.result.hasil.favorites}\n 🎛*Uploaded* : ${data.result.hasil.uploadedAt}\n*${data.result.hasil.link}*   `,
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
