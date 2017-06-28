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
        async.everySeries(posts, (post, callback) => {
            tagModel.listByPostId(post.id, (err, result) => {
                if (err) {
                    return callback(err)
                }
                post.tags = result;
                callback()
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
    postModel.one(postId, (err, post) => {
        if (err) {
            callback({ code: 404, message: 'no result' });
        }
        callback({ code: 200, message: 'success', list: post });
       /* tagModel.listByPostId(postId, (err, tags) => {
            if (err) {
                callback({ code: 404, message: 'no result' });
            }
            post.tags = tags;
            callback({ code: 200, message: 'success', list: post });
        });*/
    });

    /*postModel.one(postId, (err, post) => {
        if (err) {
            callback({ code: 404, message: 'no result' });
        }
        tagModel.listByPostId(postId, (err, tags) => {
            if (err) {
                callback({ code: 404, message: 'no result' });
            }
            post.tags = tags;
            callback({ code: 200, message: 'success', list: post });
        });

    });*/
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
