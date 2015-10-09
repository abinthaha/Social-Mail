var fs = require('fs');

var data = fs.readFileSync('./database.json'),
    config;

try {

  config = JSON.parse(data);
  console.log(config);
  console.log(data);
} catch(e) {

  console.log('Error parsing data' + e);

}

module.exports = config;
