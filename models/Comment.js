var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  // Requires a profile because we need to know who's making the comment
    profile: {type: mongoose.Schema.Types.Mixed, default: {} },
    post: {type: String, default: ''},
    text: {type: String, default: ''},
    timestamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model('CommentSchema', CommentSchema);