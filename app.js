var config = require('./config');
var sys = require('sys');
var exec = require('child_process').exec;
var fs = require('fs');
var nasa = {
    makeSurePathExists: function(path){
        if (!fs.existsSync(path))
            fs.mkdir(path);
    },
    processRepository: function(repositories, index){
        if (repositories.length > index){
            var repository = repositories[index];
            var localRepositoryPath = __dirname + "/" + config.localRepositoriesFolder + "/" + repository.cloneFolder;
            nasa.makeSurePathExists(localRepositoryPath);
            if (repository.type == "GIT"){
                exec("git clone " + repository.source + " " + localRepositoryPath, function(error, stdout, stderr){
                    nasa.printShellInfo(error, stdout, stderr);
                    index++;
                    nasa.processRepository(repositories, index);
                });
            }
            else{
                console.log('TODO: implement synchronizer for ' + repository.source);
            }
        }
    },
    printShellInfo: function(error, stdout, stderr){
        sys.print('stdout: ' + stdout);
        sys.print('stderr: ' + stderr);

        if (error !== null) {
            console.log('exec error: ' + error);
        }
    }
};

//setup the local repositories folder first...
var path = __dirname + "/" + config.localRepositoriesFolder;
nasa.makeSurePathExists(path);

//we read credentials from another config that will not be included in source control.
var credentials = require('./credentials');

//This will locally clone all the defined git repositories
nasa.processRepository(config.repositories, 0);