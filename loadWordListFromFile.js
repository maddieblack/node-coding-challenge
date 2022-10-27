const fs = require('fs');

module.exports = function loadWordListFromFile (path) {
  try {
    const str = fs.readFileSync(path).toString('utf8');
    return str.split('\n').filter(w => w);
  } catch (ex) {
    console.error(`Couldn't load/process wordlist file ${path}`, ex);
  }
}
