import { MessageType, WAParticipantAction } from '@adiwajshing/baileys'
import chalk from 'chalk'
import request from '../lib/request'
import WAClient from '../lib/WAClient'

export default class EventHandler {
    constructor(public client: WAClient) {}

    handle = async (event: IEvent): Promise<void> => {
        const group = await this.client.fetchGroupMetadataFromWA(event.jid)
        this.client.log(
            `${chalk.blueBright('EVENT')} ${chalk.green(
                `${this.client.util.capitalize(event.action)}[${event.participants.length}]`
            )} in ${chalk.cyanBright(group?.subject || 'Group')}`
        )
        const groupData = await this.client.groupMetadata(event.jid);
const members = groupData.participants.length
if (members < 5) { 
await this.client.sendMessage(event.jid, `Bye 👋 Bye 👋 \n\n *You don't have enough member to use bot*\n\n*︽]|I{•------» 𝒫𝒾𝓀𝓊 «------•}I|[︽*`, MessageType.text)
await this.client.groupLeave(event.jid)
}
       
        const data = await this.client.getGroupData(event.jid)
        if (!data.events) return void null
        const add = event.action === 'add'
        const text = add
					? `☆☆ Ｗｅｌｃｏｍｅ ☆☆ \n\n *${group.subject || "___"}* \n\n${
							group.desc
					  }\n\n✨${event.participants
							.map((jid) => `@${jid.split("@")[0]}`)
							.join(", ")}✨`
					: event.action === "remove"
					? `꧁🤾🏻‍♂️  *Hᴇʏ ᴍᴇᴍʙᴇʀs*   ⛹🏻‍♂️꧂ \n\n *Sᴇᴇ ᴛʜɪs ɴɪɢɢᴀ, ᴡʜᴏ ʟᴇᴀᴠᴇ ᴛʜɪs ɢʀᴏᴜᴘ ,sᴇᴇᴍ ʟɪᴋᴇ ʜᴇ/sʜᴇ ɪs sᴇɴᴇʟᴇss ᴀɴᴅ ᴅᴏɴᴛ know ʜᴏᴡ ᴀᴍᴀᴢɪɴɢ this ɢʀᴏᴜᴘ ɪs ,ʟᴇᴛs ғᴏʀɢᴇᴛ sᴜᴄʜ ᴀ ᴄʜɪʟᴅɪsʜ ᴍᴇᴍᴇʙᴇʀ ᴀɴᴅ ʟᴇᴛs ᴇɴᴊᴏʏ ʜᴇʀᴇ ᴡɪᴛʜᴏᴜᴛ ʜɪᴍ/ʜᴇʀ. 👽*  \n\n ᴡᴇ ɴᴏᴛ ɢᴏɴɴᴀ ᴍɪss ʏᴏᴜ. \n\n👋🏻👋🏻 *@${
							event.participants[0].split("@")[0] 
					  }* 👋🏻
 `
					: `*Oʏᴇ ʜᴏʏᴇ , sᴇᴇᴍ ʟɪᴋᴇ ᴛʜɪs ʏᴏᴜ ᴀʀᴇ ʙᴇsᴛ ғᴏʀ ᴛʜɪs ɢʀᴏᴜᴘ ᴀɴᴅ ɪ ᴡᴀɴɴᴀ sᴀʏ ɴᴏᴡ ᴛʜɪs ɢʀᴏᴜᴘ ɪs ʏᴏᴜʀ ,sᴏ ɴᴏᴜɢʜᴛʏ ,ʏᴏᴜ ᴋɴᴏᴡ ʏᴏᴜʀ ʟᴇᴠᴇʟ ᴜᴘ ᴀɴᴅ ɴᴏᴡ ʏᴏᴜ ᴀʀᴇ ᴀᴅᴍɪɴ ɪɴ ᴛʜɪs ɢʀᴏᴜᴘ, I ᴡᴀɴɴᴀ sᴀʏ ʙʟᴀsᴛ ʜᴇʀᴇ* *@${
							event.participants[0].split("@")[0]
					  }*⁩ ${
							event.actor ? ` by @${event.actor.split("@")[0]}` : ""
					  }`;
        const contextInfo = {
            mentionedJid: event.actor ? [...event.participants, event.actor] : event.participants
        }
        if (add){
            let pfp = this.client.assets.get('0_Pokemon-2019-Nintendo-Switch-new-game-announcement-761157')
            if (typeof pfp === 'string') pfp = await request.buffer(pfp)
            if (pfp)
                return void (await this.client.sendMessage(event.jid, pfp, MessageType.image, {
                    caption: text,
                    contextInfo
                }))
        }
        return void this.client.sendMessage(event.jid, text, MessageType.extendedText, { contextInfo })
    }
}

interface IEvent {
    jid: string
    participants: string[]
    actor?: string | undefined
    action: WAParticipantAction
}
