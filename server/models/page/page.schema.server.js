module.exports = function(mongoose){
    var Schema = mongoose.Schema;

    var pageSchema = new Schema({
        _website : {type : Schema.Types.ObjectId, ref : 'Website'},
        name : {type : String, required : true},
        title : String,
        description : String,
        widgets : [String],
        dateCreated : {
            type : Date,
            default: Date.now
        }
    }, {collection : 'page'});

   return pageSchema;
};
