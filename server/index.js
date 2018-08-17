const express = require('express');
const app = express()

const path = require('path');

app.use(express.static("public"));
app.use('/js', express.static(path.join(__dirname, '../node_modules/foundation-sites/dist/js')));
app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(3000, () => console.log('jpdev-home listening on port 3000'));
