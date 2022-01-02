const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../server/public'),
    devServer: {
        proxy: {
            '/api': {
                target: 'https://todolist-wea-fryc.herokuapp.com/'
            }
        }
    }
}