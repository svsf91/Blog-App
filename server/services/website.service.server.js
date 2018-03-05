module.exports = function(app, models) {
    var websites = [];

    //POST Calls
    app.post('/api/user/:userId/website', createWebsite);

    //GET Calls
    app.get('/api/user/:userId/website', findAllWebsitesForUser);
    app.get('/api/website/:websiteId', findWebsiteById);

    //PUT Calls
    app.put('/api/website/:websiteId', updateWebsite);

    //DELETE Calls
    app.delete('/api/website/:websiteId', deleteWebsite);

    function createWebsite(req, res) {
        var uid = req.params.userId;
        var website = req.body;

        models
            .websiteModel
            .createWebsiteForUser(uid, website)
            .then(
                function (status) {
                    res.send(status);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                });
    }

    function findAllWebsitesForUser(req, res) {
        var uid = req.params.userId;
        models
            .websiteModel
            .findAllWebsitesForUser(uid)
            .then(
                function (websites) {
                    res.json(websites);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                });

    }

    function findWebsiteById(req, res) {
        var wid = req.params.websiteId;
        models
            .websiteModel
            .findWebsiteById(wid)
            .then(
                function (website) {
                    if (website) {
                        res.json(website);
                    } else {
                        website = null;
                        res.send(website);
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);
                });
    }

    function updateWebsite(req, res) {
        var wid = req.params.websiteId;
        var website = req.body;

        models
            .websiteModel
            .updateWebsite(wid, website)
            .then(
                function (website) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                });
    }

    function deleteWebsite(req, res) {
        var wid = req.params.websiteId;

        models
            .websiteModel
            .deleteWebsite(wid)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                });
    }
};