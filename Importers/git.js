var sys = require('sys');
var exec = require('child_process').exec;

module.exports = function(repository, callback){
    var print = function(error, stdout, stderr){
        if (stdout)
            sys.print('stdout: ' + stdout);
        if (stderr)
            sys.print('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    }

    if (repository.type == "GIT"){
        console.log("Updating Git repository " + repository.source);
         //we should just pull changes
         exec("cd " + repository.cloneFolder + "; git pull " + repository.source,
         function(error, stdout, stderr){
             print(error, stdout, stderr);
             callback();
         });
    }
    else{
        callback();
    }
    //else{
    //we need to clone
    //    exec("git clone " + repository.source + " " + localRepositoryPath, function(error, stdout, stderr){
    //        nasa.printShellInfo(error, stdout, stderr);
    //        next();
    //    });
    //}
}

