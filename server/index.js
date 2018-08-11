const express = require('express');
const app = express()

const path = require('path');
const homePage = path.join(__dirname, '../client/index.html');
const foundationSites = path.join(__dirname, '../node_modules/foundation-sites/dist/css');

app.use(express.static('public'));
app.use('/me', express.static(foundationSites));

app.get('/', (req, res) => res.sendFile(homePage));

app.listen(3000, () => console.log('jpdev-home listening on port 3000'))
