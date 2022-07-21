const escapeRegex = require('escape-string-regexp')

function getPnpmPackagePath(webpackConfigPathEnding) {
    let allPnpmPaths = [];

    for (const key of Object.entries(require.cache)) {
        allPnpmPaths.push(key)
    }

    const regexp = new RegExp(escapeRegex(webpackConfigPathEnding), 'gm')

    let reactScriptsPath = allPnpmPaths.find(value => regexp.test(value))

    return reactScriptsPath || null
}

function checkIfItIsPnpm(currentWorkdir) {
    const regexp = new RegExp('\/.pnpm\/', 'g')

    return regexp.test(currentWorkdir)
}

exports.getPnpmPackagePath = getPnpmPackagePath
exports.checkIfItIsPnpm = checkIfItIsPnpm