const express = require('express');

const bodyParser = require('body-parser');

const ejs = require('ejs');

const http = require('http');

const container = require('./container');


container.resolve(function(users) {

    const app = InitiateExpress();

    function InitiateExpress() {
        const app = express();
        const server = http.createServer(app);
        server.listen(3000, function() {
            console.log('Listening on port 3000');
        });
        ExpressSettings(app);

        //create routing for express promise router
        const router = require('express-promise-router')();

        users.SetRouting(router);

        app.use(router);
    }



    //make files available publicall html css etc
    function ExpressSettings(app) {
        app.use(express.static('public'));
        app.set('view engine', 'ejs');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

    }
});