function requestHandler(req, res) {
    User.findID(req.userId,function(err, user) {
        if (err) {
            res.send(err);
        } else {
            Tasks.findById(user.userId,function(err,tasks) {
                if (err) {
                    return res.send(err);
                } else {
                    tasks.completed = true;
                    tasks.save(function(err){
                        if (err) {
                            return res.send(err);
                        } else {
                            res.send('Task Completed');
                        }
                    })
                }
            })
        }
    })
}
// La famosa piramide de la muerte