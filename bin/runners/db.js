const mongoose = require('mongoose');
const db = require('../../storages/db')

const { uri, options } = require('../../config/').db

const init = () => new Promise((resolve, reject) => {
    mongoose.connect(uri, options);

    db.once('error', (err) => {
        console.log('BD ERR:', err);
    });

    db.once('open', () => {
        console.log('Connected to DB');
        resolve();
    });

    db.once('close', () => {
        // уведомление для логов
        console.log('Close connected to DB');
    });
});

module.exports = init;
