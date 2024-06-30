const express = require('express');
const router = express.Router();
const { createTask, getAllTask, getTask, deleteTask, updateTask } = require('./controllers/taskController');

router.route("/")
  .get(getAllTask)
  .post(createTask);

router.route("/:taskId")
  .get(getTask)
  .delete(deleteTask)
  .put(updateTask);

// // Create a new Task
// router.post('/', createTask);

// // Read all tasks
// router.get('/', getAllTask);

// // Read a task
// router.get('/:taskId', getTask);

// // Delete a task
// router.delete('/:taskId', deleteTask);

// // Update a task
// router.put('/:taskId', updateTask);

module.exports = router;