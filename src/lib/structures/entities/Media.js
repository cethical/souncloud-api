module.exports = class Media {
    constructor(data) {
        this.stream = data.transcodings[0].url;
    }
}