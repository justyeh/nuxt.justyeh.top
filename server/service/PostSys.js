import Post from '../models/Post'

let postModel = new Post();

let list = (params,callback) => {
     postModel.list(params,(err,result) => {
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

let getPostCount = (postStatus,callback) => {
    postModel.count(postStatus,(err,result) => {
        if(err){
            callback({code:404,message:'no result'});
        }
        callback({code:200, message:'success',result:result});
    });
}

module.exports.list = list;
module.exports.getPostById = getPostById;
module.exports.updatePost = updatePost;
module.exports.getPostCount = getPostCount;
