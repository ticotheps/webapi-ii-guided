const express = require("express");

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

server.use('/api/hubs', hubsRouter);

// export default server; // ES2015
module.exports = server; // CommonJS module syntax