import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import yts from 'yt-search'
import YT from '../../lib/YT'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'video',
            description: 'get video from yt',
            category: 'media',
            aliases: ['playv'],
            usage: `${client.config.prefix}video [term]`,
            dm: false,
            baseXp: 30
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void M.reply('🔎 Provide a search term')
        const term = joined.trim()
        const { videos } = await yts(term)
        if (!videos || videos.length <= 0) return void M.reply(`⚓ No Matching videos found for the term : *${term}*`)
        const video = new YT(videos[0].url, 'video')
        if (!video.url) return
        M.reply('👾 Sending your video, Please hold on. It may takes some times.')
        this.client
            .sendMessage(M.from, await video.getBuffer(), MessageType.video, {
                quoted: M.WAMessage,
               caption: 'HERE YOU GO....'
            })
            .catch((reason: any) => M.reply(`❌ an error occupered, Reason: ${reason}`))
    }
}