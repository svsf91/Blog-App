module.exports = function(mongoose, websiteModel) {
    var pageSchema = require('./page.schema.server')(mongoose);
    var pageModel = mongoose.model('Page', pageSchema);

    var api = {
        'createPageForWebsite' : createPageForWebsite,
        'findAllPagesForWebsite' : findAllPagesForWebsite,
        'findPageById' : findPageById,
        'updatePage' : updatePage,
        'insertWidgetToPage' : insertWidgetToPage,
        'deletePage' : deletePage
    };

    return api;

    function createPageForWebsite(websiteId, page) {
        page._website = websiteId;
        return pageModel
            .create(page)
            .then(
                function (page) {
                    websiteModel
                        .insertPageToWebsite(page._website, page._id);
                });
    }

    function findAllPagesForWebsite(websiteId) {
        return pageModel.find({_website : websiteId});
    }

    function findPageById(pageId) {
        return pageModel.findById(pageId);
    }

    function updatePage(pageId, page) {
        return pageModel.update({
            _id : pageId
        }, {
            name : page.name,
            description : page.description
        });
    }

    function insertWidgetToPage(pageId, widgetId){
        pageModel
            .findById(pageId)
            .then(function (page) {
                page.widgets.push(widgetId);
                page.save();
            });
    }

    function deletePage(pageId) {
        return pageModel.remove({
            _id : pageId
        });
    }
}