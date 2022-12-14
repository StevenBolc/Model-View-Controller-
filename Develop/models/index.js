const Comment = require('./Comment');
const User = require('./User');
const Post = require('./Post');


Post.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Post.hasMany(Comment, {
    foreignKey: 'post_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
})



module.exports = { Comment, User, Post };
