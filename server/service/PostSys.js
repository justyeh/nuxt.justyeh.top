import Post from '../models/Post'
import PostTag from '../models/PostTag'
let async = require('async')

let postModel = new Post();
let postTagModel = new PostTag();

//获取分页Post列表
let list = (params, callback) => {
    postModel.list(params, (err, posts) => {
        if (err) {
            return callback({ code: 404, message: 'no result' });
        }
        //get each posts' tags
        async.eachSeries(posts, (post, tagCallback) => {
            postTagModel.tagsByPostId(post.id, (err, result) => {
                if (err) {
                   return tagCallback(err)
                }
                post.tags = result;
                tagCallback()
            });
        }, (err) => {
            if (err) {
                return callback({ code: 404, message: 'no result' });
            }
            callback({ code: 404, message: 'success', list: posts });
        });
    });
}

//根据id获取Post
let getPostById = (postId, callback) => {
    async.waterfall([
        oneCallback => {
            postModel.one(postId, (err, post) => {
                if (err) {
                    return oneCallback(err);
                }
                if (post.length == 0) {
                    return oneCallback('not found this post');
                }
                oneCallback(null, post);
            });
        },
        (arg1, tagCallback) => {
            postTagModel.tagsByPostId(postId, (err, tags) => {
                if (err) {
                    return tagCallback(err);
                }
                arg1[0].tags = tags;
                tagCallback(null, arg1);
            });
        }
    ], (err, newPost) => {
        if (err) {
            return callback({ code: 404, message: 'no result' });
        }
        callback({ code: 200, message: 'success', list: newPost });
    });
}

//根据tagId获取Post列表
let getPostsByTagId = (tagId, callback) => {
    postTagModel.postsByTagId(tagId, (err, posts) => {
        if (err) {
            return callback({ code: 404, message: 'no result' });
        }
        callback({ code: 200, message: 'success', list: posts });
    });
}

//添加Post
let addPost = (post, callback) => {
    async.waterfall([
        postCallback => {
            postModel.insert(post, (err, insertPostId) => {
                if (err) {
                    return postCallback(err);
                }
                postCallback(null, insertPostId);
            });
        },
        (insertPostId, tagCallback) => {
            //如果没有Tag，直接return
            if (post.tags.length == 0) {
                return tagCallback(null, {
                    insertPostId
                });
            }

            let postTags = []
            post.tags.forEach(function (tag) {
                postTags.push([
                    insertPostId,
                    tag.id
                ])
            });
            postTagModel.addPostTag(postTags, (err, insertTagsId) => {
                if (err) {
                    return tagCallback(err);
                }
                return tagCallback(null, {
                    insertPostId,
                    insertTagsId
                });
            });
        }
    ], (err, result) => {
        if (err) {
            return callback({ code: 404, message: 'insert fail' });
        }
        callback({ code: 200, message: 'insert success', affectedRows: result.insertPostId });
    });
}

//更新Post
let updatePost = (post, callback) => {
    postModel.update(post, (err, result) => {
        if (err) {
            return callback({ code: 404, message: 'no result' });
        }
        callback({ code: 200, message: 'success', changedRows: result });
    });
}

//获取Post总数
let getPostCount = (postStatus, callback) => {
    postModel.count(postStatus, (err, result) => {
        if (err) {
            return callback({ code: 404, message: 'no result' });
        }
        callback({ code: 200, message: 'success', result: result });
    });
}

module.exports.list = list;
module.exports.getPostById = getPostById;
module.exports.getPostsByTagId = getPostsByTagId;
module.exports.addPost = addPost;
module.exports.updatePost = updatePost;
module.exports.getPostCount = getPostCount;
