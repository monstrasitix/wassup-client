// Core
const path = require('path');


const root = path.resolve.bind(undefined, __dirname);


const rule = config => ({
    ...config,
    exclude: [
        /node_modules/,
    ],
});



module.exports = {
    root,
    rule,
};