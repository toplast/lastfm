import {
  IArtistGetInfo,
  IArtistGetTopAlbums,
  IArtistGetTopTags,
} from "../../../src/modules/artist/artist.interface";

// http://ws.audioscrobbler.com///2.0/?method=artist.getInfo&api_key=<KEY>&artist=Cher&format=json

export const exampleArtistGetInfo: IArtistGetInfo = {
  artist: {
    name: "Cher",
    mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
    url: "https://www.last.fm/music/Cher",
    image: [
      {
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
        size: "small",
      },
      {
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
        size: "medium",
      },
      {
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
        size: "large",
      },
      {
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
        size: "extralarge",
      },
      {
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
        size: "mega",
      },
      {
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
        size: "",
      },
    ],
    streamable: "0",
    ontour: "0",
    stats: { listeners: "1362440", playcount: "21271862" },
    similar: {
      artist: [
        {
          name: "Sonny & Cher",
          url: "https://www.last.fm/music/Sonny+&+Cher",
          image: [
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "small",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "medium",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "large",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "extralarge",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "mega",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "",
            },
          ],
        },
        {
          name: "Madonna",
          url: "https://www.last.fm/music/Madonna",
          image: [
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "small",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "medium",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "large",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "extralarge",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "mega",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "",
            },
          ],
        },
        {
          name: "Kylie Minogue",
          url: "https://www.last.fm/music/Kylie+Minogue",
          image: [
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "small",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "medium",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "large",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "extralarge",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "mega",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "",
            },
          ],
        },
        {
          name: "Céline Dion",
          url: "https://www.last.fm/music/C%C3%A9line+Dion",
          image: [
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "small",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "medium",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "large",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "extralarge",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "mega",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "",
            },
          ],
        },
        {
          name: "Barbra Streisand",
          url: "https://www.last.fm/music/Barbra+Streisand",
          image: [
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "small",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "medium",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "large",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "extralarge",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "mega",
            },
            {
              "#text":
                "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
              size: "",
            },
          ],
        },
      ],
    },
    tags: {
      tag: [
        { name: "pop", url: "https://www.last.fm/tag/pop" },
        {
          name: "female vocalists",
          url: "https://www.last.fm/tag/female+vocalists",
        },
        { name: "80s", url: "https://www.last.fm/tag/80s" },
        { name: "dance", url: "https://www.last.fm/tag/dance" },
        { name: "rock", url: "https://www.last.fm/tag/rock" },
      ],
    },
    bio: {
      links: {
        link: {
          "#text": "",
          rel: "original",
          href: "https://last.fm/music/Cher/+wiki",
        },
      },
      published: "17 Feb 2006, 22:09",
      summary:
        'Cher (born Cherilyn Sarkisian) is an American singer, actress and television personality. Often referred to by the media as the "Goddess of Pop", she has been described as embodying female autonomy in a male-dominated industry. Cher is known for her distinctive contralto singing voice and for having worked in numerous areas of entertainment, as well as adopting a variety of styles and appearances throughout her six-decade-long career.\n\nCher gained <a href="https://www.last.fm/music/Cher">Read more on Last.fm</a>',
      content:
        'Cher (born Cherilyn Sarkisian) is an American singer, actress and television personality. Often referred to by the media as the "Goddess of Pop", she has been described as embodying female autonomy in a male-dominated industry. Cher is known for her distinctive contralto singing voice and for having worked in numerous areas of entertainment, as well as adopting a variety of styles and appearances throughout her six-decade-long career.\n\nCher gained popularity in 1965 as one-half of the folk rock husband-wife duo Sonny & Cher after their song "I Got You Babe" peaked at number one on the US and UK charts. Together they sold 40 million records worldwide. Her solo career was established during the same time, with the top-ten singles "Bang Bang (My Baby Shot Me Down)" and "You Better Sit Down Kids". She became a television personality in the 1970s with her CBS shows; first The Sonny & Cher Comedy Hour, watched by over 30 million viewers weekly during its three-year run, and then the eponymous Cher. She emerged as a fashion trendsetter by wearing elaborate outfits on her television shows.\n\nWhile working on television, Cher released the US Billboard Hot 100 number-one singles "Gypsys, Tramps & Thieves", "Half-Breed", and "Dark Lady", becoming the female artist with the most number-one singles in United States history at the time. After her divorce from Sonny Bono in 1975, she released the disco album Take Me Home (1979) and earned $300,000 a week for her 1979–1982 concert residency in Las Vegas.\n\nIn 1982, Cher made her Broadway debut in the play Come Back to the 5 & Dime, Jimmy Dean, Jimmy Dean and starred in its film adaptation. She subsequently garnered critical acclaim for her performances in films such as Silkwood (1983), Mask (1985), The Witches of Eastwick (1987), and Moonstruck (1987), the last of which won her the Academy Award for Best Actress. She then revived her music career by recording the rock-inflected albums Cher (1987), Heart of Stone (1989), and Love Hurts (1991), all of which yielded successful singles such as "I Found Someone", "If I Could Turn Back Time", and "Love and Understanding". Cher contributed to the soundtrack for her next film, Mermaids (1990), which spawned the UK number-one single "The Shoop Shoop Song (It\'s in His Kiss)". She made her directorial debut with a segment in the abortion-themed anthology If These Walls Could Talk (1996).\n\nCher reached a new commercial peak in 1998 with the dance-pop album Believe, whose title track topped the Billboard Year-End Hot 100 singles of 1999 and became the biggest-selling single of all time by a female artist in the UK. It features pioneering use of Auto-Tune to distort her vocals, known as the "Cher effect". Her 2002–2005 Living Proof: The Farewell Tour became one of the highest-grossing concert tours of all time, earning $250 million. In 2008, she signed a $60 million deal to headline the Colosseum at Caesars Palace in Las Vegas for three years. During the 2010s, she landed starring roles in the films Burlesque (2010) and Mamma Mia! Here We Go Again (2018) and released studio albums Closer to the Truth (2013) and Dancing Queen (2018), both of which debuted at number three on the Billboard 200.\n\nHaving sold 100 million records, Cher is one of the world\'s best-selling music artists. Her achievements include a Grammy Award, an Emmy Award, an Academy Award, three Golden Globe Awards, the Billboard Icon Award, and awards from the Kennedy Center Honors and the Council of Fashion Designers of America. She is the only artist to date to have a number-one single on a Billboard chart in six consecutive decades, from the 1960s to the 2010s. Aside from music and acting, she is noted for her political views, social media presence, philanthropic endeavors, and social activism, including LGBT rights and HIV/AIDS prevention. <a href="https://www.last.fm/music/Cher">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply.',
    },
  },
};

// https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Cher&api_key=<KEY>&format=json

export const exampleArtistGetTopAlbums: IArtistGetTopAlbums = {
  topalbums: {
    album: [
      {
        name: "Believe",
        playcount: 3929900,
        mbid: "63b3a8ca-26f2-4e2b-b867-647a6ec2bebd",
        url: "https://www.last.fm/music/Cher/Believe",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
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
      },
      {
        name: "The Very Best of Cher",
        playcount: 1732675,
        mbid: "a7e2dad7-e733-4bee-9db1-b31e3183eaf5",
        url: "https://www.last.fm/music/Cher/The+Very+Best+of+Cher",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/0fd942f7e629a01ec2d067e41464ff5d.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/0fd942f7e629a01ec2d067e41464ff5d.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/0fd942f7e629a01ec2d067e41464ff5d.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/0fd942f7e629a01ec2d067e41464ff5d.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Heart of Stone",
        playcount: 1274871,
        mbid: "7468fc70-9cba-4bad-a2a8-4201221f54fe",
        url: "https://www.last.fm/music/Cher/Heart+of+Stone",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/e8f76af3d702f7850ba5a4c9fa055030.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/e8f76af3d702f7850ba5a4c9fa055030.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/e8f76af3d702f7850ba5a4c9fa055030.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/e8f76af3d702f7850ba5a4c9fa055030.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Cher's Greatest Hits: 1965-1992",
        playcount: 553077,
        url: "https://www.last.fm/music/Cher/Cher%27s+Greatest+Hits:+1965-1992",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/0232e085741c6b7dfb8ccd6cdcbbad0e.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/0232e085741c6b7dfb8ccd6cdcbbad0e.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/0232e085741c6b7dfb8ccd6cdcbbad0e.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/0232e085741c6b7dfb8ccd6cdcbbad0e.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "It's a Man's World",
        playcount: 578541,
        mbid: "e4e7db8a-2622-47d3-80a5-91534d523ac5",
        url: "https://www.last.fm/music/Cher/It%27s+a+Man%27s+World",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/0c8f97586cbb46a3875ee70eaa7e7cb0.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/0c8f97586cbb46a3875ee70eaa7e7cb0.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/0c8f97586cbb46a3875ee70eaa7e7cb0.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/0c8f97586cbb46a3875ee70eaa7e7cb0.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Love Hurts",
        playcount: 493304,
        mbid: "d52885f4-5444-4361-a1f3-ac4d079b603d",
        url: "https://www.last.fm/music/Cher/Love+Hurts",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/94c0865342e8938d6146715c71e0d6ed.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/94c0865342e8938d6146715c71e0d6ed.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/94c0865342e8938d6146715c71e0d6ed.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/94c0865342e8938d6146715c71e0d6ed.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Living Proof",
        playcount: 797482,
        mbid: "182a2ec8-f717-4e06-a88e-604db80ab4aa",
        url: "https://www.last.fm/music/Cher/Living+Proof",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/5adc1f1fe42943fe2f3341534863fd2d.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/5adc1f1fe42943fe2f3341534863fd2d.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/5adc1f1fe42943fe2f3341534863fd2d.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/5adc1f1fe42943fe2f3341534863fd2d.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "The Greatest Hits",
        playcount: 555387,
        mbid: "023af53b-2a8f-467e-aadc-307b3372ecc2",
        url: "https://www.last.fm/music/Cher/The+Greatest+Hits",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/2563ce273c65e39dfe7ea691752237fe.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/2563ce273c65e39dfe7ea691752237fe.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/2563ce273c65e39dfe7ea691752237fe.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2563ce273c65e39dfe7ea691752237fe.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Half Breed",
        playcount: 147615,
        mbid: "95945817-ebd8-4d3e-bb5f-fcb22de001ca",
        url: "https://www.last.fm/music/Cher/Half+Breed",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/75bfb65988650dd70014a64dc1c60380.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/75bfb65988650dd70014a64dc1c60380.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/75bfb65988650dd70014a64dc1c60380.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/75bfb65988650dd70014a64dc1c60380.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Dancing Queen",
        playcount: 812771,
        url: "https://www.last.fm/music/Cher/Dancing+Queen",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/6a1e5db8a6831635bcba07652d48431f.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/6a1e5db8a6831635bcba07652d48431f.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/6a1e5db8a6831635bcba07652d48431f.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/6a1e5db8a6831635bcba07652d48431f.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Cher",
        playcount: 388047,
        mbid: "368fc15c-e01c-4ad8-8fb3-26c44c695c84",
        url: "https://www.last.fm/music/Cher/Cher",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/926f1848e9e7337b974d035bd7da791f.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/926f1848e9e7337b974d035bd7da791f.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/926f1848e9e7337b974d035bd7da791f.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/926f1848e9e7337b974d035bd7da791f.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "The Best of Cher",
        playcount: 72967,
        mbid: "0128541a-3b4e-4bb9-8b82-344ab851c6de",
        url: "https://www.last.fm/music/Cher/The+Best+of+Cher",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/1deb74dacf0e4112aee7c01afdb0349d.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/1deb74dacf0e4112aee7c01afdb0349d.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/1deb74dacf0e4112aee7c01afdb0349d.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/1deb74dacf0e4112aee7c01afdb0349d.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Burlesque Original Motion Picture Soundtrack",
        playcount: 203052,
        url:
          "https://www.last.fm/music/Cher/Burlesque+Original+Motion+Picture+Soundtrack",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/4c74915a7be542ad84673b8ac9d98905.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/4c74915a7be542ad84673b8ac9d98905.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/4c74915a7be542ad84673b8ac9d98905.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/4c74915a7be542ad84673b8ac9d98905.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Gypsys, Tramps & Thieves",
        playcount: 257806,
        mbid: "ac1d49a5-611e-4895-921d-83cbec6d1df6",
        url: "https://www.last.fm/music/Cher/Gypsys,+Tramps+&+Thieves",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/3f66a799fede4cdb967e7cf67940894b.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/3f66a799fede4cdb967e7cf67940894b.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/3f66a799fede4cdb967e7cf67940894b.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/3f66a799fede4cdb967e7cf67940894b.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Take Me Home & Prisoner",
        playcount: 51982,
        url: "https://www.last.fm/music/Cher/Take+Me+Home+&+Prisoner",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/007759bbe10642db8f023e4c276ba6f3.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/007759bbe10642db8f023e4c276ba6f3.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/007759bbe10642db8f023e4c276ba6f3.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/007759bbe10642db8f023e4c276ba6f3.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Greatest Hits",
        playcount: 115954,
        mbid: "ec3f4f8d-1852-4407-9969-7baba18e6e37",
        url: "https://www.last.fm/music/Cher/Greatest+Hits",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/2442686feafc9454f13028e81dc4edc8.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/2442686feafc9454f13028e81dc4edc8.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/2442686feafc9454f13028e81dc4edc8.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2442686feafc9454f13028e81dc4edc8.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Gold",
        playcount: 205037,
        mbid: "9880981e-90ba-4767-9473-4d058bcd099f",
        url: "https://www.last.fm/music/Cher/Gold",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/006f407fc9e04060d2d4ec0cc567e4e6.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/006f407fc9e04060d2d4ec0cc567e4e6.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/006f407fc9e04060d2d4ec0cc567e4e6.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/006f407fc9e04060d2d4ec0cc567e4e6.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Closer to the Truth",
        playcount: 792608,
        url: "https://www.last.fm/music/Cher/Closer+to+the+Truth",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/4eed0361b0916ddb22ed26b511f61d82.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/4eed0361b0916ddb22ed26b511f61d82.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/4eed0361b0916ddb22ed26b511f61d82.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/4eed0361b0916ddb22ed26b511f61d82.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Gimme! Gimme! Gimme! (A Man After Midnight)",
        playcount: 140371,
        url:
          "https://www.last.fm/music/Cher/Gimme%21+Gimme%21+Gimme%21+(A+Man+After+Midnight)",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/720c2418d2c2c67d060ba600a18d72de.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/720c2418d2c2c67d060ba600a18d72de.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/720c2418d2c2c67d060ba600a18d72de.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/720c2418d2c2c67d060ba600a18d72de.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Strong Enough",
        playcount: 79680,
        mbid: "92aa86fd-f1c9-4b74-b2d7-711f9765e936",
        url: "https://www.last.fm/music/Cher/Strong+Enough",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/f84c7c1a7f0040b2ac7e8554ab60e0d4.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/f84c7c1a7f0040b2ac7e8554ab60e0d4.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/f84c7c1a7f0040b2ac7e8554ab60e0d4.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/f84c7c1a7f0040b2ac7e8554ab60e0d4.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "(null)",
        playcount: 151299,
        url: "https://www.last.fm/music/Cher/(null)",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text": "",
            size: "small",
          },
          {
            "#text": "",
            size: "medium",
          },
          {
            "#text": "",
            size: "large",
          },
          {
            "#text": "",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Closer To the Truth (Deluxe Version)",
        playcount: 487750,
        mbid: "4003e2bb-e868-431f-a086-f53d557606c9",
        url:
          "https://www.last.fm/music/Cher/Closer+To+the+Truth+(Deluxe+Version)",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/60cb3aa538f918b5251210ce41578cd8.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/60cb3aa538f918b5251210ce41578cd8.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/60cb3aa538f918b5251210ce41578cd8.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/60cb3aa538f918b5251210ce41578cd8.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Take Me Home",
        playcount: 137725,
        mbid: "9cd2ad21-ad13-4490-bc58-22943cd89380",
        url: "https://www.last.fm/music/Cher/Take+Me+Home",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/d202553ca6f12009f36678f86237bdee.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/d202553ca6f12009f36678f86237bdee.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/d202553ca6f12009f36678f86237bdee.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/d202553ca6f12009f36678f86237bdee.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "The Best of Cher (The Imperial Recordings: 1965-1968)",
        playcount: 81376,
        url:
          "https://www.last.fm/music/Cher/The+Best+of+Cher+(The+Imperial+Recordings:+1965-1968)",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/a71d30221df988721bdee846ea87161a.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/a71d30221df988721bdee846ea87161a.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/a71d30221df988721bdee846ea87161a.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/a71d30221df988721bdee846ea87161a.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "All I Really Want to Do",
        playcount: 124429,
        mbid: "5e37a247-b02f-4c29-8349-0655091051ac",
        url: "https://www.last.fm/music/Cher/All+I+Really+Want+to+Do",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/42fff15cfd6ce40dbc921e3b6c2bf089.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/42fff15cfd6ce40dbc921e3b6c2bf089.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/42fff15cfd6ce40dbc921e3b6c2bf089.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/42fff15cfd6ce40dbc921e3b6c2bf089.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Greatest Hits: If I Could Turn Back Time",
        playcount: 19410,
        mbid: "2fba163f-011f-4c8e-a133-78b397443e78",
        url:
          "https://www.last.fm/music/Cher/Greatest+Hits:+If+I+Could+Turn+Back+Time",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/b9206389bebc2cd12eafaa549ba6e0b3.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/b9206389bebc2cd12eafaa549ba6e0b3.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/b9206389bebc2cd12eafaa549ba6e0b3.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/b9206389bebc2cd12eafaa549ba6e0b3.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Love Hurts (UK Mid Price)",
        playcount: 30621,
        url: "https://www.last.fm/music/Cher/Love+Hurts+(UK+Mid+Price)",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/e337c09cf7c18b7294ba81b2317397d2.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/e337c09cf7c18b7294ba81b2317397d2.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/e337c09cf7c18b7294ba81b2317397d2.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/e337c09cf7c18b7294ba81b2317397d2.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Burlesque",
        playcount: 164200,
        url: "https://www.last.fm/music/Cher/Burlesque",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/0a2760c4699a483086c8eba8ebc5eca1.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/0a2760c4699a483086c8eba8ebc5eca1.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/0a2760c4699a483086c8eba8ebc5eca1.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/0a2760c4699a483086c8eba8ebc5eca1.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Bang Bang: The Early Years",
        playcount: 46702,
        url: "https://www.last.fm/music/Cher/Bang+Bang:+The+Early+Years",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/e2655b999d0a4b0e993b31479bf23dd0.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/e2655b999d0a4b0e993b31479bf23dd0.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/e2655b999d0a4b0e993b31479bf23dd0.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/e2655b999d0a4b0e993b31479bf23dd0.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: 'Fernando (From "Mamma Mia! Here We Go Again")',
        playcount: 37701,
        url:
          "https://www.last.fm/music/Cher/Fernando+(From+%22Mamma+Mia%21+Here+We+Go+Again%22)",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/a1f4e8c6fd31f2c333d510b097ce40f0.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/a1f4e8c6fd31f2c333d510b097ce40f0.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/a1f4e8c6fd31f2c333d510b097ce40f0.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/a1f4e8c6fd31f2c333d510b097ce40f0.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "20th Century Masters: The Millennium Collection: Best Of Cher",
        playcount: 49569,
        url:
          "https://www.last.fm/music/Cher/20th+Century+Masters:+The+Millennium+Collection:+Best+Of+Cher",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/1e7a7c7c7f4243ddbe44e2010d39da6a.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/1e7a7c7c7f4243ddbe44e2010d39da6a.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/1e7a7c7c7f4243ddbe44e2010d39da6a.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/1e7a7c7c7f4243ddbe44e2010d39da6a.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "If I Could Turn Back Time - Cher's Greatest Hits",
        playcount: 58587,
        url:
          "https://www.last.fm/music/Cher/If+I+Could+Turn+Back+Time+-+Cher%27s+Greatest+Hits",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/ff9b25b827134d87b5dee238f8e8c922.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/ff9b25b827134d87b5dee238f8e8c922.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/ff9b25b827134d87b5dee238f8e8c922.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/ff9b25b827134d87b5dee238f8e8c922.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "The Very Best of Cher [Warner Bros #1]",
        playcount: 79376,
        url:
          "https://www.last.fm/music/Cher/The+Very+Best+of+Cher+%5BWarner+Bros+%231%5D",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/3642566fa36747fba307b0fbcd916bb7.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/3642566fa36747fba307b0fbcd916bb7.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/3642566fa36747fba307b0fbcd916bb7.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/3642566fa36747fba307b0fbcd916bb7.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "3614 Jackson Highway",
        playcount: 89662,
        mbid: "a67bf28f-d1f5-4fcc-b408-4ef625402dc2",
        url: "https://www.last.fm/music/Cher/3614+Jackson+Highway",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/2dce13542818469fa9d873569ed36374.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/2dce13542818469fa9d873569ed36374.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/2dce13542818469fa9d873569ed36374.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2dce13542818469fa9d873569ed36374.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Dark Lady",
        playcount: 127326,
        mbid: "aa119742-4d13-408a-a453-be54bc79ba61",
        url: "https://www.last.fm/music/Cher/Dark+Lady",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/28fe29bb838bbbc910b326a37e7018de.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/28fe29bb838bbbc910b326a37e7018de.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/28fe29bb838bbbc910b326a37e7018de.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/28fe29bb838bbbc910b326a37e7018de.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Closer to the Truth (Deluxe Edition)",
        playcount: 96932,
        url:
          "https://www.last.fm/music/Cher/Closer+to+the+Truth+(Deluxe+Edition)",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/39218b7f49f849f1833732dfc48f623b.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/39218b7f49f849f1833732dfc48f623b.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/39218b7f49f849f1833732dfc48f623b.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/39218b7f49f849f1833732dfc48f623b.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "All Or Nothing",
        playcount: 19878,
        mbid: "28e23680-1c42-4d87-83ae-d74752538d3c",
        url: "https://www.last.fm/music/Cher/All+Or+Nothing",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/5ab99d48a9dd91ec9bc3f1861932c5e3.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/5ab99d48a9dd91ec9bc3f1861932c5e3.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/5ab99d48a9dd91ec9bc3f1861932c5e3.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/5ab99d48a9dd91ec9bc3f1861932c5e3.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "A Different Kind of Love Song",
        playcount: 16234,
        mbid: "f8912620-c18c-446b-9183-c558935b7689",
        url: "https://www.last.fm/music/Cher/A+Different+Kind+of+Love+Song",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/043c5e02bac471e8e23d1e55145079c0.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/043c5e02bac471e8e23d1e55145079c0.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/043c5e02bac471e8e23d1e55145079c0.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/043c5e02bac471e8e23d1e55145079c0.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Song for the Lonely",
        playcount: 16862,
        mbid: "cd4de50c-905a-4045-89a3-6576cc2f4f5b",
        url: "https://www.last.fm/music/Cher/Song+for+the+Lonely",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/11b14ef18e1d4dacb2f58d42287e1cc0.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/11b14ef18e1d4dacb2f58d42287e1cc0.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/11b14ef18e1d4dacb2f58d42287e1cc0.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/11b14ef18e1d4dacb2f58d42287e1cc0.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "The Sonny Side of Chér",
        playcount: 42258,
        mbid: "555c4b26-a6f8-4fcb-8407-3909e035f003",
        url: "https://www.last.fm/music/Cher/The+Sonny+Side+of+Ch%C3%A9r",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/c2e5b3651662a2504b345602496e9c0d.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/c2e5b3651662a2504b345602496e9c0d.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/c2e5b3651662a2504b345602496e9c0d.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/c2e5b3651662a2504b345602496e9c0d.png",
            size: "extralarge",
          },
        ],
      },
      {
        name:
          "Mamma Mia! Here We Go Again (Original Motion Picture Soundtrack)",
        playcount: 41419,
        url:
          "https://www.last.fm/music/Cher/Mamma+Mia%21+Here+We+Go+Again+(Original+Motion+Picture+Soundtrack)",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/95b24a325896087b372e7f64832a4ead.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/95b24a325896087b372e7f64832a4ead.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/95b24a325896087b372e7f64832a4ead.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/95b24a325896087b372e7f64832a4ead.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Half-Breed",
        playcount: 63288,
        url: "https://www.last.fm/music/Cher/Half-Breed",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/c628c9fc940f1b5ca167c60a42abab31.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/c628c9fc940f1b5ca167c60a42abab31.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/c628c9fc940f1b5ca167c60a42abab31.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/c628c9fc940f1b5ca167c60a42abab31.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Burlesque (Original Motion Picture Soundtrack)",
        playcount: 88059,
        url:
          "https://www.last.fm/music/Cher/Burlesque+(Original+Motion+Picture+Soundtrack)",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/9ef4eaedbae04430bfc78e23c5d3ee2b.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/9ef4eaedbae04430bfc78e23c5d3ee2b.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/9ef4eaedbae04430bfc78e23c5d3ee2b.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/9ef4eaedbae04430bfc78e23c5d3ee2b.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "SOS",
        playcount: 37602,
        url: "https://www.last.fm/music/Cher/SOS",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/69dc16655f09609fe2eb558c30f1da1b.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/69dc16655f09609fe2eb558c30f1da1b.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/69dc16655f09609fe2eb558c30f1da1b.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/69dc16655f09609fe2eb558c30f1da1b.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "The Music's No Good Without You",
        playcount: 13997,
        mbid: "efbb6230-96ce-4820-b8ca-ac5fc73300c2",
        url: "https://www.last.fm/music/Cher/The+Music%27s+No+Good+Without+You",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/95cc30c02ff6868132b5ac0281ee03b0.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/95cc30c02ff6868132b5ac0281ee03b0.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/95cc30c02ff6868132b5ac0281ee03b0.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/95cc30c02ff6868132b5ac0281ee03b0.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Woman's World",
        playcount: 60019,
        mbid: "5c3a4ee5-3add-4b87-abb3-d4ab7fa50f69",
        url: "https://www.last.fm/music/Cher/Woman%27s+World",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/c175ef57aa5a4c338817df9ea83add31.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/c175ef57aa5a4c338817df9ea83add31.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/c175ef57aa5a4c338817df9ea83add31.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/c175ef57aa5a4c338817df9ea83add31.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "The Ultimate Collection",
        playcount: 33430,
        url: "https://www.last.fm/music/Cher/The+Ultimate+Collection",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/921e01612db09e7981ff3d265def2fea.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/921e01612db09e7981ff3d265def2fea.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/921e01612db09e7981ff3d265def2fea.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/921e01612db09e7981ff3d265def2fea.png",
            size: "extralarge",
          },
        ],
      },
      {
        name:
          "The Best Of Cher Volume 2 20th Century Masters The Millennium Collection",
        playcount: 29287,
        url:
          "https://www.last.fm/music/Cher/The+Best+Of+Cher+Volume+2+20th+Century+Masters+The+Millennium+Collection",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/29a3ac97918143f0b3b4e5c3cc2a448f.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/29a3ac97918143f0b3b4e5c3cc2a448f.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/29a3ac97918143f0b3b4e5c3cc2a448f.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/29a3ac97918143f0b3b4e5c3cc2a448f.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "Believe (Remixes)",
        playcount: 18618,
        url: "https://www.last.fm/music/Cher/Believe+(Remixes)",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/57958796b69146d6691daeb715ada96c.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/57958796b69146d6691daeb715ada96c.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/57958796b69146d6691daeb715ada96c.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/57958796b69146d6691daeb715ada96c.png",
            size: "extralarge",
          },
        ],
      },
      {
        name: "If I Could Turn Back Time: Cher's Greatest Hits",
        playcount: 47020,
        url:
          "https://www.last.fm/music/Cher/If+I+Could+Turn+Back+Time:+Cher%27s+Greatest+Hits",
        artist: {
          name: "Cher",
          mbid: "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
          url: "https://www.last.fm/music/Cher",
        },
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/ea519513cfbe4cc6a0ae8d930add4047.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/ea519513cfbe4cc6a0ae8d930add4047.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/ea519513cfbe4cc6a0ae8d930add4047.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/ea519513cfbe4cc6a0ae8d930add4047.png",
            size: "extralarge",
          },
        ],
      },
    ],
    "@attr": {
      artist: "Cher",
      page: "1",
      perPage: "50",
      totalPages: "758",
      total: "37853",
    },
  },
};

// http://ws.audioscrobbler.com///2.0/?method=artist.getTopTags&api_key=<KEY>&artist=Cher&album=Believe&format=json

export const exampleArtistGetTopTags: IArtistGetTopTags = {
  toptags: {
    tag: [
      { count: 100, name: "pop", url: "https://www.last.fm/tag/pop" },
      {
        count: 71,
        name: "female vocalists",
        url: "https://www.last.fm/tag/female+vocalists",
      },
      { count: 52, name: "80s", url: "https://www.last.fm/tag/80s" },
      { count: 49, name: "dance", url: "https://www.last.fm/tag/dance" },
      { count: 35, name: "rock", url: "https://www.last.fm/tag/rock" },
      { count: 15, name: "cher", url: "https://www.last.fm/tag/cher" },
      { count: 10, name: "diva", url: "https://www.last.fm/tag/diva" },
      { count: 9, name: "90s", url: "https://www.last.fm/tag/90s" },
      { count: 9, name: "70s", url: "https://www.last.fm/tag/70s" },
      { count: 8, name: "american", url: "https://www.last.fm/tag/american" },
      { count: 8, name: "female", url: "https://www.last.fm/tag/female" },
      {
        count: 6,
        name: "classic rock",
        url: "https://www.last.fm/tag/classic+rock",
      },
      { count: 6, name: "60s", url: "https://www.last.fm/tag/60s" },
      { count: 6, name: "Disco", url: "https://www.last.fm/tag/Disco" },
      {
        count: 5,
        name: "female vocalist",
        url: "https://www.last.fm/tag/female+vocalist",
      },
      { count: 4, name: "legend", url: "https://www.last.fm/tag/legend" },
      { count: 4, name: "seen live", url: "https://www.last.fm/tag/seen+live" },
      { count: 3, name: "pop rock", url: "https://www.last.fm/tag/pop+rock" },
      {
        count: 3,
        name: "electronic",
        url: "https://www.last.fm/tag/electronic",
      },
      { count: 3, name: "00s", url: "https://www.last.fm/tag/00s" },
      { count: 3, name: "gay", url: "https://www.last.fm/tag/gay" },
      { count: 3, name: "Ballad", url: "https://www.last.fm/tag/Ballad" },
      { count: 3, name: "USA", url: "https://www.last.fm/tag/USA" },
      { count: 3, name: "soft rock", url: "https://www.last.fm/tag/soft+rock" },
      { count: 2, name: "soul", url: "https://www.last.fm/tag/soul" },
      { count: 2, name: "folk", url: "https://www.last.fm/tag/folk" },
      { count: 2, name: "oldies", url: "https://www.last.fm/tag/oldies" },
      { count: 2, name: "ballads", url: "https://www.last.fm/tag/ballads" },
      { count: 2, name: "Gay Icon", url: "https://www.last.fm/tag/Gay+Icon" },
      {
        count: 2,
        name: "singer-songwriter",
        url: "https://www.last.fm/tag/singer-songwriter",
      },
      {
        count: 2,
        name: "love songs",
        url: "https://www.last.fm/tag/love+songs",
      },
      { count: 2, name: "Pop-Rock", url: "https://www.last.fm/tag/Pop-Rock" },
      { count: 2, name: "sweet", url: "https://www.last.fm/tag/sweet" },
      { count: 2, name: "love song", url: "https://www.last.fm/tag/love+song" },
      {
        count: 2,
        name: "goddess of pop",
        url: "https://www.last.fm/tag/goddess+of+pop",
      },
      {
        count: 2,
        name: "alternative",
        url: "https://www.last.fm/tag/alternative",
      },
      { count: 2, name: "favorites", url: "https://www.last.fm/tag/favorites" },
      { count: 2, name: "divas", url: "https://www.last.fm/tag/divas" },
      {
        count: 1,
        name: "electronica",
        url: "https://www.last.fm/tag/electronica",
      },
      {
        count: 1,
        name: "adult contemporary",
        url: "https://www.last.fm/tag/adult+contemporary",
      },
      { count: 1, name: "House", url: "https://www.last.fm/tag/House" },
      { count: 1, name: "singer", url: "https://www.last.fm/tag/singer" },
      { count: 1, name: "80's", url: "https://www.last.fm/tag/80%27s" },
      { count: 1, name: "icon", url: "https://www.last.fm/tag/icon" },
      { count: 1, name: "goddess", url: "https://www.last.fm/tag/goddess" },
    ],
    "@attr": { artist: "Cher" },
  },
};
