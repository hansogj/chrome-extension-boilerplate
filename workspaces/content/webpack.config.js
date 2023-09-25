const path = require('path');
const webpack = require('../../webpack.build.js');
const config = webpack();

module.exports = () => ({
    ...config,
    output: {
        ...config.output,
        library: 'content',
        path: path.resolve(__dirname, 'build'),
    },
});
