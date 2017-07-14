import Tag from '../models/Tag'
import PostTag from '../models/PostTag'
let async = require('async')

let tagModel = new Tag();
let postTagModel = new PostTag();

let getTagList = callback => {
    tagModel.tagList((err, tags) => {
        if (err) {
            return callback({ code: 404, message: 'no result' });
        }

        async.eachSeries(tags, (tag, countCallback) => {
            postTagModel.postCountByTagId(tag.id, (err, count) => {
                if (err) {
                    return countCallback(err)
                }
                tag.postNum = count;
                countCallback()
            });
        }, (err) => {
            if (err) {
                return callback({ code: 404, message: 'no result' });
            }
            callback({ code: 404, message: 'success', list: tags });
        });

    });
}

let getTagByTagId = (tagId, callback) => {
    tagModel.one(tagId, (err, result) => {
        if (err) {
            return callback({ code: 404, message: 'no result' });
        }
        callback({ code: 200, message: 'success', list: result });
    });
}

let searchTagsByName = (tagName, callback) => {
    tagModel.searchTagsByName(tagName, (err, result) => {
        if (err) {
            return callback({ code: 404, message: 'no result' });
        }
        callback({ code: 200, message: 'success', list: result });
    })
}

let addTag = (tagName, callback) => {
    tagModel.addTag(tagName, (err, result) => {
        if (err) {
            return callback({ code: 404, message: 'insert fail' });
        }
        callback({ code: 200, message: 'success', insertId: result });
    })
}

module.exports.getTagList = getTagList;
module.exports.getTagByTagId = getTagByTagId;
module.exports.searchTagsByName = searchTagsByName;
module.exports.addTag = addTag;
