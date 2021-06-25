const { Client } = require('../src');

const client = new Client({
    client_id: process.env.CLIENT_ID
});


(async () => {
    const data = await client.request.searchTrack({
        query: 'hello'
    });

    console.log(data);
});