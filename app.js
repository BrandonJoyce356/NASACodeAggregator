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
            var next = function(){
                index++;
                nasa.processRepository(repositories, index);
            };
            if (repository.type == "GIT"){
                if (fs.existsSync(localRepositoryPath)){
                    //we should just pull changes
                    //todo: actually pull changes...
                    console.log("we got that already!")
                    next();
                }
                else{
                    //we need to clone
                    exec("git clone " + repository.source + " " + localRepositoryPath, function(error, stdout, stderr){
                        nasa.printShellInfo(error, stdout, stderr);
                        next();
                    });
                }
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