var sys = require('sys');
var fs = require('fs');
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
         //clone if non-existing...
         if (!fs.existsSync(repository.cloneFolder + "/" + ".git")){
             exec("git clone " + repository.source + " " + repository.cloneFolder, function(error, stdout, stderr){
                 print(error, stdout, stderr);
                 callback();
             });
         }
        else{
             //just pull changes
             exec("cd " + repository.cloneFolder + "; git pull " + repository.source,
             function(error, stdout, stderr){
                 print(error, stdout, stderr);
                 callback();
             });
         }
    }
    else{
        callback();
    }
}

