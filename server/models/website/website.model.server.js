module.exports = function(mongoose, userModel) {
  var websiteSchema = require('./website.schema.server.js')(mongoose);
  var websiteModel = mongoose.model('Website', websiteSchema);

  var api = {
    'createWebsiteForUser': createWebsiteForUser,
    'findAllWebsitesForUser': findAllWebsitesForUser,
    'findWebsiteById': findWebsiteById,
    'updateWebsite': updateWebsite,
    'deleteWebsite': deleteWebsite,
    'insertPageToWebsite' : insertPageToWebsite
  };

  return api;

  function insertPageToWebsite(websiteId, pageId){
    websiteModel
      .findById(websiteId)
      .then(function (website) {
        website.pages.push(pageId);
        website.save();
      });
  }

  function createWebsiteForUser(userId, website) {
    website._user = userId;
    return websiteModel
      .create(website)
      .then(
        function (website) {
          userModel
            .insertWebsiteToUser(website._user, website._id);
        });
  }

  function findAllWebsitesForUser(userId) {
    return websiteModel.find({_user : userId});
  }

  function findWebsiteById(websiteId) {
    return websiteModel.findById(websiteId);
  }

  function updateWebsite(websiteId, website) {
    return websiteModel.update({
      _id : websiteId
    }, {
      name : website.name,
      description : website.description
    });
  }

  function deleteWebsite(websiteId) {
    return websiteModel.remove({
      _id : websiteId
    });
  }
};
