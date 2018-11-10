const path = require('path');
const fs = require('fs');
const app = require('./app.js');


const notebookJson = (noteBookName, createdDate = new Date()) => (
    {notebook: noteBookName, createdDate: createdDate}
);

const create = (callback, space, notebook) => {
    const notebookLocation = path.join(space, notebook);
    const noteBookJSONFileName = notebook + '.json';
    const noteBookJSON = notebookJson(notebook);
    const notebookJsonToWrite = JSON.stringify(noteBookJSON, undefined ,2);
    fs.mkdirSync(notebookLocation);
    fs.appendFile( path.join(notebookLocation, noteBookJSONFileName), notebookJsonToWrite, function (err) {
        if (err) throw err;
        callback(noteBookJSON);
    });
};

const remove = (callback, space, notebook) => {
    fs.unlink(path.join(space, notebook), function (err) {
        if (err) throw err;
        callback();
    });
};

const getNotes = (space, notebook) => {

};

const ifNotebookExistsSync = (space, notebook) => (
    fs.existsSync(path.join(space, notebook))
);

module.exports = {create, remove, ifNotebookExistsSync, getNotes};