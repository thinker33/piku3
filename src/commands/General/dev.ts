import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'


export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'dev',
            description: 'Command list for mods',
            category: 'general',
            usage: `${client.config.prefix}dev (command_name)`,
            aliases: ['modlist', 'mlist', 'mh']
        })
    }

    run = async (M: ISimplifiedMessage, parsedArgs: IParsedArgs): Promise<void> => {
            const n = [
            './assets/Pikachu/images (4).mp4'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        if (!parsedArgs.joined) {
            const commands = this.handler.commands.keys()
            const categories: { [key: string]: ICommand[] } = {}
            for (const command of commands) {
                const info = this.handler.commands.get(command)
                if (!command) continue
                if (!info?.config?.category || info.config.category === 'games' || info.config.category === 'creation' || info.config.category === 'moderation' || info.config.category === 'educative' || info.config.category === 'coding' || info.config.category === 'media' || info.config.category === 'utils' || info.config.category === 'weeb' || info.config.category === 'fun' || info.config.category === 'general' || info.config.category === 'nsfw') continue
                if (Object.keys(categories).includes(info.config.category)) categories[info.config.category].push(info)
                else {
                    categories[info.config.category] = []
                    categories[info.config.category].push(info)
                }
            }
            let text = `
╭─️⌜COMMANDS FOR MODS⌝
│⋊ ᴜꜱᴇʀ: *${M.sender.username}*
│⋊ ɴᴀᴍᴇ: PIKU
│⋊ ᴘʀᴇꜰɪx: ${this.client.config.prefix}
╰────────────┘                            \n\n`
            const keys = Object.keys(categories)
            for (const key of keys)
                text += `${this.emojis[keys.indexOf(key)]}\n\n✓\`\`\`*${categories[
                    key
                ]*
                    .map((command) => command.config?.command)
                    .join(' , ')}\`\`\`\n\n`
            return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `${text} 
 ──❅┈[ ʘ‿ʘ ]┈❅───
┌────────────┈❅
│   🧨 PIKU
│   ©️ Synthesized Infinity Botto
└────────────┈⁂
❅┈[𝐇𝐚𝐯𝐞 𝐆𝐫𝐞𝐚𝐭 𝐃𝐚𝐲]┈❅
${this.client.config.prefix}ᴇᴠᴀʟ ᴛʜɪs.ᴄʟɪᴇɴᴛ.ʙᴀɴᴜsᴇʀ("[ᴍᴏʙ]@s.ᴡʜᴀᴛsᴀᴘᴘ.ɴᴇᴛ")
*︽]|I{•------» 𝒫𝒾𝓀𝓊 «------•}I|[︽*` }
            )
        }
        const key = parsedArgs.joined.toLowerCase()
        const command = this.handler.commands.get(key) || this.handler.aliases.get(key)
        )}
        )
    }
    emojis = ['📍']
}
