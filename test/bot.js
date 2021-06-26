require('dotenv').config();

const { SoundCloud } = require('../src');
const { Client } = require('discord.js');

const soundcloud = new SoundCloud({
    client_id: process.env.CLIENT_ID
});

const client = new Client();

const prefix = '.';

client.on('message', async msg => {
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd == 'play') {
        const track = await soundcloud.request.searchTrack({
            query: args.join(' ')
        });

        const stream = await soundcloud.request.createStream(track.media.stream);

        const voiceChannel = msg.member.voice.channel;
        if (!voiceChannel) throw Error('Member was not found in a voice channel.');

        const connection = await voiceChannel.join();
        const dispatcher = await connection.play(stream);

        // ...
    }
});

client.login(process.env.TOKEN);