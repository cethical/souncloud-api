A [SoundCloud](https://soundcloud.com/) API wrapper, easy to use all accessable with just a token. You can view all examples in [test](./test)

> NOTE: `*` means it is required 
### Client

Name | Type | Description
---- | ---- | -----------
client_id* | String | The 'token' you will be needing

```js
const { Client } = require('soundcloud-api-wrapper');

const client = new Client({
    client_id: 'CLIENT_ID'
});
```

### Searching

Name | Type | Description
---- | ---- | -----------
query* | String | The search query
limit | Number | The amount of results you want

```js
...

const <track> = client.request.searchTrack({
    query: 'hello world',
    limit: 3
});

// NOTE: <track> returns a Promise
// NOTE: If limit is added it will return an array of results, unless it is less than 1 or 1.
```