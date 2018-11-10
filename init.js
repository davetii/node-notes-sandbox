const path = require('path');
const fs = require('fs');
const app = require('./app.js');

const createAppFile = (appFile, appJSON, callback) => {
    fs.appendFile( appFile, JSON.stringify(appJSON), function (err) {
        if (err) throw err;
        callback(appJSON);
    });
};

const initSpace = (callback, spaceName = 'space', targetPath = app.getDefaultDataDir()) =>  {
    if (!fs.existsSync(targetPath)) { fs.mkdirSync(targetPath); }

    const pathToSpace = path.join(targetPath, spaceName);
    const spaceJson = spaceName + '.json';
    if (!fs.existsSync(pathToSpace)) { fs.mkdirSync(pathToSpace); }

    const appJSON = initApp(pathToSpace,spaceName);
    const appFile = path.join(pathToSpace, spaceJson);
    if (fs.existsSync(appFile)) {
        fs.unlink(appFile, function (err) {
            if (err) throw err;
            createAppFile(appFile, appJSON, callback);
        });
    } else {
        createAppFile(appFile, appJSON, callback);
    }
};


const initApp = (targetPath, spaceName, createdDate = new Date()) => (
    {path: targetPath, space: spaceName, createdDate: createdDate}
);

module.exports = {initSpace};