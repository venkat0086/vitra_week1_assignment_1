const Fuse = require("fuse.js");

const fruits = [
  {
    name: "Apple",
    color: "red",
  },
  {
    name: "Pine Apple",
    color: "Yellow",
  },
  {
    name: "Orange",
    color: "orange",
  },
  {
    name: "Banana",
    color: "yellow",
  },
];

const options = {
  isCaseSensitive: false,
  findAllMatches: true,
  includeMatches: false,
  useExtendedSearch: false,
  threshold: 0.4,
  location: 0,
  distance: 2,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ["name", "color"],
};

const fuse = new Fuse(fruits, options);

let input = "yel";
let result = fuse.search(input);
console.log(result);
