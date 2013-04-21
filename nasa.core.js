module.exports = function(fs, async){
    var nasa = {
        pushLocalRepositoriesToGitHub: function(repositories){
            var exporter = require('./github.exporter.js');
            console.log("exporting to GitHub");
            async.eachSeries(repositories, exporter, function(err){
                if (err)
                    console.log(err);
            });
        },
        bootstrap: function(){
            //Do any necessary setup in here, it will run once when the app is started.
            //setup the local repositories folder
            var path = __dirname + "/NASAGitRepositories";
            if (!fs.existsSync(path))
                fs.mkdir(path);
        },
        updateLocalRepositories: function(repositories, updateComplete){
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
                    else
                        updateComplete();
                }
            );
        }
    }
    return nasa;
}
