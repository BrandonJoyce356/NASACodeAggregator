var fs = require('fs'),
    async = require('async'),
    config = require('./config'),
    events = require('events'),
    nasa = require('./nasa.core.js')(fs, async);

nasa.bootstrap();
var run = function(){
    async.series([
        function(callback){
            nasa.updateLocalRepositories(config.repositories, callback);
        },
        function(callback){
            nasa.pushLocalRepositoriesToGitHub(config.repositories);
            callback();
        },
        function(callback){
            console.log("Waiting to run again for " + config.waitTime.toString() + " milliseconds");
            setTimeout(run, config.waitTime);
            callback();
        }
    ]);
};
run();

