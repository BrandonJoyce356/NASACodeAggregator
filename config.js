//This config file is temporary.  We are probably going to have a more robust
// data source for all the repositories we want to pull from.
var config = {
    waitTime: 3600000,
    repositories: [
        {
            cloneFolder: 'NASAXaevTest',
            type: 'GIT',
            source: 'https://github.com/Xaevion/NASAXaevTest.git',
            target: 'git@github.com:NASATest/NASAXaevTest.git'
        },
        {
            cloneFolder: 'mct',
            type: 'GIT',
            source: 'https://github.com/nasa/mct.git',
            target: 'https://github.com/NASATest/mct.git'
        },
        {
            cloneFolder: 'CertWare',
            type: 'GIT',
            source: 'https://github.com/nasa/CertWare.git',
            target: 'https://github.com/NASATest/CertWare.git'
        }
//        {
//            type: 'TAR',
//            source: 'http://opensource.gsfc.nasa.gov/projects/DQSS/dqss_64.tar',
//            target: 'https://github.com/NASATest/DQSS.git'
//        },
//        {
//            type: 'SVN',
//            source: 'http://svn.apache.org/repos/asf/oodt',
//            target: 'https://github.com/NASATest/oodt.git'
//        },
//        {
//            type: 'GIT',
//            source: 'http://git.code.sf.net/p/datacasting/code datacasting-code',
//            target: 'https://github.com/NASATest/datacasting.git'
//        },
//        {
//            type: 'SVN',
//            source: 'http://svn.code.sf.net/p/ion-dtn/code/trunk ion-dtn-code',
//            target: 'https://github.com/NASATest/ion-dtn.git'
//        },
//        {
//            type: 'GIT',
//            source: 'http://git.code.sf.net/p/dptoolkit/code dptoolkit-code',
//            target: 'https://github.com/NASATest/dptoolkit.git'
//        },
//        {
//            type: 'GIT',
//            source: 'http://git.code.sf.net/p/coreflightexec/code coreflightexec-code',
//            target: 'https://github.com/NASATest/cFE-6.1.1.git'
//        },
//        {
//            type: 'GIT',
//            source: 'http://github.com/OpenVSP/OpenVSP.git',
//            target: 'https://github.com/NASATest/OpenVSP.git'
//        },
//        {
//            type: 'GIT',
//            source: 'https://github.com/sunpy/sunpy.git',
//            target: 'https://github.com/NASATest/sunpy.git'
    ]
};

module.exports = config;