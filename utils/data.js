const names = [
    'Alex',
    'John',
    'David',
    'Sarah',
    'Greg',
    'Logan',
    'Maria',
    'Julia',
    'Shirley',
    'Daisy',
    'Benito',
    'Loki',
    'Athena',
    'Taylor',
    'Maty',
    'Joe',
    'Corbin',
    'Matt',
    'Jordan',
    'Stephanie'
];
const users = [];
const getNamePart = () => names[Math.floor(Math.random() * names.length)];
const getRandomName = () => `${getNamePart()} ${getNamePart()}`;

module.exports = getRandomName;