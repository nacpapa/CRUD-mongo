import Task from "../models/Task";

export const renderTask = async (req, res) => {
  // REALIZAMOS UNA CONSULTA Y SE LA PASAMOS AL INDEX PARA QUE LA PUEDA MOSTRAR
  // CON EL LEAN LE DECIMOS QUE YA NO NOS DEVUELVA OBJETOS DE MONGODB, SINO DE JS, PORQUE SINO ES DIFICIL RECOOREROLOS
  const tasks = await Task.find().lean();
  res.render("index", { tasks: tasks });
};

export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const renderTaskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task: task });
  } catch (error) {
    console.log(error.message);
  }
};

export const editTask = async (req, res) => {
  const id = req.params.id;
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/");
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
};

export const toggleDone = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};
