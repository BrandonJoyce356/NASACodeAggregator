var config = require('./config')

//For now we just loop through the repositories and sync them to a target!
for (var i=0;i < config.repositories.length;i++)
{
    var repository = config.repositories[i];
    console.log('This is where we check ' + repository.source + ' for changes');
    console.log('Then we sync to ' + repository.target);
}