import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'rahnk',
            description: 'Displays user-rank ',
            category: 'general',
            usage: `${client.config.prefix}rahnk [tag/quote]`,
            aliases: ['rg', 'rok'],
            baseXp: 30
        })
    }

run = async (M: ISimplifiedMessage, parsedArgs: IParsedArgs): Promise<void> => { 
      if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
        const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
        let username = user === M.sender.jid ? M.sender.username : ''
        if (!username) {
            const contact = this.client.getContact(user)
            username = contact.notify || contact.vname || contact.name || user.split('@')[0]
        }
     const exp = (await this.client.getUser(user)).Xp
        let role
        if (exp < 500) {
            role = ' Citizen'
        } else if (exp < 1000) {
            role = ' Cleric'
        } else if (exp < 2000) {
            role = ' Wizard'
        } else if (exp < 5000) {
            role = ' Mage'
        } else if (exp < 10000) {
            role = ' Noble'
        } else if (exp < 25000) {
            role = ' Elite'
        } else if (exp < 50000) {
            role = ' Ace'
        } else if (exp < 75000) {
            role = ' Hero'
        } else if (exp < 100000) {
            role = ' Supreme'
        } else {
            role = ' Mystic'
        }

        let level
        if (exp < 500) {
            level = '1'
        } else if (exp < 1000) {
            level = '2'
        } else if (exp < 2000) {
            level = '3'
        } else if (exp < 5000) {
            level = '4'
        } else if (exp < 10000) {
            level = '5'
        } else if (exp < 25000) {
            level = '6'
        } else if (exp < 50000) {
            level = '7'
        } else if (exp < 75000) {
            level = '8'
        } else if (exp < 100000) {
            level = '9'
        } else {
            level = 'Max'
        }
        
        let rxp
        if (exp < 500) {
            level = '1000'
        } else if (exp < 1000) {
            level = '2000'
        } else if (exp < 2000) {
            level = '3000'
        } else if (exp < 5000) {
            level = '10000'
        } else if (exp < 10000) {
            level = '20000'
        } else if (exp < 25000) {
            level = '30000'
        } else if (exp < 50000) {
            level = '60000'
        } else if (exp < 75000) {
            level = '80000'
        } else if (exp < 100000) {
            level = 'Max'
        } else {
            level = 'Max × Infinity'
        }
        
const pfp = await this.client.getProfilePicture(user);
M.reply( await request.buffer(`https://api.ichikaa.xyz/api/rankcard?name=${username}&currentxp=${exp || 0}&requiredxp=${rxp}&level=${level}&picurl=${pfp}&bgurl=https://i.ibb.co/4YBNyvP/images-76.jpg`),
        MessageType.image,
                    undefined,
                    undefined,
                    ``,
                    undefined
                ).catch((reason: any) =>
            M.reply(` An error occurred. Please try again later. ${reason}`))
    }
}
