const path = require('path');
const fs = require('fs');
const app = require('./app.js');


const initSpace = (callback, spaceName = 'space', targetPath = app.getDefaultDataDir()) =>  {
    if (!fs.existsSync(targetPath)) { fs.mkdirSync(targetPath); }

    const pathToSpace = path.join(targetPath, spaceName);
    if (!fs.existsSync(pathToSpace)) { fs.mkdirSync(pathToSpace); }

    const appFile = path.join(pathToSpace, app.APP_JSON);
    if (fs.existsSync(appFile)) {
        fs.unlink(appFile, function (err) {
            if (err) throw err;
            console.log('File deleted!');
        });
    }

    const appJSON = initApp(pathToSpace,spaceName);
    fs.appendFile( path.join(pathToSpace, app.APP_JSON), JSON.stringify(appJSON), function (err) {
        if (err) throw err;
        callback(appJSON);
    });
};


const initApp = (targetPath, spaceName) => (
    {path: targetPath, space: spaceName}
);

module.exports = {initSpace};