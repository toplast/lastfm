import {
  IAlbumGetInfo,
  IAlbumGetTopTags,
} from "../../../src/modules/album/album.interface";

// http://ws.audioscrobbler.com///2.0/?method=album.getInfo&api_key=<KEY>&artist=Cher&album=Believe&format=json

export const exampleAlbumGetInfo: IAlbumGetInfo = {
  album: {
    artist: "Cher",
    mbid: "03c91c40-49a6-44a7-90e7-a700edf97a62",
    tags: {
      tag: [
        { url: "https://www.last.fm/tag/pop", name: "pop" },
        { url: "https://www.last.fm/tag/dance", name: "dance" },
        { url: "https://www.last.fm/tag/90s", name: "90s" },
        { url: "https://www.last.fm/tag/1998", name: "1998" },
        { url: "https://www.last.fm/tag/cher", name: "cher" },
      ],
    },
    playcount: "3920765",
    image: [
      {
        size: "small",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/3b54885952161aaea4ce2965b2db1638.png",
      },
      {
        size: "medium",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/3b54885952161aaea4ce2965b2db1638.png",
      },
      {
        size: "large",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/3b54885952161aaea4ce2965b2db1638.png",
      },
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/3b54885952161aaea4ce2965b2db1638.png",
      },
      {
        size: "mega",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/3b54885952161aaea4ce2965b2db1638.png",
      },
      {
        size: "",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/3b54885952161aaea4ce2965b2db1638.png",
      },
    ],
    tracks: {
      track: [
        {
          streamable: { fulltrack: "0", "#text": "0" },
          duration: 231,
          url: "https://www.last.fm/music/Cher/Believe/Believe",
          name: "Believe",
          "@attr": { rank: 1 },
          artist: {
            url: "https://www.last.fm/music/Cher",
            name: "Cher",
            mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          },
        },
        {
          streamable: { fulltrack: "0", "#text": "0" },
          duration: 228,
          url: "https://www.last.fm/music/Cher/Believe/The+Power",
          name: "The Power",
          "@attr": { rank: 2 },
          artist: {
            url: "https://www.last.fm/music/Cher",
            name: "Cher",
            mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          },
        },
        {
          streamable: { fulltrack: "0", "#text": "0" },
          duration: 272,
          url: "https://www.last.fm/music/Cher/Believe/Runaway",
          name: "Runaway",
          "@attr": { rank: 3 },
          artist: {
            url: "https://www.last.fm/music/Cher",
            name: "Cher",
            mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          },
        },
        {
          streamable: { fulltrack: "0", "#text": "0" },
          duration: 231,
          url: "https://www.last.fm/music/Cher/Believe/All+or+Nothing",
          name: "All or Nothing",
          "@attr": { rank: 4 },
          artist: {
            url: "https://www.last.fm/music/Cher",
            name: "Cher",
            mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          },
        },
        {
          streamable: { fulltrack: "0", "#text": "0" },
          duration: 224,
          url: "https://www.last.fm/music/Cher/Believe/Strong+Enough",
          name: "Strong Enough",
          "@attr": { rank: 5 },
          artist: {
            url: "https://www.last.fm/music/Cher",
            name: "Cher",
            mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          },
        },
        {
          streamable: { fulltrack: "0", "#text": "0" },
          duration: 249,
          url: "https://www.last.fm/music/Cher/Believe/Dov%27e+L%27amore",
          name: "Dov'e L'amore",
          "@attr": { rank: 6 },
          artist: {
            url: "https://www.last.fm/music/Cher",
            name: "Cher",
            mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          },
        },
        {
          streamable: { fulltrack: "0", "#text": "0" },
          duration: 272,
          url: "https://www.last.fm/music/Cher/Believe/Takin%27+Back+My+Heart",
          name: "Takin' Back My Heart",
          "@attr": { rank: 7 },
          artist: {
            url: "https://www.last.fm/music/Cher",
            name: "Cher",
            mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          },
        },
        {
          streamable: { fulltrack: "0", "#text": "0" },
          duration: 304,
          url: "https://www.last.fm/music/Cher/Believe/Taxi+Taxi",
          name: "Taxi Taxi",
          "@attr": { rank: 8 },
          artist: {
            url: "https://www.last.fm/music/Cher",
            name: "Cher",
            mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          },
        },
        {
          streamable: { fulltrack: "0", "#text": "0" },
          duration: 271,
          url: "https://www.last.fm/music/Cher/Believe/Love+Is+the+Groove",
          name: "Love Is the Groove",
          "@attr": { rank: 9 },
          artist: {
            url: "https://www.last.fm/music/Cher",
            name: "Cher",
            mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          },
        },
        {
          streamable: { fulltrack: "0", "#text": "0" },
          duration: null,
          url: "https://www.last.fm/music/Cher/Believe/We+All+Sleep+Alone",
          name: "We All Sleep Alone",
          "@attr": { rank: 10 },
          artist: {
            url: "https://www.last.fm/music/Cher",
            name: "Cher",
            mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          },
        },
      ],
    },
    url: "https://www.last.fm/music/Cher/Believe",
    name: "Believe",
    listeners: "542373",
    wiki: {
      published: "03 Mar 2010, 16:48",
      summary:
        'Believe is the twenty-third studio album by American singer-actress Cher, released on November 10, 1998 by Warner Bros. Records. The RIAA certified it Quadruple Platinum on December 23, 1999, recognizing four million shipments in the United States; Worldwide, the album has sold more than 20 million copies, making it the biggest-selling album of her career. In 1999 the album received three Grammy Awards nominations including "Record of the Year", "Best Pop Album" and winning "Best Dance Recording" for the single "Believe". It was released by Warner Bros. Records at the end of 1998. The album was executive produced by Rob <a href="https://www.last.fm/music/Cher/Believe">Read more on Last.fm</a>.',
      content:
        'Believe is the twenty-third studio album by American  singer-actress Cher, released on November 10, 1998 by Warner Bros. Records. The RIAA certified it Quadruple Platinum on December 23, 1999, recognizing four million shipments in the United States; Worldwide, the album has sold more than 20 million copies, making it the biggest-selling album of her career. In 1999 the album received three Grammy Awards nominations including "Record of the Year", "Best Pop Album" and winning "Best Dance Recording" for the single "Believe".\n\nIt was released by Warner Bros. Records at the end of 1998. The album was executive produced by Rob Dickens. Upon its debut, critical reception was generally positive. Believe became Cher\'s most commercially-successful release, reached number one and Top 10 all over the world. In the United States, the album was released on November 10, 1998, and reached number four on the Billboard 200 chart, where it was certified four times platinum.\n\nThe album featured a change in Cher\'s music; in addition, Believe presented a vocally stronger Cher and a massive use of vocoder and Auto-Tune. In 1999, the album received 3 Grammy Awards nominations for "Record of the Year", "Best Pop Album" and winning "Best Dance Recording". Throughout 1999 and into 2000 Cher was nominated and winning many awards for the album including a Billboard Music Award for "Female Vocalist of the Year", Lifelong Contribution Awards and a Star on the Walk of Fame shared with former Sonny Bono. The boost in Cher\'s popularity led to a very successful Do You Believe? Tour.\n\nThe album was dedicated to Sonny Bono, Cher\'s former husband who died earlier that year from a skiing accident.\n\nCher also recorded a cover version of "Love Is in the Air" during early sessions for this album. Although never officially released, the song has leaked on file sharing networks.\n\nSingles\n\n\n"Believe"\n"Strong Enough"\n"All or Nothing"\n"Dov\'è L\'Amore" <a href="https://www.last.fm/music/Cher/Believe">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply.',
    },
  },
};

// http://ws.audioscrobbler.com///2.0/?method=album.getTopTags&api_key=<KEY>&artist=Cher&album=Believe&format=json

export const exampleAlbumGetTopTags: IAlbumGetTopTags = {
  toptags: {
    tag: [
      { count: 100, name: "pop", url: "https://www.last.fm/tag/pop" },
      { count: 87, name: "90s", url: "https://www.last.fm/tag/90s" },
      { count: 69, name: "dance", url: "https://www.last.fm/tag/dance" },
      { count: 64, name: "cher", url: "https://www.last.fm/tag/cher" },
      { count: 60, name: "1998", url: "https://www.last.fm/tag/1998" },
      {
        count: 50,
        name: "albums I own",
        url: "https://www.last.fm/tag/albums+I+own",
      },
      { count: 28, name: "Disco", url: "https://www.last.fm/tag/Disco" },
      {
        count: 19,
        name: "favourite albums",
        url: "https://www.last.fm/tag/favourite+albums",
      },
      { count: 19, name: "Believe", url: "https://www.last.fm/tag/Believe" },
      {
        count: 19,
        name: "gotanygoodmusic",
        url: "https://www.last.fm/tag/gotanygoodmusic",
      },
      {
        count: 14,
        name: "female vocalists",
        url: "https://www.last.fm/tag/female+vocalists",
      },
      {
        count: 14,
        name: "female vocalist",
        url: "https://www.last.fm/tag/female+vocalist",
      },
      {
        count: 14,
        name: "hot fun in the summertime",
        url: "https://www.last.fm/tag/hot+fun+in+the+summertime",
      },
      { count: 10, name: "Awesome", url: "https://www.last.fm/tag/Awesome" },
      {
        count: 10,
        name: "favourite",
        url: "https://www.last.fm/tag/favourite",
      },
      {
        count: 10,
        name: "eurodance",
        url: "https://www.last.fm/tag/eurodance",
      },
      {
        count: 10,
        name: "dance pop",
        url: "https://www.last.fm/tag/dance+pop",
      },
      { count: 10, name: "90's", url: "https://www.last.fm/tag/90%27s" },
      { count: 10, name: "1990s", url: "https://www.last.fm/tag/1990s" },
      { count: 10, name: "1999", url: "https://www.last.fm/tag/1999" },
      { count: 10, name: "albums", url: "https://www.last.fm/tag/albums" },
      {
        count: 10,
        name: "music I like",
        url: "https://www.last.fm/tag/music+I+like",
      },
      { count: 10, name: "90s pop", url: "https://www.last.fm/tag/90s+pop" },
      { count: 10, name: "test2", url: "https://www.last.fm/tag/test2" },
      { count: 10, name: "sourabh", url: "https://www.last.fm/tag/sourabh" },
      { count: 5, name: "test", url: "https://www.last.fm/tag/test" },
      {
        count: 5,
        name: "electronic",
        url: "https://www.last.fm/tag/electronic",
      },
      { count: 5, name: "rock", url: "https://www.last.fm/tag/rock" },
      { count: 5, name: "soul", url: "https://www.last.fm/tag/soul" },
      {
        count: 5,
        name: "alternative",
        url: "https://www.last.fm/tag/alternative",
      },
      { count: 5, name: "epic", url: "https://www.last.fm/tag/epic" },
      {
        count: 5,
        name: "album rock",
        url: "https://www.last.fm/tag/album+rock",
      },
      { count: 5, name: "dance-pop", url: "https://www.last.fm/tag/dance-pop" },
      { count: 5, name: "latin", url: "https://www.last.fm/tag/latin" },
      { count: 5, name: "House", url: "https://www.last.fm/tag/House" },
      { count: 5, name: "singer", url: "https://www.last.fm/tag/singer" },
      { count: 5, name: "3", url: "https://www.last.fm/tag/3" },
      { count: 5, name: "american", url: "https://www.last.fm/tag/american" },
      {
        count: 5,
        name: "favorite albums",
        url: "https://www.last.fm/tag/favorite+albums",
      },
      {
        count: 5,
        name: "California",
        url: "https://www.last.fm/tag/California",
      },
      { count: 5, name: "radiohead", url: "https://www.last.fm/tag/radiohead" },
      {
        count: 5,
        name: "World Music",
        url: "https://www.last.fm/tag/World+Music",
      },
      { count: 5, name: "good", url: "https://www.last.fm/tag/good" },
      { count: 5, name: "Israel", url: "https://www.last.fm/tag/Israel" },
      { count: 5, name: "Workout", url: "https://www.last.fm/tag/Workout" },
      { count: 5, name: "top 40", url: "https://www.last.fm/tag/top+40" },
      { count: 5, name: "technopop", url: "https://www.last.fm/tag/technopop" },
      { count: 5, name: "romance", url: "https://www.last.fm/tag/romance" },
      { count: 5, name: "lol", url: "https://www.last.fm/tag/lol" },
      { count: 5, name: "Europop", url: "https://www.last.fm/tag/Europop" },
      { count: 5, name: "eurobeat", url: "https://www.last.fm/tag/eurobeat" },
      { count: 5, name: "anthony", url: "https://www.last.fm/tag/anthony" },
      { count: 5, name: "8", url: "https://www.last.fm/tag/8" },
      { count: 5, name: "shows", url: "https://www.last.fm/tag/shows" },
      {
        count: 5,
        name: "aleister crowley",
        url: "https://www.last.fm/tag/aleister+crowley",
      },
      { count: 5, name: "legend", url: "https://www.last.fm/tag/legend" },
      { count: 5, name: "Legendary", url: "https://www.last.fm/tag/Legendary" },
      {
        count: 5,
        name: "euro house",
        url: "https://www.last.fm/tag/euro+house",
      },
      {
        count: 5,
        name: "nice elevator music",
        url: "https://www.last.fm/tag/nice+elevator+music",
      },
      {
        count: 5,
        name: "best of 1998",
        url: "https://www.last.fm/tag/best+of+1998",
      },
      {
        count: 5,
        name: "halftoned singles club",
        url: "https://www.last.fm/tag/halftoned+singles+club",
      },
      { count: 5, name: "destiny", url: "https://www.last.fm/tag/destiny" },
      {
        count: 5,
        name: "JAMES BLUNT",
        url: "https://www.last.fm/tag/JAMES+BLUNT",
      },
      {
        count: 5,
        name: "Christopher Lee",
        url: "https://www.last.fm/tag/Christopher+Lee",
      },
      { count: 5, name: "test3", url: "https://www.last.fm/tag/test3" },
      { count: 5, name: "bbq", url: "https://www.last.fm/tag/bbq" },
      { count: 5, name: "blogs", url: "https://www.last.fm/tag/blogs" },
      {
        count: 5,
        name: "MyFavorite",
        url: "https://www.last.fm/tag/MyFavorite",
      },
      {
        count: 5,
        name: "my whole damn collection",
        url: "https://www.last.fm/tag/my+whole+damn+collection",
      },
      { count: 5, name: "musica", url: "https://www.last.fm/tag/musica" },
      {
        count: 5,
        name: "Aleyster Crowley",
        url: "https://www.last.fm/tag/Aleyster+Crowley",
      },
      { count: 5, name: "balladen", url: "https://www.last.fm/tag/balladen" },
      {
        count: 5,
        name: "warner bros",
        url: "https://www.last.fm/tag/warner+bros",
      },
      {
        count: 5,
        name: "Argeu california seixas",
        url: "https://www.last.fm/tag/Argeu+california+seixas",
      },
      {
        count: 5,
        name: "Silvio Passos",
        url: "https://www.last.fm/tag/Silvio+Passos",
      },
      {
        count: 5,
        name: "Wilson Seixas",
        url: "https://www.last.fm/tag/Wilson+Seixas",
      },
      {
        count: 5,
        name: "california seixas",
        url: "https://www.last.fm/tag/california+seixas",
      },
      { count: 5, name: "Best Pop", url: "https://www.last.fm/tag/Best+Pop" },
      { count: 5, name: "familia", url: "https://www.last.fm/tag/familia" },
      { count: 5, name: "aleister", url: "https://www.last.fm/tag/aleister" },
      { count: 5, name: "autotuned", url: "https://www.last.fm/tag/autotuned" },
      { count: 5, name: "phatness", url: "https://www.last.fm/tag/phatness" },
      {
        count: 5,
        name: "Raul Seixas",
        url: "https://www.last.fm/tag/Raul+Seixas",
      },
      { count: 5, name: "test1", url: "https://www.last.fm/tag/test1" },
      {
        count: 5,
        name: "my favorite album",
        url: "https://www.last.fm/tag/my+favorite+album",
      },
      { count: 5, name: "cultura", url: "https://www.last.fm/tag/cultura" },
      { count: 5, name: "top cd", url: "https://www.last.fm/tag/top+cd" },
      {
        count: 5,
        name: "nice album",
        url: "https://www.last.fm/tag/nice+album",
      },
      {
        count: 5,
        name: "i heart this album",
        url: "https://www.last.fm/tag/i+heart+this+album",
      },
      { count: 5, name: "my cds", url: "https://www.last.fm/tag/my+cds" },
      {
        count: 5,
        name: "Camisa de Venus",
        url: "https://www.last.fm/tag/Camisa+de+Venus",
      },
      {
        count: 5,
        name: "party shuffle",
        url: "https://www.last.fm/tag/party+shuffle",
      },
      {
        count: 5,
        name: "Amidio Junior",
        url: "https://www.last.fm/tag/Amidio+Junior",
      },
      { count: 5, name: "Filmes", url: "https://www.last.fm/tag/Filmes" },
      {
        count: 5,
        name: "Anyzio Rocha",
        url: "https://www.last.fm/tag/Anyzio+Rocha",
      },
      { count: 5, name: "mindracer", url: "https://www.last.fm/tag/mindracer" },
      {
        count: 5,
        name: "Nova California Seixas",
        url: "https://www.last.fm/tag/Nova+California+Seixas",
      },
      { count: 5, name: "mucajai", url: "https://www.last.fm/tag/mucajai" },
      {
        count: 5,
        name: "Argeu California",
        url: "https://www.last.fm/tag/Argeu+California",
      },
      {
        count: 5,
        name: "BEto Juara",
        url: "https://www.last.fm/tag/BEto+Juara",
      },
    ],
    "@attr": { artist: "Cher", album: "Believe" },
  },
};
