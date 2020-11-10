const players = [
  {
    id: 1,
    name: 'Charmander',
    missions: {
      1: {
        id: 1,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        writingScore: 62,
        drawingScore: 20,
      },
      2: {
        id: 2,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534318576-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5Chxqld5XhG8bAA4QlkDBsXEgf.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        writingScore: 44,
        drawingScore: 22,
      },
    },
  },
  {
    id: 2,
    name: 'Squirtle',
    missions: {
      1: {
        id: 1,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534385664-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CXQA4srMyvYUHri97ntFSo7KZ.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        writingScore: 62,
        drawingScore: 20,
      },
      2: {
        id: 2,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        writingScore: 44,
        drawingScore: 22,
      },
    },
  },
  {
    id: 3,
    name: 'Metapod',
    missions: {
      1: {
        id: 1,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604544276606-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5Cjq2oVjslR_y3HXVlUvGo0eoi.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        writingScore: 62,
        drawingScore: 20,
      },
      2: {
        id: 2,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        writingScore: 44,
        drawingScore: 22,
      },
    },
  },
  {
    id: 4,
    name: 'Butterfree',
    missions: {
      1: {
        id: 1,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        writingScore: 62,
        drawingScore: 20,
      },
      2: {
        id: 2,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        writingScore: 44,
        drawingScore: 22,
      },
    },
  },
  {
    id: 5,
    name: 'Pikachu',
    missions: {
      1: {
        id: 1,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        writingScore: 62,
        drawingScore: 20,
      },
      2: {
        id: 2,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        writingScore: 44,
        drawingScore: 22,
      },
    },
  },
  {
    id: 6,
    name: 'Jigglypuff',
    missions: {
      1: {
        id: 1,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        writingScore: 62,
        drawingScore: 20,
      },
      2: {
        id: 2,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        writingScore: 44,
        drawingScore: 22,
      },
    },
  },
  {
    id: 7,
    name: 'Gengar',
    missions: {
      1: {
        id: 1,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        writingScore: 62,
        drawingScore: 20,
      },
      2: {
        id: 2,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        writingScore: 44,
        drawingScore: 22,
      },
    },
  },
  {
    id: 8,
    name: 'Eevee',
    missions: {
      1: {
        id: 1,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        writingScore: 62,
        drawingScore: 20,
      },
      2: {
        id: 2,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        writingScore: 44,
        drawingScore: 22,
      },
    },
  },
  {
    id: 9,
    name: 'Ellen',
    missions: {
      1: {
        id: 1,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        writingScore: 62,
        drawingScore: 20,
      },
      2: {
        id: 2,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        writingScore: 44,
        drawingScore: 22,
      },
    },
  },
  {
    id: 10,
    name: 'Gray',
    missions: {
      1: {
        id: 1,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        writingScore: 62,
        drawingScore: 20,
      },
      2: {
        id: 2,
        writingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        drawingSubmission:
          'https://labs28-b-storysquad.s3.amazonaws.com/bucketFolder/1604534292837-lg-C%3A%5CUsers%5Cnatha%5CAppData%5CLocal%5CTemp%5CeAAaU4hehurC6hQjYo_XPVTN.jpeg-1.jpg',
        writingScore: 44,
        drawingScore: 22,
      },
    },
  },
];

export function getRandomPartners() {
  let index1 = Math.ceil(Math.random() * 9);
  let index2 = Math.floor(Math.random() * 9);
  const player1 = players[index1];
  player1.avatar = `https://labs28-b-storysquad.s3.amazonaws.com/hero-${index1}.svg`;

  const player2 = players[index2];
  player2.avatar = `https://labs28-b-storysquad.s3.amazonaws.com/hero-${index2}.svg`;

  return [player1, player2];
}

export function getSubmissionApproved() {
  return Math.floor(Math.random() * 2);
}
