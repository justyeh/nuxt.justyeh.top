import Tag from '../models/Tag'

let tag = new Tag();

let list = (callback) => {
     tag.list((err,result) => {
        if(err){
            callback({code:404,message:'no result'});
        }
        callback({code:200, message:'success',list:result});
    });
}

let geTagById = (tagId,callback) => {
    tag.one(tagId,(err,result) => {
        if(err){
            callback({code:404,message:'no result'});
        }
        callback({code:200, message:'success',list:result});
    });
}

module.exports.list = list;
module.exports.gettagById = geTagById;
