module.exports = function(app, models) {

    var pages = [];

    //POST Calls
    app.post('/api/website/:websiteId/page', createPage);

    //GET Calls
    app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
    app.get('/api/page/:pageId', findPageById);

    //PUT Calls
    app.put('/api/page/:pageId', updatePage);

    //DELETE Calls
    app.delete('/api/page/:pageId', deletePage);


    /*API calls implementation*/
    function createPage(req, res) {
        var wid = req.params.websiteId;
        var page = req.body;

        models
            .pageModel
            .createPageForWebsite(wid, page)
            .then(
                function (status) {
                    res.send(status);
                },
                function () {
                    res.sendStatus(400).send(error);
                });
    }

    function findAllPagesForWebsite(req, res) {
        var wid = req.params.websiteId;

        models
            .pageModel
            .findAllPagesForWebsite(wid)
            .then(
                function (pages) {
                    res.json(pages);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                });
    }

    function findPageById(req, res) {
        var pid = req.params.pageId;

        models
            .pageModel
            .findPageById(pid)
            .then(
                function (page) {
                    res.json(page);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                });
    }

    function updatePage(req, res) {
        var pid = req.params.pageId;
        var page = req.body;

        models
            .pageModel
            .updatePage(pid, page)
            .then(
                function (page) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                });
    }

    function deletePage(req, res) {
        var pid = req.params.pageId;

        models
            .pageModel
            .deletePage(pid)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                });
    }
};