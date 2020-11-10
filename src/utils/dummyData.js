const players = [
  {
    id: 1,
    name: 'Charmander',
    writingScore: 62,
    readingScore: 20,
  },
  {
    id: 2,
    name: 'Squirtle',
    writingScore: 63,
    readingScore: 20,
  },
  { id: 3, name: 'Metapod', type: 'bug', writingScore: 72, readingScore: 20 },
  {
    id: 4,
    name: 'Butterfree',
    writingScore: 178,
    readingScore: 20,
  },
  {
    id: 5,
    name: 'Pikachu',
    writingScore: 112,
    readingScore: 20,
  },
  {
    id: 6,
    name: 'Jigglypuff',
    writingScore: 95,
    readingScore: 20,
  },
  {
    id: 7,
    name: 'Gengar',
    writingScore: 225,
    readingScore: 20,
  },
  { id: 8, name: 'Eevee', writingScore: 65, readingScore: 20 },
  { id: 9, name: 'Ellen', writingScore: 65, readingScore: 20 },
  { id: 10, name: 'Gray', writingScore: 65, readingScore: 20 },
];

export function getRandomPartners() {
  let index1 = Math.floor(Math.random() * 10);
  let index2 = Math.floor(Math.random() * 10);
  const player1 = players[index1];
  player1.avtar = `https://labs28-b-storysquad.s3.amazonaws.com/hero-${index1}.svg`;

  const player2 = players[index2];
  player2.avtar = `https://labs28-b-storysquad.s3.amazonaws.com/hero-${index2}.svg`;

  return [player1, player2];
}
