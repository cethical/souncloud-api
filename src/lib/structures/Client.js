const Request = require('./Request');

module.exports = class Client {
    constructor(settings) {
        this.request = new Request(settings);
    }
}