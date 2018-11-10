// if data folder doesnt exists
const init = require('./init.js');
const app = require('./app.js');

const initCallback = (e) => {
  console.log('initCallback', e);
  console.log('space locator', app.getSpace(e.space));
};
console.log('init', init.initSpace(initCallback, 'bob'));

