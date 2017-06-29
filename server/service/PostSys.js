import Post from '../models/Post'
import Tag from '../models/Tag'

let async = require('async');

let postModel = new Post();
let tagModel = new Tag();

let list = (params, callback) => {
    postModel.list(params, (err, posts) => {
        if (err) {
            callback({ code: 404, message: 'no result' });
        }
        //get each post's tags
        async.eachSeries(posts, (post, tagCallback) => {
            tagModel.listByPostId(post.id, (err, result) => {
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

let getPostById = (postId, callback) => {
    async.waterfall([
        oneCallback => {
            postModel.one(postId, (err, post) => {
                if (err) {
                    oneCallback(err);
                    return;
                }
                if(post.length == 0){
                    oneCallback('not found this post');
                    return;
                }
                oneCallback(null, post);
            });
        },
        (arg1, tagCallback) => {
            tagModel.listByPostId(postId, (err, tags) => {
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

let updatePost = (post, callback) => {
    postModel.update(post, (err, result) => {
        if (err) {
            callback({ code: 404, message: 'no result' });
        }
        callback({ code: 200, message: 'success', changedRows: result });
    });
}

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
module.exports.updatePost = updatePost;
module.exports.getPostCount = getPostCount;
