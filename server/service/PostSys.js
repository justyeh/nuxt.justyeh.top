import Post from '../models/Post'
let util = require('../util/index')

let postModel = new Post();

let list = (callback) => {
     postModel.list((err,result) => {
        if(err){
            callback({code:404,message:'no result'});
        }
        callback({code:200, message:'success',list:result});
    });
}

let getPostById = (postId,callback) => {
    postModel.id = postId;
    postModel.one((err,result) => {
        if(err){
            callback({code:404,message:'no result'});
        }
        callback({code:200, message:'success',list:result});
    });
}

let updatePost = (post,callback) => {

    /*postModel.id = post.id,
    postModel.title = post.title,
    postModel.image = post.image,
    postModel.meta_description = post.meta_description,
    postModel.markdown = post.markdown,
    postModel.status = post.status,
    postModel.tags = post.tags
    postModel.updated_ad = */
    post.updated_ad = new Date().getTime();
    util.copyProperty(postModel,post);
    postModel.updata((err,result) => {
        if(err){
            callback({code:404,message:'no result'});
        }
        callback({code:200, message:'success',list:result});
    });
}

module.exports.list = list;
module.exports.getPostById = getPostById;
module.exports.updatePost = updatePost;
