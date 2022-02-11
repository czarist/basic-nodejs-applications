const res = require('express/lib/response');

let dbConnection = require('../../config/dbConnection');

let connection = dbConnection();

module.exports = function (app) {
    app.get('/noticias', function (req, res) {
        connection.query('select * from noticias', function (error, result) {
            res.render("noticias/noticias", { noticias: result });
        });
    })
}