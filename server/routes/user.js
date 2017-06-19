router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
router.get('/users/:userid',function(req,res){
    var userid = req.params.userid;
    var user = new User();
    user.list(userid,function(err,result){
        if(err){
            res.send('not found');
        }
        res.send(result.length === 1 ? result[0]:result);
    });
});

