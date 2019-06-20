// it is recommended to load configuration for .env as early as possible
require('dotenv').config() // as the first thing to run

const server = require('./api/server.js');

// we'll rad the port from there server environment if it is there
// heroku will have the PORT environment variable set
const port = process.env.PORT || 5000;

// we can now use that port, if set up by heroku or read from .env or 5000 as a default if not set
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
