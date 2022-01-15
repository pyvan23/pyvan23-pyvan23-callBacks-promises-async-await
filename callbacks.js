//consulta  busque un usuario por id,a ver si existe
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
//ecmascript 5 piramide callback hell,no es mantenible