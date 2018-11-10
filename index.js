const init = require('./init.js');
const app = require('./app.js');
const nb = require('./notebook.js');
const events = require('events');
const eventEmitter = new events.EventEmitter();

let space ='';
const onNotebookRemove = (e) => {
    console.log('on noteboiok remove');
};

const onNotebookCreate = (e) => {
    console.log('on noteboiok create');
};

const createNoteBookSample = () => {
    console.log('createNoteBookSample');
    let notebook ='my_notebook';
    if (nb.ifNotebookExistsSync(space, notebook)) {
        nb.remove(onNotebookRemove, space, notebook);
    }

    nb.create(onNotebookCreate, space, notebook)


};

eventEmitter.on('createNoteBookSample', createNoteBookSample);

const initCallback = (e) => {
  console.log('initCallback', JSON.stringify(e, undefined, 2));
  space = app.getSpace(e.space);
  eventEmitter.emit('createNoteBookSample');
};


console.log('init', init.initSpace(initCallback, 'space'));


