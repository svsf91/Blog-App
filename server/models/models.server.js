module.exports = function() {
    var connectionString =  null;

    if (process.env.MONGODB_URI) {
        connectionString = 'mongodb://heroku_cs7lkstk:pgi614qmuedmc4nu1fvqk9q8rb@ds127063.mlab.com:27063/heroku_cs7lkstk';
    }
    else {
        connectionString = 'mongodb://localhost:27017/cs5610';
    }

    var mongoose = require('mongoose');
    mongoose.connect(connectionString);
    mongoose.Promise = require('q').Promise;

    var userModel = require("./user/user.model.server.js")(mongoose);
    var websiteModel = require("./website/website.model.server.js")(mongoose, userModel);
    var pageModel =  require("./page/page.model.server.js")(mongoose, websiteModel);
    var widgetModel = require("./widget/widget.model.server.js")(mongoose, pageModel);

    var models = {
        'userModel' : userModel,
        'websiteModel' : websiteModel,
        'pageModel' : pageModel,
        'widgetModel' : widgetModel
    };

    return models;

};