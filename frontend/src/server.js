
var cors = require('cors');

const path = require('path');
const express = require('express');
const app = express();
app.use(cors());
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;app.use(express.static(publicPath));app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});app.listen(port, () => {
   console.log('Server is up!');
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});


