const path = require('path');
const webpack = require('../../webpack.build');
const config = webpack();

module.exports = () => ({
    ...config,
    output: {
        ...config.output,
        library: 'background',
        path: path.resolve(__dirname, 'build'),
    },
});
