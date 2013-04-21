module.exports = function(fs, async){
    var nasa = {
        bootstrap: function(){
            //setup the local repositories folder
            var path = __dirname + "/NASAGitRepositories";
            if (!fs.existsSync(path))
                fs.mkdir(path);
        },
        updateLocalRepositories: function(repositories){
            var importerFiles = fs.readdirSync('./Importers');
            var importers = [];
            for (var i=0;i<importerFiles.length;i++) {
                importers.push(require('./Importers/' + importerFiles[i]));
            }
            async.eachSeries(repositories, function(repository, callback){
                    var localRepositoryPath = __dirname + "/NASAGitRepositories/" + repository.cloneFolder;
                    if (!fs.existsSync(localRepositoryPath))
                        fs.mkdir(localRepositoryPath);
                    repository.cloneFolder = localRepositoryPath;
                    console.log("==============================");
                    console.log("Processing " + repository.source);

                    async.eachSeries(importers, function(importer, importerCallback){
                        importer(repository, importerCallback);
                    }, function(err){
                        callback();
                    });
                }, function(err){
                    if (err)
                        console.log(err);
                }
            );
        },
        pushLocalRepositoriesToGitHub: function(){

        }
    }
    return nasa;
}
