import { Router } from "express";
// IMPORTO EL MODELO TASK
import Task from "../models/Task";
import {
  renderTask,
  createTask,
  renderTaskEdit,
  deleteTask,
  editTask,
  toggleDone,
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTask);
router.get("/task/:id/edit", renderTaskEdit);
router.post("/tasks/add", createTask);
// LE COLOCAMOS UN PARAMETRO EN LA RUTA
router.post("/task/:id/edit", editTask);
router.get("/toggleDone/:id", toggleDone);
router.get("/delete/:id", deleteTask);

// router.get("/toggleDone/:id", toggleDone);

export default router;
