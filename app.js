var fs = require('fs'),
    async = require('async'),
    config = require('./config'),
    events = require('events'),
    nasa = require('./nasa.core.js')(fs, async);

nasa.bootstrap();
nasa.updateLocalRepositories(config.repositories);
var credentials = require('./credentials');
nasa.pushLocalRepositoriesToGitHub(config.repositories, credentials);