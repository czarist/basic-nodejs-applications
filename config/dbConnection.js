
let mysql = require('mysql');

let connMySQL = function () {
    console.log('Conexao com db foi estabelecida');
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });
}

module.exports = function () {
    console.log('o Autoload carregou o módulo de conexao com o bd');
    return connMySQL;
}