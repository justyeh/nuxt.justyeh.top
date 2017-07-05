import PostTag from '../models/PostTag'

let postTagModel = new PostTag();

//删除Post的Tag
let delPostTag = (postTagId, callback) => {
    postTagModel.delPostTag(postTagId, (err, result) => {
        if (err) {
            return callback({ code: 404, message: 'no result' });
        }
        callback({ code: 200, message: 'success', affectedRows: result });
    });
}

//增加Post的Tag
let addPostTag = (postTag, callback) => {
    let postTags = [
        [postTag.postId, postTag.tagId]
    ]
    postTagModel.addPostTag(postTags, (err, result) => {
        if (err) {
            return callback({ code: 404, message: 'insert fail' });
        }
        callback({ code: 200, message: 'success', insertId: result });
    })
}

module.exports.delPostTag = delPostTag;
module.exports.addPostTag = addPostTag;
