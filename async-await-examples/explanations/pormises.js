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
// La famosa piramide de la muerte ^^^^


function RequestHandler(req, res) {
    User.findbyId(req.userId)
    .then(function(user) {
        return Tasks.findById(user.taskId)
    })
    .then(function(task) {
        task.completed = true;
        task.save();
    })
    .then(function(){
        res.send('Task Completed');
    })
    .catch(function(errors) {
        res.send(errors)
    })
}

// Utilizando Promesas queda asi ^^^^