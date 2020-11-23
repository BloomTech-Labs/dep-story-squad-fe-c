const players = [
  {
    id: 1,
    name: 'Charmander',
    avatar: `https://labs28-b-storysquad.s3.amazonaws.com/hero-1.svg`,
    backgroundColor: 'green',
    missions: {
      1: {
        id: 1,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
      },
      2: {
        id: 2,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534318576-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5Chxqld5XhG8bAA4QlkDBsXEgf.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
      },
    },
  },
  {
    id: 2,
    name: 'Squirtle',
    avatar: `https://labs28-b-storysquad.s3.amazonaws.com/hero-2.svg`,
    backgroundColor: 'yellow',
    missions: {
      1: {
        id: 1,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534385664-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CXQA4srMyvYUHri97ntFSo7KZ.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
      },
      2: {
        id: 2,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
      },
    },
  },
  {
    id: 3,
    name: 'Metapod',
    avatar: `https://labs28-b-storysquad.s3.amazonaws.com/hero-3.svg`,
    backgroundColor: 'green',
    missions: {
      1: {
        id: 1,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604544276606-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5Cjq2oVjslR_y3HXVlUvGo0eoi.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
      },
      2: {
        id: 2,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
      },
    },
  },
  {
    id: 4,
    name: 'Butterfree',
    avatar: `https://labs28-b-storysquad.s3.amazonaws.com/hero-4.svg`,
    backgroundColor: 'yellow',
    missions: {
      1: {
        id: 1,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
      },
      2: {
        id: 2,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
      },
    },
  },
  {
    id: 5,
    name: 'Pikachu',
    avatar: `https://labs28-b-storysquad.s3.amazonaws.com/hero-5.svg`,
    backgroundColor: 'blue',
    missions: {
      1: {
        id: 1,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
      },
      2: {
        id: 2,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
      },
    },
  },
  {
    id: 6,
    name: 'Jigglypuff',
    avatar: `https://labs28-b-storysquad.s3.amazonaws.com/hero-6.svg`,
    backgroundColor: 'green',
    missions: {
      1: {
        id: 1,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
      },
      2: {
        id: 2,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
      },
    },
  },
  {
    id: 7,
    name: 'Gengar',
    avatar: `https://labs28-b-storysquad.s3.amazonaws.com/hero-7.svg`,
    backgroundColor: 'yellow',
    missions: {
      1: {
        id: 1,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
      },
      2: {
        id: 2,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
      },
    },
  },
  {
    id: 8,
    name: 'Eevee',
    avatar: `https://labs28-b-storysquad.s3.amazonaws.com/hero-8.svg`,
    backgroundColor: 'yellow',
    missions: {
      1: {
        id: 1,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
      },
      2: {
        id: 2,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
      },
    },
  },
  {
    id: 9,
    name: 'Ellen',
    avatar: `https://labs28-b-storysquad.s3.amazonaws.com/hero-9.svg`,
    backgroundColor: 'blue',
    missions: {
      1: {
        id: 1,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
      },
      2: {
        id: 2,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
      },
    },
  },
  {
    id: 10,
    name: 'Gray',
    avatar: `https://labs28-b-storysquad.s3.amazonaws.com/hero-10.svg`,
    backgroundColor: 'blue',
    missions: {
      1: {
        id: 1,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
      },
      2: {
        id: 2,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
      },
    },
  },
];

export function getMatchupPlayers() {
  const index1 = Math.ceil(Math.random() * 8);
  const index2 = Math.ceil(Math.random() * 8);
  const index3 = Math.ceil(Math.random() * 8);
  const index4 = Math.ceil(Math.random() * 8);

  const randomPlayers = [
    players[index1],
    players[index2],
    players[index3],
    players[index4],
  ];

  const filtered = randomPlayers.map(player => ({
    id: player.id,
    name: player.name,
    avatar: player.avatar,
    backgroundColor: player.backgroundColor,
    writingSubmission: {
      url: player.missions['1'].writingSubmission,
      pointShare: 40,
    },
    drawingSubmission: {
      url: player.missions['1'].drawingSubmission,
      pointShare: 50,
    },
  }));

  return filtered;
}
