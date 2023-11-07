const names = [
    'Alex Russo',
    'John Brown',
    'David Johnson',
    'Sarah Knott',
    'Greg Floyd',
    'Logan Miles',
    'Maria Lopez',
    'Julia Goodwin',
    'Shirley Frazier',
    'Daisy Fields',
    'Benito Ramirez',
    'Loki Zurita',
    'Athena Ramirez',
    'Taylor Swift',
    'Maty Reyes',
    'Joe Snugg',
    'Corbin Taylor',
    'Matt Hahnman',
    'Jordan Miles',
    'Stephanie Green'
];
const comments = [
    'Decision Trackers are awesome',
    'Find My Phone is a useful app',
    'Learn Piano is not very good for learning Piano',
    'Starbase Defender is a great game, I love it',
    'Tower Defense is okay',
    'Monopoly Money is better than real money IMO',
    'Movie trailers are just the best parts of a movie distilled into 90 seconds',
    'Hello world, this is a comment',
    'Social media is a big waste of time',
    'Notes is my most used app',
    'Messages is open on my computer 24/7',
    'Email is open on my computer',
    'Compass is never opened',
    'Firefox is great for privacy',
  ];
  
const users = [];
const getNamePart = () => names[Math.floor(Math.random() * names.length)];
const getRandomName = () => 
`${getNamePart()} ${getNamePart()}`;

const getRandomPosts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        username: getRandomName().split(' ')[0],
      });
    }
    return results;
  };
  const getRandomComments = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        username: getRandomName().split(' ')[0],
      });
    }
    return results;
  };
  
  
module.exports = {
    getRandomName,
    getRandomPosts,
    getRandomComments,
};