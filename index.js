const loadGridFromFile = require('./loadGridFromFile');
const loadWordListFromFile = require('./loadWordListFromFile');
const search = require('./search');

const gridPath = process.argv[2];
const wordlistPath = process.argv[3];

if (!gridPath || !wordlistPath) {
  console.error(`Missing grid or wordlist in input\nSample usage: node index.js sample/grid.txt sample/words.txt`);
  process.exit(1);
}

const grid = loadGridFromFile(gridPath);
const wordlist = loadWordListFromFile(wordlistPath);

if (!grid || !wordlist) {
  console.error("Invalid input");
  process.exit(1);
}

const results = search(grid, wordlist);
console.log(results);
process.exit(0);
