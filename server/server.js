const express = require('express');
const app = express();
const path = require('path');
const router = require('./api/router');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.json());

app.use('/api', router);

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'server/public/index.html'));
    // console.log(__dirname)
});

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(
    '/public/assets',
    express.static(path.join(__dirname, 'public/assets'))
);

// to handle any type of error message
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status).send({ error: err.message });
});

// to handle request for page that doesnt exist
app.use((req, res, next) => {
    // res.status(404).send('page not found');
    res.redirect('/');
});

// other errors
app.use((req, res, next) => {
    res.status(500).send({ error: err });
});

module.exports = app;
