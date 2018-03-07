module.exports = function(mongoose){
    var websiteSchema = require("../website/website.schema.server.js")(mongoose);
    var Schema = mongoose.Schema;

    var userSchema = new Schema({
        username : {type : String, required : true},
        password : {type : String, required : true},
        firstName : String,
        lastName : String,
        email : String,
        phone : String,
        websites : [String],
        dateCreated : {
            type : Date,
            default: Date.now
        },
        facebook: {
            id: String,
            token: String
        }
    }, {collection: 'user', usePushEach: true});

    return userSchema;
};
