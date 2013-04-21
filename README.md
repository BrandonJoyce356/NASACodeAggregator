NASACodeAggregator
==================

The NASA Code Aggregator was born out of the NASA Space Apps Challenge 2013.  

The goal is to take many open source projects spread around the internet, and  aggregate those repositories onto GitHub in an automated way.

How It Works
------------
The aggregator uses varios importer extensions to pull changes to remote repositories onto the local machine and convert them to Git if necessary.  After that process, the local repositories are pushed to NASA's GitHub account for the world to see. 

Adding Importers
----------------
Since this project was built in one weekend, we knew we wouldn't be able to implement an importer for every repository type...(mercurial, svn, etc.)  So, here's how you can help!  Adding an importer is just a matter of adding a new .js file to the Importers folder of the project.  Here is the basic structure...
    
    module.exports = function(repository, callback){
      //repository.type => "GIT";    
      //repository.source => "https://github.com/YourRepository.git"
      //repository.cloneFolder => "./NASACodeAggregator"
      
      //Use data from the repository object to update the local Git repository with changes
      //make sure to fire the callback when you're done so NodeJS will love you.  
      callback();
    }
