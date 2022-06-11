import {
  ITrackGetInfo,
  ITrackGetTopTags,
} from "../../../src/modules/track/track.interface";

// https://ws.audioscrobbler.com/2.0/?method=track.gettoptags&artist=radiohead&track=paranoid+android&api_key=<KEY>&format=json
export const exampleTrackGetInfo: ITrackGetInfo = {
  track: {
    name: "Believe",
    mbid: "32ca187e-ee25-4f18-b7d0-3b6713f24635",
    url: "https://www.last.fm/music/Cher/_/Believe",
    duration: "231000",
    streamable: { "#text": "0", fulltrack: "0" },
    listeners: "625010",
    playcount: "3388179",
    artist: {
      name: "Cher",
      mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
      url: "https://www.last.fm/music/Cher",
    },
    album: {
      artist: "Cher",
      title: "Believe",
      mbid: "63b3a8ca-26f2-4e2b-b867-647a6ec2bebd",
      url: "https://www.last.fm/music/Cher/Believe",
      image: [
        {
          "#text":
            "https://lastfm.freetls.fastly.net/i/u/34s/3b54885952161aaea4ce2965b2db1638.png",
          size: "small",
        },
        {
          "#text":
            "https://lastfm.freetls.fastly.net/i/u/64s/3b54885952161aaea4ce2965b2db1638.png",
          size: "medium",
        },
        {
          "#text":
            "https://lastfm.freetls.fastly.net/i/u/174s/3b54885952161aaea4ce2965b2db1638.png",
          size: "large",
        },
        {
          "#text":
            "https://lastfm.freetls.fastly.net/i/u/300x300/3b54885952161aaea4ce2965b2db1638.png",
          size: "extralarge",
        },
      ],
      "@attr": { position: "1" },
    },
    toptags: {
      tag: [
        { name: "pop", url: "https://www.last.fm/tag/pop" },
        { name: "dance", url: "https://www.last.fm/tag/dance" },
        { name: "90s", url: "https://www.last.fm/tag/90s" },
        { name: "cher", url: "https://www.last.fm/tag/cher" },
        {
          name: "female vocalists",
          url: "https://www.last.fm/tag/female+vocalists",
        },
      ],
    },
    wiki: {
      published: "27 Jul 2008, 15:44",
      summary:
        '"Believe" is a Grammy Award winning global number one, Multi-Platinum Dance Song which served as the world-wide lead single for American singer Cher\'s twenty-third studio album Believe. It is noted for its use of a peculiar sound effect on the singer\'s vocals, which is referred to as the Cher effect today.\n\n"Believe" was written by a number of writers including Paul Barry, Matt Gray, Brian Higgins, Stuart McLellan, Timothy Powell, and Steven Torch. <a href="http://www.last.fm/music/Cher/_/Believe">Read more on Last.fm</a>.',
      content:
        '"Believe" is a Grammy Award winning global number one, Multi-Platinum Dance Song which served as the world-wide lead single for American singer Cher\'s twenty-third studio album Believe. It is noted for its use of a peculiar sound effect on the singer\'s vocals, which is referred to as the Cher effect today.\n\n"Believe" was written by a number of writers including Paul Barry, Matt Gray, Brian Higgins, Stuart McLellan, Timothy Powell, and Steven Torch. The song, released and recorded in 1998, peaked at number one in 23 countries worldwide .In the second week of March, 1999, it reached number one in the Billboard Hot 100, making Cher the oldest female artist (at the age of 52) to perform this feat. It also was ranked as the number-one song of 1999 by Billboard, and became the biggest single in her entire career. "Believe" also spent seven weeks at number one] in the UK singles chart and is still the best selling single by a female artist in the UK. \n\n\nIn March 2007, the United World Chart ranked "Believe" as the sixteenth most successful song in music history. The same chart lists "Believe" as third most successful song released by a solo female musician behind Whitney Houston\'s "I Will Always Love You" and Celine Dion\'s My Heart Will Go On; [5], the biggest selling single ever for Warner Bros. Records and the biggest selling dance song ever having sold over 10 million copies worldwide. It was also the song with most weeks in the top ten, it stayed in the top ten for 28 weeks.\n\nThe success of the song not only expanded through each country\'s singles chart, but also most country\'s dance charts. In the United States "Believe" spent 23 weeks on the U.S. Hot Dance Club Play chart and 22 weeks on the European Hot Dance Charts. "Believe" also set a record in 1999 after spending 21 weeks in the top spot of the Billboard Hot Dance Singles Sales chart, it was still in the top ten even one year after its entry on the chart. \n\n"Believe" was given the featured closing number spot for over 100 performances on Cher\'s 1999-2000 Do You Believe? Tour and then again the closing spot for over 300 performances on Cher\'s epic 2002-2005 Living Proof: The Farewell Tour. The song ranked #74 on VH1\'s 100 Greatest Songs of the 90s.\n\nAn interesting note about the recording of the song revolved around the highly-recognizable Auto-tune effect ("Cher effect") utilized in the verses and chorus. Producer Mark Taylor added the effect to Cher\'s vocal simply as a lark, and in interviews at the time, he claimed to be testing out his recently purchased the \'DigiTech Talker\'. However, it later emerged that the effect was not created by a vocoder, but by utilizing extreme (and then unheard) settings on auto-tune.When Cher heard the results, she demanded that the effect remain in the song, and her original vocal be erased, much to the chagrin of her record company, who wanted it removed; upon their suggestion, Cher\'s response to the record label was "over my dead body!"[citation needed] The vocal effect is caused by a pitch correction speed that is "set too fast for the audio that it is processing." \n\n\nU.S. Billboard Hot 100 Airplay\t1\nU.S. Billboard Hot 100\t1\nU.S. Billboard Hot Dance Club Play\t1\nU.S. Billboard Hot Dance Singles Sales\t1\nU.S. Billboard Hot Adult Contemporary Tracks\t2\nU.S. Billboard Hot Adult Top 40 Tracks\t2\nU.S. Billboard Top 40 Mainstream\t2\nArgentinian Singles Chart\t2\nAustralian ARIA Singles Chart\t1\nAustrian Singles Chart\t2\nBelgian Singles Chart\t1\nBrazilian Airplay Chart\t1\nCroatian Singles Chart\t1\nCanadian Singles Chart\t1\nDanish Singles Chart\t1\nDutch Mega Top 50 Singles Chart\t1\nDutch Top 40\t1\nEuropean Singles Chart\t1\nFinnish Singles Chart\t6\nFrench Singles Chart\t1\nGerman Singles Chart\t1\nIrish Singles Chart\t1\nIsraeli Singles Chart\t1\nItalian Singles Chart\t1\nLatvian Singles Chart\t1\nMexican Singles Chart\t1\nNew Zealand\'s Singles Chart\t1\nNorwegian Singles Chart\t1\nPolish Singles Chart\t1\nSpanish Singles Chart\t1\nSwedish Singles Chart\t1\nSwedish Airplay Chart\t1\nSwiss Singles Chart\t1\nUK Singles Chart\t1\nUnited World Chart\t1\n <a href="http://www.last.fm/music/Cher/_/Believe">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply.',
    },
  },
};

// http://ws.audioscrobbler.com/2.0/?method=track.gettoptags&artist=radiohead&track=paranoid+android&api_key=<KEY>&format=json

export const exampleTrackGetTopTags: ITrackGetTopTags = {
  toptags: {
    tag: [
      {
        count: 100,
        name: "alternative",
        url: "https://www.last.fm/tag/alternative",
      },
      {
        count: 87,
        name: "alternative rock",
        url: "https://www.last.fm/tag/alternative+rock",
      },
      { count: 69, name: "rock", url: "https://www.last.fm/tag/rock" },
      {
        count: 56,
        name: "radiohead",
        url: "https://www.last.fm/tag/radiohead",
      },
      { count: 48, name: "indie", url: "https://www.last.fm/tag/indie" },
      { count: 30, name: "90s", url: "https://www.last.fm/tag/90s" },
      { count: 28, name: "british", url: "https://www.last.fm/tag/british" },
      {
        count: 18,
        name: "experimental",
        url: "https://www.last.fm/tag/experimental",
      },
      {
        count: 16,
        name: "indie rock",
        url: "https://www.last.fm/tag/indie+rock",
      },
      {
        count: 12,
        name: "electronic",
        url: "https://www.last.fm/tag/electronic",
      },
      { count: 12, name: "britpop", url: "https://www.last.fm/tag/britpop" },
      { count: 11, name: "epic", url: "https://www.last.fm/tag/epic" },
      {
        count: 11,
        name: "Progressive rock",
        url: "https://www.last.fm/tag/Progressive+rock",
      },
      {
        count: 10,
        name: "favorites",
        url: "https://www.last.fm/tag/favorites",
      },
      {
        count: 9,
        name: "melancholic",
        url: "https://www.last.fm/tag/melancholic",
      },
      { count: 8, name: "beautiful", url: "https://www.last.fm/tag/beautiful" },
      {
        count: 7,
        name: "paranoid android",
        url: "https://www.last.fm/tag/paranoid+android",
      },
      {
        count: 6,
        name: "psychedelic",
        url: "https://www.last.fm/tag/psychedelic",
      },
      { count: 6, name: "amazing", url: "https://www.last.fm/tag/amazing" },
      { count: 6, name: "Awesome", url: "https://www.last.fm/tag/Awesome" },
      { count: 5, name: "UK", url: "https://www.last.fm/tag/UK" },
      {
        count: 5,
        name: "melancholy",
        url: "https://www.last.fm/tag/melancholy",
      },
      { count: 5, name: "art rock", url: "https://www.last.fm/tag/art+rock" },
      {
        count: 4,
        name: "Favourites",
        url: "https://www.last.fm/tag/Favourites",
      },
      {
        count: 4,
        name: "Masterpiece",
        url: "https://www.last.fm/tag/Masterpiece",
      },
      {
        count: 4,
        name: "ergo proxy",
        url: "https://www.last.fm/tag/ergo+proxy",
      },
      {
        count: 4,
        name: "favorite songs",
        url: "https://www.last.fm/tag/favorite+songs",
      },
      {
        count: 4,
        name: "Experimental Rock",
        url: "https://www.last.fm/tag/Experimental+Rock",
      },
      { count: 4, name: "1997", url: "https://www.last.fm/tag/1997" },
      {
        count: 4,
        name: "ok computer",
        url: "https://www.last.fm/tag/ok+computer",
      },
      { count: 4, name: "seen live", url: "https://www.last.fm/tag/seen+live" },
      { count: 3, name: "sad", url: "https://www.last.fm/tag/sad" },
      { count: 3, name: "post-rock", url: "https://www.last.fm/tag/post-rock" },
      { count: 3, name: "Love", url: "https://www.last.fm/tag/Love" },
      { count: 3, name: "genius", url: "https://www.last.fm/tag/genius" },
      { count: 3, name: "Mellow", url: "https://www.last.fm/tag/Mellow" },
      { count: 3, name: "Favorite", url: "https://www.last.fm/tag/Favorite" },
      {
        count: 3,
        name: "thom yorke",
        url: "https://www.last.fm/tag/thom+yorke",
      },
      { count: 3, name: "guitar", url: "https://www.last.fm/tag/guitar" },
      {
        count: 3,
        name: "male vocalists",
        url: "https://www.last.fm/tag/male+vocalists",
      },
      { count: 3, name: "anime", url: "https://www.last.fm/tag/anime" },
      {
        count: 3,
        name: "great lyrics",
        url: "https://www.last.fm/tag/great+lyrics",
      },
      {
        count: 3,
        name: "best song ever",
        url: "https://www.last.fm/tag/best+song+ever",
      },
      { count: 3, name: "ambient", url: "https://www.last.fm/tag/ambient" },
      {
        count: 3,
        name: "Favourite Songs",
        url: "https://www.last.fm/tag/Favourite+Songs",
      },
      {
        count: 2,
        name: "Soundtrack",
        url: "https://www.last.fm/tag/Soundtrack",
      },
      { count: 2, name: "favourite", url: "https://www.last.fm/tag/favourite" },
      { count: 2, name: "perfect", url: "https://www.last.fm/tag/perfect" },
      {
        count: 2,
        name: "FUCKING AWESOME",
        url: "https://www.last.fm/tag/FUCKING+AWESOME",
      },
      {
        count: 2,
        name: "electronica",
        url: "https://www.last.fm/tag/electronica",
      },
      { count: 2, name: "pop", url: "https://www.last.fm/tag/pop" },
      {
        count: 2,
        name: "Progressive",
        url: "https://www.last.fm/tag/Progressive",
      },
      { count: 2, name: "brilliant", url: "https://www.last.fm/tag/brilliant" },
      {
        count: 2,
        name: "All time favourites",
        url: "https://www.last.fm/tag/All+time+favourites",
      },
      {
        count: 2,
        name: "classic rock",
        url: "https://www.last.fm/tag/classic+rock",
      },
      { count: 2, name: "chillout", url: "https://www.last.fm/tag/chillout" },
      { count: 2, name: "chill", url: "https://www.last.fm/tag/chill" },
      { count: 2, name: "classic", url: "https://www.last.fm/tag/classic" },
      { count: 2, name: "brit rock", url: "https://www.last.fm/tag/brit+rock" },
      { count: 2, name: "paranoid", url: "https://www.last.fm/tag/paranoid" },
      { count: 2, name: "best", url: "https://www.last.fm/tag/best" },
      {
        count: 2,
        name: "Alternative  Punk",
        url: "https://www.last.fm/tag/Alternative++Punk",
      },
      { count: 2, name: "moody", url: "https://www.last.fm/tag/moody" },
      {
        count: 2,
        name: "great song",
        url: "https://www.last.fm/tag/great+song",
      },
      { count: 2, name: "loved", url: "https://www.last.fm/tag/loved" },
      {
        count: 2,
        name: "instrumental",
        url: "https://www.last.fm/tag/instrumental",
      },
      { count: 2, name: "memories", url: "https://www.last.fm/tag/memories" },
      { count: 2, name: "dramatic", url: "https://www.last.fm/tag/dramatic" },
      { count: 2, name: "alt rock", url: "https://www.last.fm/tag/alt+rock" },
      {
        count: 2,
        name: "best songs ever",
        url: "https://www.last.fm/tag/best+songs+ever",
      },
      {
        count: 2,
        name: "i had to change my pants after this song",
        url: "https://www.last.fm/tag/i+had+to+change+my+pants+after+this+song",
      },
      {
        count: 2,
        name: "ridiculously awesomely good",
        url: "https://www.last.fm/tag/ridiculously+awesomely+good",
      },
      { count: 2, name: "haunting", url: "https://www.last.fm/tag/haunting" },
      { count: 2, name: "emotional", url: "https://www.last.fm/tag/emotional" },
      {
        count: 2,
        name: "Psychedelic Rock",
        url: "https://www.last.fm/tag/Psychedelic+Rock",
      },
      {
        count: 2,
        name: "male vocalist",
        url: "https://www.last.fm/tag/male+vocalist",
      },
      {
        count: 2,
        name: "want to see live",
        url: "https://www.last.fm/tag/want+to+see+live",
      },
      { count: 2, name: "psycho", url: "https://www.last.fm/tag/psycho" },
      { count: 2, name: "1990s", url: "https://www.last.fm/tag/1990s" },
      {
        count: 2,
        name: "Good Stuff",
        url: "https://www.last.fm/tag/Good+Stuff",
      },
      { count: 2, name: "brit pop", url: "https://www.last.fm/tag/brit+pop" },
      {
        count: 2,
        name: "british rock",
        url: "https://www.last.fm/tag/british+rock",
      },
      {
        count: 2,
        name: "Soundtrack Of My Life",
        url: "https://www.last.fm/tag/Soundtrack+Of+My+Life",
      },
      { count: 1, name: "dark", url: "https://www.last.fm/tag/dark" },
      { count: 1, name: "post rock", url: "https://www.last.fm/tag/post+rock" },
      { count: 1, name: "Ballad", url: "https://www.last.fm/tag/Ballad" },
      {
        count: 1,
        name: "Awesome Guitar Jams",
        url: "https://www.last.fm/tag/Awesome+Guitar+Jams",
      },
      {
        count: 1,
        name: "love at first listen",
        url: "https://www.last.fm/tag/love+at+first+listen",
      },
      { count: 1, name: "nostalgia", url: "https://www.last.fm/tag/nostalgia" },
      {
        count: 1,
        name: "grey storia",
        url: "https://www.last.fm/tag/grey+storia",
      },
    ],
    "@attr": { artist: "Radiohead", track: "Paranoid Android" },
  },
};
