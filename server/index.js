const express = require('express');
const path = require('path');

const PORT = 8000;
const DIST_PATH = path.resolve(__dirname, '..', 'client/dist');

const app = express();

app.use(express.static(DIST_PATH));

app.listen(PORT, () => {console.info(`Server listening on port: ${PORT}\nhttp://localhost:${PORT}`)});