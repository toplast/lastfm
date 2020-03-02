<h1 align="center">@toplast/lastfm</h1>

<h5 align="center">An asynchronous and typed client for the Last.fm API</h5>

<div align="center">
  <a href="https://circleci.com/gh/castilh0s/lastfm">
    <img src="https://circleci.com/gh/castilh0s/lastfm.svg?style=shield" alt="CircleCI" />
  </a>
  <a href="https://codecov.io/gh/castilh0s/lastfm">
    <img src="https://codecov.io/gh/castilh0s/lastfm/branch/master/graph/badge.svg" alt="Coverage" />
  </a>
  <a href="https://www.npmjs.com/package/@toplast/lastfm">
    <img src="https://img.shields.io/npm/v/@toplast/lastfm" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/@toplast/lastfm">
    <img src="https://img.shields.io/npm/dm/@toplast/lastfm" alt="npm downloads"/>
  </a>
</div>

<br />

```javascript
const LastFm = require("@toplast/lastfm");
const lastFm = new LastFm("SOME_NICE_API_KEY");

lastFm.user
  .getTopAlbums({ user: "castilh0s" })
  .then(response => console.log(response)) // Handle success
  .error(error => console.log(error)); // Handle error
```

## Installation

```bash
# With npm
$ npm install @toplast/lastfm

# With yarn
$ yarn add @toplast/lastfm
```

## TypeScript

`@toplast/lastfm` includes TypeScript definitions.

```typescript
import LastFm from "@toplast/lastfm";

const lastFm = new LastFm("API_KEY");

lastFm.user.getTopAlbums({ user: "castilh0s" });
```

## License

[MIT](LICENSE)
