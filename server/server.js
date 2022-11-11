
const express = require('express');

function setupServer() {
 const app = express();
    //middleware
    app.use(express.json());

    app.get('/hello', (req, res) => {
        res.status(200).send('hello world');
    });
    return app;
}

module.exports = setupServer;