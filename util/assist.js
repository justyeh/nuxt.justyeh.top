function formatDate(timestamp) {
    let date = new Date(timestamp);
    return date.getYear() + "-" + date.getMonth() + 1 + "-" + date.getDate() + "   " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}     

export {
    formatDate
}