const express = require('express');
const configdb = require('./config/config');
const routes = require('./routes/routes');
const server = express();
const port = 3000; // Change this to any available port number

// Using JSON format in the req and res
server.use(express.json());
server.use("/person", routes);

// Call Database connection
configdb();

// Server listen
server.listen(port, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on http://localhost:${port}`);
    }
});

