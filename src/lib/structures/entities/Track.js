const Media = require('./Media');
const User = require('./User');

module.exports = class Track {
    constructor(data) {
        this.kind = data.kind;
        this.title = data.title;
        this.id = data.id;
        this.artwork = data.artwork_url;
        this.duration = data.duration;
        this.media = new Media(data.media);
        this.user = new User(data.user);
    }
}