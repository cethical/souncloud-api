const Collection = require('./entities/Collection');
const Track = require('./entities/Track');

const axios = require('axios');

module.exports = class Request {
    constructor(settings) {
        this.request = axios.default.create({
            baseURL: 'https://api-v2.soundcloud.com',
            params: {
                client_id: settings.client_id
            }
        });
    }

    async createStream(stream) {
        const { data } = await this.request.get(stream);

        return data.url;
    }

    async searchTrack({ query, limit }) {
        let { data } = await this.request.get('/search/tracks', {
            params: {
                q: encodeURI(query),
                limit: limit ? limit : 1
            }
        });

        if (!limit || limit <= 1) {
            return new Track(data.collection.shift());
        }

        return new Collection(data.collection);
    }
}