const Client = require('./lib/structures/Client');

const fse = require('fs-extra');

const client = new Client({
    client_id: 'ahAJuiWvqPHUWMtUhizqN5QaITxmOwTN'
});

client.request.searchTrack({
    query: 'hello',
    limit: 1
}).then(async ([track]) => {
    const stream = await client.request.createStream(track.media.stream);
    const file = fse.createReadStream(await stream);
});