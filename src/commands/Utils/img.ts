import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { Sticker, Categories, StickerTypes } from 'wa-sticker-formatter'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'img',
            aliases: ['blabla'],
            description: 'Blank',
            category: 'utils',
            usage: `${client.config.prefix}sticker [(as caption | tag)[video | image]]`,
            baseXp: 30
        })
    }
{
    const image = new Image(data, {
        crop,
        author,
        pack
    })
    
    await img.load(filename)

    // get amount of frames
    let frames = img.anim.frames.length

    for (let i = 0; frames > i; i++) {
        await execute(`webpmux -get frame ${i} ${filename} -o ${temp}/${i}.webp`)
        await execute(`dwebp ${temp}/${i}.webp -o ${temp}/${i}.png`)
    }

    // build frames into mp4
    await execute(`ffmpeg -framerate 22 -i ${temp}/%d.png -y -c:v libx264 -pix_fmt yuv420p -loop 4 ${out}`)

    // delete frames
    for (frames === 0; frames--; ) {
        fs.unlink(`${temp}/${frames}.webp`)
        fs.unlink(`${temp}/${frames}.png`)
    }

    return { body: await fs.readFile(out), type: MessageType.video, mime: Mimetype.gif, caption: `Here you go.` }
}
