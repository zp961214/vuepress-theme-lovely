const path = require('path');
const resolve = (...arg) => path.resolve(...arg);
module.exports = (options, ctx) => ({
    alias() {
        return { 
            '@theme': resolve(__dirname, 'theme')
        };
    }
});
