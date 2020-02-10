# LastFm

An asynchronous and typed client for the Last.fm API.

## Installing

Using npm:

``` bash
$ npm install @toplast/lastfm
```

Using yarn:

``` bash
$ yarn add @toplast/lastfm
```

## Example

``` javascript
const {
    LastFm
} = require("@toplast/lastfm");

const lastFm = new LastFm("API_KEY");

lastFm.user.getTopAlbums({ user: "castilh0s" })
    .then(response => {
        // Handle success
        console.log(response);
    })
    .error(error => {
        // Handle error
        console.log(error);
    });

// Using async/await
async function getTopAlbums() {
    try {
        const response = await lastFm.user.getTopAlbums({ user: "castilh0s" })
    } catch (error) {
        console.error(error);
    }
}
```

## TypeScript

`@toplast/lastfm` includes TypeScript definitions.

``` typescript
import { LastFm } from "@toplast/lastfm";

const lastFm = new LastFm("API_KEY");

lastFm.user.getTopAlbums({ user: "castilh0s" });
```

## License

[MIT](LICENSE)
