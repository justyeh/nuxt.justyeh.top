import Tag from '../models/Tag'

let tag = new Tag();

let getPageTags = (callback) => {
     tag.pageList((err,result) => {
        if(err){
            callback({code:404,message:'no result'});
        }
        callback({code:200, message:'success',list:result});
    });
}

let getTagsByPostId = (postId,callback) => {
    tag.listByPostId(postId,(err,result) => {
        if(err){
            callback({code:404,message:'no result'});
        }
        callback({code:200, message:'success',list:result});
    })
}

let geTagByTagId = (tagId,callback) => {
    tag.one(tagId,(err,result) => {
        if(err){
            callback({code:404,message:'no result'});
        }
        callback({code:200, message:'success',list:result});
    });
}

module.exports.getTagsByPostId = getTagsByPostId;

/*module.exports.gettagById = geTagById;*/
