const path = require('path');

const DEFAULT_APP_ROOT_FOLDER_NAME = '.notesexp';


const getDefaultDataDir = () => (
    path.join(process.env.USERPROFILE, DEFAULT_APP_ROOT_FOLDER_NAME)
);

const getSpace = (spaceName = 'space') => (
    path.join(getDefaultDataDir(), spaceName)
);

module.exports = {

    DEFAULT_APP_ROOT_FOLDER_NAME: DEFAULT_APP_ROOT_FOLDER_NAME,
    getDefaultDataDir, getSpace
};