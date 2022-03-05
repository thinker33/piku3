import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import Heroku from 'heroku-client'
const heroku = new Heroku({
    token: "b7cf3d27-31d0-42d7-a813-b6a6d34c77fb"
});
const baseURI = '/apps/' + "pikushy"

import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'
// import { MessageType, Mimetype } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'restart',
            description: `restart bot`,
            aliases: ['restart'],
            category: 'heroku',
            usage: `${client.config.prefix}restart`,
            modsOnly: true,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
//if (!this.client.config.hapi) return void M.reply("No heroku API key set");
    //if (!this.client.config.hname) return void M.reply("No heroku name set");
    await M.reply(`Restarting.............`)
await heroku.delete(baseURI + '/dynos').catch(async (error: any) => {
        await M.reply("Error");
    });
}
}
