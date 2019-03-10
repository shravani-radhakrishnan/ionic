const mongoose=require('mongoose');
const Schema =mongoose.Schema;
var GallerSchema = new Schema({
        name   		: { type : String, required : true, max : 50 },
	   description	: { type : String, required : true },
	   thumbnail 	: { type : String, required : true },
	   displayed    : Boolean,
	   date 		: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Gallery', GallerySchema);