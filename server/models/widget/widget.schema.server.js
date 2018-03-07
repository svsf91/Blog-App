module.exports = function(mongoose){
    var Schema = mongoose.Schema;

    var widgetSchema = new Schema({
        _page : String,
        type : String,
        name : {type : String, required : true},
        text : String,
        placeholder : String,
        description : String,
        url : String,
        width : String,
        height : String,
        rows : Number,
        size : Number,
        class : String,
        icon : String,
        deletable : Boolean,
        formatted : Boolean,
        dateCreated : {
            type : Date,
            default: Date.now
        }
    }, {collection : 'widget', usePushEach: true});

   return widgetSchema;
};
