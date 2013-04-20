var config = require('./config');

//we read credentials from another config that will not be included in source control.
var credentials = require('./credentials');

console.log(credentials.username);
console.log(credentials.password);

//For now we just loop through the repositories and sync them to a target!
for (var i=0;i < config.repositories.length;i++)
{
    var repository = config.repositories[i];
    if (repository.source.indexOf('.git') > 0){
        //assuming it's git for now... todo: something better
        console.log('Synchronize Git repository here...');
    }
    else{
        console.log('TODO: implement synchronizer for ' + repository.source);
    }
}