const express = require('express');
const app = express();
const fs = require('fs');
app.use('/static', express.static('public'));

let rawdata = fs.readFileSync('player_overviews.json');
let players = JSON.parse(rawdata);

app.get('/', (req,res) => {
    res.sendFile('index.html', {root: __dirname});
});

app.get('/api/players', (req, res) => {
    res.send([1,2,3]);
});

app.get('/api/players/:id', (req,res) => {
    const player = players.find(c => c.player_slug === req.params.id);
    if(!player) res.status(404).send('player id was not found');
    res.send(player);
});

// PORT 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}....`));


