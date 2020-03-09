const server = require('./server.js');

const port = process.env.PORT || 5050;


server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});