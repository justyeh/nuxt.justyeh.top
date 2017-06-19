let Post = require('../models/Post')

let post = new Post();

let list = (callback) => {
     post.list((err,result) => {
        if(err){
            callback({code:404,msg:'no result'});
        }
        callback({code:200, msg:'success',list:result});
    });
}

let getPostById = (postID,callback) => {
    post.one(userID,(err,result) => {
        if(err){
            callback({code:404,msg:'no result'});
        }
        callback({code:200, msg:'success',list:result});
    });
}

module.exports.list = list;
module.exports.getPostById = getPostById;
