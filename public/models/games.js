var mongoose = require('mongoose'),
 Schema = mongoose.Schema;
var gamesSchema = mongoose.Schema({
	_id		: String,
	title	: String,
	image_180x100	: String,
	desktop_categories_ids	: String,
	desktop_categories	: String
}, { collection: 'main' });
module.exports = mongoose.model('Games', gamesSchema);
 