A [SoundCloud](https://soundcloud.com/) API wrapper, easy to use all accessable with just a token. You can view all examples [here](./test)

> NOTE: `*` means it is required 

### How to find your SoundCloud token
> Go to [SoundCloud](https://soundcloud.com) open console and look for the 'Network' tab. Once found make any request on SoundCloud or refresh the page and search for 'client_id', click one of the requests scroll down and Voilà.
![img](clientid.png)

### Client

Name | Type | Description
---- | ---- | -----------
client_id* | String | The 'token' you will be needing

```js
const { Client } = require('soundcloud-api-wrapper');

const <client> = new Client({
    client_id: 'CLIENT_ID'
});
```

### Searching for a Track

Name | Type | Description
---- | ---- | -----------
query* | String | The search query
limit | Number | The amount of results you want

```js
...

const <track> = <client>.request.searchTrack({
    query: 'hello world',
    limit: 3
});

// NOTE: <track> returns a Promise
// NOTE: If limit is added it will return an array of results, unless it is less than 1 or 1.
```

### Creating a streaming url
```js
...

// For one track
const <streamUrl> = <client>.request.createStream(<track>.media.stream);

// NOTE: <streamUrl> returns a Promise
// NOTE: <track> can both return a single Object or an Array of objects.
```