import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import axios from 'axios'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'
const { Spawn } = require("pokecord");

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'gpokemon',
            description: ``,
            aliases: ['p'],
            category: 'weeb',
            usage: `${client.config.prefix}gpokemon`,
            baseXp: 50
        })
    }

    run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
        const pokemon = await Spawn().catch(e => {});
    if (!pokemon) return void M.reply(`Opps! Something went wrong`);
        return void M.reply(await request.buffer(pokemon.imageURL), MessageType.image, undefined, undefined, `Guess the pokemon` )
         const query = joined.trim();  
		 if (!m.content || m.content.toLowerCase() !== pokemon.name.toLowerCase()) return message.channel.send(`❌ | Incorrect guess! The answer was **${pokemon.name}**.`);
        return message.channel.send(`✅ | Correct guess!`);
    })
				).catch(() => {
        M.reply(`❌ | You did not answer in time. The correct answer was **${pokemon.name}**!`);
    })
                break
            } catch (e) {
                // console.log('Failed2')
                M.reply(`Could not fetch image. Here's the URL : ${data.url}`)
                console.log(`This Error occurs when an image is sent via M.reply()\n Parent Catch Block : \n${e}`)
            }
        }
        return void null
    }
}
