const Track = require('./Track');

module.exports = class Collection {
    constructor(data = []) {
        return data.collection.map(x => new Track(x));
    }
}