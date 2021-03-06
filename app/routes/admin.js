module.exports = function (application) {
    application.get('/formulario_inclusao_noticia', function (req, res) {
        res.render("admin/form_add_noticia");
    });

    application.post('/noticias/salvar', function (req, res) {
        let noticias = req.body;
        let connection = application.config.dbConnection();
        let noticiasModel = application.app.models.noticiasModel;

        noticiasModel.salvarNoticia(noticias, connection, function (error, result) {
            res.render("noticias/noticias", { noticias: result });
        });
    });
}