import Tag from '../models/Tag'

let tagModel = new Tag();
    
let getTagByTagId = (tagId,callback) => {
    tagModel.one(tagId,(err,result) => {
        if(err){
            return callback({code:404,message:'no result'});
        }
        callback({code:200, message:'success',list:result});
    });
}

/*let getPageTags = (callback) => {
     tagModel.pageList((err,result) => {
        if(err){
            callback({code:404,message:'no result'});
        }
        callback({code:200, message:'success',list:result});
    });
}

let getTagsByPostId = (postId,callback) => {
    tagModel.listByPostId(postId,(err,result) => {
        if(err){
            callback({code:404,message:'no result'});
        }
        callback({code:200, message:'success',list:result});
    })
}*/


module.exports.getTagByTagId = getTagByTagId;
/*module.exports.getTagsByPostId = getTagsByPostId;*/
