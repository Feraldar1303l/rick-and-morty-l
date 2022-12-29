//Install express server
const express = require('express');
const path = require('path');

const app = express();

//server only the static files form the dist directory
app.use(express.static('./dist/rick-and-morty'));

app.get('/*', (req,res)=>
    res.sendFile('index.html',{root: 'dist/rick-and-morty/'}),
);

//start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);