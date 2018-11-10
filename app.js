const path = require('path');

const APP_JSON = 'app.json';
const DEFAULT_APP_ROOT_FOLDER_NAME = '.notesexp';


const getDefaultDataDir = () => (
    path.join(process.env.USERPROFILE, DEFAULT_APP_ROOT_FOLDER_NAME)
);

const getSpace = (spaceName = 'space') => (
    path.join(getDefaultDataDir(), spaceName)
);

module.exports = {

    APP_JSON: APP_JSON,
    DEFAULT_APP_ROOT_FOLDER_NAME: DEFAULT_APP_ROOT_FOLDER_NAME,
    getDefaultDataDir, getSpace
};