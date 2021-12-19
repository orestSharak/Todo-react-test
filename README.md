1. First task is:

let array = [
  {id: 1, universe: "marvel", name: "Spider Man"},
  {id: 2, universe: "marvel", name: "Iron Man"},
  {id: 3, universe: "dc", name: "Aqua Man"},
  {id: 4, universe: "dc", name: "Bat Man"},
  {id: 5, universe: "marvel", name: "Hulk"}
];

const groupBy = (arr, key) => {
  if (!arr) return console.log('no arr');
  if (!key) return console.log('no key');
  return arr.reduce((acc, obj) => {
    let prop = obj[key];
    if (prop === undefined) return {};
    if (!acc[prop]) {
      acc[prop] = [];
    }
    acc[prop].push(obj);
    return acc;
  }, {})
};

console.log(groupBy(array, 'universe'));

2. Second task is:

Todo List, check on: 