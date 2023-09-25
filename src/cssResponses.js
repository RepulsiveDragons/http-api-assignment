const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/style.css`);

const getCSS = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(index);
  response.end();
};

module.exports = {
  getCSS,
};
