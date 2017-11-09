var mongoose = require('mongoose');
var User = require('./user.js')
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    title: String,
    content: String,
    category: String
});

module.exports = mongoose.model('Article', articleSchema)