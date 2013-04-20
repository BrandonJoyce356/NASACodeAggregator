//This config file is temporary.  We are probably going to have a more robust
// data source for all the repositories we want to pull from.
var config = {
    repositories: [
        {
            source: 'https://github.com/nasa/mct.git',
            target: 'https://github.com/BrandonJoyce356/NASATestSourceRepository.git'
        }
    ]
};

module.exports = config;