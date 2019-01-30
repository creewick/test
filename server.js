const express = require('express');

function getSettings() {
    let arg = process.argv;
    return {
        groupKey: arg[1],
        serviceKey: arg[2],
        confirmCode: argv[3],
        replyString: argv[4],
        databaseToken: argv[5],
        databaseName: argv[6]
    };
}

function start() {
    const app = express();

    app.get('/', (_, res) => {
        res.send('API is running');
    });
    
    app.listen(process.env.PORT || '3000');
}

module.exports = {
    start
}