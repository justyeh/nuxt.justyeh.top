import Post from '../models/Post'

let postModel = new Post();

let all = (callback) => {
     postModel.all((err,result) => {
        if(err){
            callback({code:404,message:'no result'});
        }
        callback({code:200, message:'success',list:result});
    });
}

let published = (callback) => {
     postModel.published((err,result) => {
        if(err){
            callback({code:404,message:'no result'});
        }
        callback({code:200, message:'success',list:result});
    });
}

let getPostById = (postId,callback) => {
    postModel.one(postId,(err,result) => {
        if(err){
            callback({code:404,message:'no result'});
        }
        callback({code:200, message:'success',list:result});
    });
}

let updatePost = (post,callback) => {
    postModel.update(post,(err,result) => {
        if(err){
            callback({code:404,message:'no result'});
        }
        callback({code:200, message:'success',changedRows:result});
    });
}

module.exports.all = all;
module.exports.published = published;
module.exports.getPostById = getPostById;
module.exports.updatePost = updatePost;
