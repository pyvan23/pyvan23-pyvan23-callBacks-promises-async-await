async function requestHandler(req, res) {
  try {
    const user = await User.findById(req.userId);
    const tasks = await Tasks.findById(user.tasksId);
    await tasks.save();
    res.send("tarea completada");
  } catch (e) {
    res.send(e);
  }
}
