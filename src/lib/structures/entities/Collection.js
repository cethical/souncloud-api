const Track = require('./Track');

module.exports = class Collection {
    constructor(data = []) {
        return data.map(x => new Track(x));
    }
}