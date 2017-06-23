module.exports.copyProperty = (host, object) => {
    for(var key in object) {
        if (host.hasOwnProperty(key)) {
            host[key] = object[key]
        }
    }
}