const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.status(200).send('oi'));

app.listen(port, () => console.log(`ouvindo na ${port}`))