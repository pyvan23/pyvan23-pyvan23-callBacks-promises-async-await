function requestHandler(req, res) {
  User.findById(req.UserId, function (err, user) {
    if (err) {
      res.send(err);
    } else {
      //si existe actualizo las tareas
      Tasks.findById(req.taskId, function () {
        if (err) {
          res.send(err);
        } else {
          task.completed = true;
          task.save(function (err) {
            if (err) {
              return res.send(err);
            } else {
              res.send("task completed");
            }
          });
        }
      });
    }
  });
}
//promises
function requestHandler(req, res) {
  User.findById(req.userId)
    .then(function (user) {
      return task.findById(user.tasksId);
    })
    .then(function (tasks) {
      tasks.completed = true;
      return tasks.save();
    })
    .catch(function (errors) {
      res.send(errors);
    });
}
