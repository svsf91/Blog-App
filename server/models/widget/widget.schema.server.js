module.exports = function(mongoose){
    var Schema = mongoose.Schema;

    var widgetSchema = new Schema({
        _page : {type : Schema.Types.ObjectId, ref : 'Page'},
        type : {
            type : String,
            enum : ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'TEXTINPUT']},
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
    }, {collection : 'widget'});

   return widgetSchema;
};
