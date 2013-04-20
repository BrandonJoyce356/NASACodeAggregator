//This config file is temporary.  We are probably going to have a more robust
// data source for all the repositories we want to pull from.
var config = {
    repositories: [
//        {
//            type: 'GIT',
//            source: 'http://opensource.gsfc.nasa.gov/projects/DQSS/index.php',
//            target: 'https://github.com/NASATest/DQSS.git'
//        },
        {
            type: 'GIT',
            source: 'http://github.com/nasa/mct',
            target: 'https://github.com/NASATest/mct.git'
        },
        {
            type: 'GIT',
            source: 'http://nasa.github.com/CertWare',
            target: 'https://github.com/NASATest/CertWare.git'
//        },
//        {
//            type: 'GIT',
//            source: 'http://svn.apache.org/repos/asf/oodt',
//            target: 'https://github.com/NASATest/oodt.git'
//        },
//        {
//            type: 'GIT',
//            source: 'http://sourceforge.net/projects/datacasting/',
//            target: 'https://github.com/NASATest/datacasting.git'
//        },
//        {
//            type: 'GIT',
//            source: 'http://sourceforge.net/projects/ion-dtn/',
//            target: 'https://github.com/NASATest/ion-dtn.git'
//        },
//        {
//            type: 'GIT',
//            source: 'http://sourceforge.net/projects/dptoolkit/',
//            target: 'https://github.com/NASATest/dptoolkit.git'
//        },
//        {
//            type: 'GIT',
//            source: 'http://sourceforge.net/projects/coreflightexec/files/cFE-6.1.1/',
//            target: 'https://github.com/NASATest/cFE-6.1.1.git'
//        },
//        {
//            type: 'GIT',
//            source: 'http://github.com/OpenVSP/OpenVSP',
//            target: 'https://github.com/NASATest/OpenVSP.git'
//        },
//        {
//            type: 'GIT',
//            source: 'https://github.com/sunpy/sunpy',
//            target: 'https://github.com/NASATest/sunpy.git'
        }
    ]
};

module.exports = config;