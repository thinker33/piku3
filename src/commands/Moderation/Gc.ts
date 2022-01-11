 import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            adminOnly: true,
            command: 'groupinfo',
            description: 'Updates the Group Subject or Description.',
            category: 'moderation',
            aliases: ['ga', 'gt'],
            usage: `${client.config.prefix}groupinfo`,
            baseXp: 0
        })
    }
     ​run = ​async​ ​exec​(​msg​: ​Message​)​: ​Promise​<​void​>​ ​{ 
 ​        ​const​ ​chat​ ​=​ ​await​ ​msg​.​getChat​(​)​ ​as​ ​any​; 
 ​        ​const​ ​url​ ​=​ ​await​ ​this​.​client​.​getProfilePicUrl​(​msg​.​from​)​; 
 ​        ​if​ ​(​url​)​ ​{ 
 ​            ​const​ ​{​ ​body​: ​img​ ​}​: ​{​ ​body​: ​Buffer​ ​}​ ​=​ ​await​ ​this​.​client​.​request​.​get​(​url​)​; 
 ​            ​msg​.​reply​(​new​ ​MessageMedia​(​"image/png"​,​ ​img​.​toString​(​"base64"​)​,​ ​"icon.png"​)​,​ ​msg​.​from​,​ ​{ 
 ​                ​caption​: ​stripIndent​(​` 
 ​                *Group Info* [​${​chat​.​groupMetadata​.​participants​.​length​}​ members] 
 ​                - Name: ​${​chat​.​name​} 
 ​                - ID: ​${​msg​.​from​} 
 ​            `​) 
 ​            ​}​)​; 
 ​        ​}​ ​else​ ​{ 
 ​            ​msg​.​reply​(​stripIndent​(​` 
 ​            *Group Info* [​${​chat​.​groupMetadata​.​participants​.​length​}​ members] 
 ​            - Name: ​${​chat​.​name​} 
 ​            - ID: ​${​msg​.​from​} 
 ​            `​)​)​; 
 ​        ​} 
 ​    ​} 
 ​}
