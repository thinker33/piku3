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
            command: 'amv',
            description: `Get random amvs`,
            aliases: ['amv'],
            category: 'weeb',
            usage: `${client.config.prefix}amv`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
      await axios
            .get(`http://zekais-api.herokuapp.com/yts?query=amv&apikey=CnXf9Ojs`)
            .then((response) => {
              const i = Math.floor(Math.random() * response.data.result.length)
                const text = `${response.data.result[i].url}`
               console.log(text)
        const { data } = await axios.get('http://zekais-api.herokuapp.com/ytmp4?url=${text}&apikey=CnXf9Ojs')
        const buffer = await request.buffer(data.thumb).catch((e) => {
            return void M.reply(e.message)
        })
        while (true) {
            try {
                M.reply(
                    buffer || '🌟 An error occurred. Please try again later',
                    MessageType.video,
                    undefined,
                    undefined,
                    `Amv`,
                    undefined
                
    }
}
