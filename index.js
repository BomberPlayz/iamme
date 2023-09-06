const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Kukkolni tetszik a 3000-es porton.');
});