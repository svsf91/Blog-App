module.exports = function() {
    var connectionString =  null;

    if (process.env.MONGODB_URI) {
        connectionString = 'mongodb://admin:admin@ds257808.mlab.com:57808/heroku_jjwsf0d9';
    }
    else {
        connectionString = 'mongodb://localhost:27017/blogApp';
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
