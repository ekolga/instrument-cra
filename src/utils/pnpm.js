const fs = require('fs');

function getPnpmPackagePath(webpackConfigPathEnding) {
    let allPnpmPaths = [];

    for (const key of Object.entries(require.cache)) {
        allPnpmPaths.push(key)
    }

    const regexp = new RegExp(webpackConfigPathEnding, 'gm')
    let reactScriptsPath = allPnpmPaths.find(value => {
        if (regexp.test(value)) {
            return value
        }
    })

    return reactScriptsPath || null
}

// function getReactPackageName() {
//     // return 'react-scripts@3.4.1_sass@1.32.13+typescript@3.9.10'

//     // const pnpmLockfileLocation = '/home/ekolga/work/VIP/common/config/rush/pnpm-lock.yaml'
//     const regexp = new RegExp('/react-scripts/', 'gm')
//     const pnpmLockfileLocation = '/home/ekolga/work/VIP/common/config/rush/.npmrc'

//     // let data = fs.readFileSync(pnpmLockfileLocation, {encoding: "utf8"})
//     // console.log(data);

//     fs.readFile(pnpmLockfileLocation, 'utf8', (err, data) => {
//         if (err) {
//             console.error('boo that sucks')
//         }
//         console.log(data);
//     });

//     return formPackageName(string)
// }

// function formPackageName(package) {

// }

exports.getPnpmPackagePath = getPnpmPackagePath
exports.getReactPackageName = getReactPackageName