import Post from '../models/Post'

let post = new Post();

let list = (callback) => {
     post.list((err,result) => {
        if(err){
            callback({code:404,message:'no result'});
        }
        callback({code:200, message:'success',list:result});
    });
}

let getPostById = (postId,callback) => {
    post.id = postId;
    post.one((err,result) => {
        if(err){
            callback({code:404,message:'no result'});
        }
        callback({code:200, message:'success',list:result});
    });
}

module.exports.list = list;
module.exports.getPostById = getPostById;
