async function RequestHandler(req, res ) {

    try{
        const user = await UserActivation.findbyId(req.UserId);
        const tasks = await Task.findbyId(user.taskId);
        tasks.complete = true;
        await tasks,save();
        res.send("Task Completed");

    }
    catch(e){
        res.send(e);
    }
}