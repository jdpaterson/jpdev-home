const express = require('express');
const app = express()

const path = require('path');
const homePage = path.join(__dirname, '../client/index.html');

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(3000, () => console.log('jpdev-home listening on port 3000'))
