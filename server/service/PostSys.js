import Post from '../models/Post'
import PostTag from '../models/PostTag'
let async = require('async');

let postModel = new Post();
let postTagModel = new PostTag();

//获取分页Post列表
let list = (params, callback) => {
    postModel.list(params, (err, posts) => {
        if (err) {
            callback({ code: 404, message: 'no result' });
        }
        //get each post's tags
        async.eachSeries(posts, (post, tagCallback) => {
            postTagModel.tagsByPostId(post.id, (err, result) => {
                if (err) {
                    tagCallback(err)
                }
                post.tags = result;
                tagCallback()
            });
        }, (err) => {
            if (err) {
                callback({ code: 404, message: 'no result' });
                return false;
            }
            callback({ code: 404, message: 'no result', list: posts });
        });
    });
}

//根据id获取Post
let getPostById = (postId, callback) => {
    async.waterfall([
        oneCallback => {
            postModel.one(postId, (err, post) => {
                if (err) {
                    oneCallback(err);
                    return;
                }
                if (post.length == 0) {
                    oneCallback('not found this post');
                    return;
                }
                oneCallback(null, post);
            });
        },
        (arg1, tagCallback) => {
            postTagModel.tagsByPostId(postId, (err, tags) => {
                if (err) {
                    tagCallback(err);
                }
                arg1[0].tags = tags;
                tagCallback(null, arg1);
            });
        }
    ], (err, newPost) => {
        if (err) {
            callback({ code: 404, message: 'no result' });
            return;
        }
        callback({ code: 200, message: 'success', list: newPost });
    });
}

//根据tagId获取Post列表
let getPostsByTagId = (tagId, callback) => {
    postTagModel.postsByTagId(tagId, (err, posts) => {
        if (err) {
            callback({ code: 404, message: 'no result' });
            return;
        }
        callback({ code: 200, message: 'success', list: posts });
    });
}

//更新Post
let updatePost = (post, callback) => {
    postModel.update(post, (err, result) => {
        if (err) {
            callback({ code: 404, message: 'no result' });
        }
        callback({ code: 200, message: 'success', changedRows: result });
    });
}

//获取Post总数
let getPostCount = (postStatus, callback) => {
    postModel.count(postStatus, (err, result) => {
        if (err) {
            callback({ code: 404, message: 'no result' });
        }
        callback({ code: 200, message: 'success', result: result });
    });
}

module.exports.list = list;
module.exports.getPostById = getPostById;
module.exports.getPostsByTagId = getPostsByTagId;
module.exports.updatePost = updatePost;
module.exports.getPostCount = getPostCount;
