const express = require('express');
const path = require('path');
const cors = require('cors');

const server = express();
// allows to use json in express
server.use(express.json());

const PORT = 8000;

server.use(cors());

server.use('/img', express.static(path.join(__dirname, 'img')));

const deviceRouter = require('./routers/deviceRouters');

server.use('/', deviceRouter);

server.listen(PORT, () => {
  console.log(`Server is live on ${PORT}`);
});
