module.exports = class User {
    constructor(data) {
        this.username = data.username;
        this.id = data.id;
        this.url = data.permalink_url;
        this.avatar = data.avatar_url;
    }
}