const setupServer = require('./server');
//const db = require  database
const PORT = process.env.PORT || 4000;
const server = setupServer();


(() => {
    server.listen(PORT, () => {
        console.log(`app is listening @http://localhost:${PORT}`);
    });
})()