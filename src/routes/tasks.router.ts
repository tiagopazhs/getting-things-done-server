import { Router } from 'express';
import { TasksController } from '../controllers'

const router = Router();

// CRUD Operations
// Create a new task
router.post('/', TasksController.create);

// Read all tasks
router.get('/', TasksController.getAll);

// Read task by ID
router.get('/:id', TasksController.getById);

// Update task by ID
router.put('/:id', TasksController.update);

// Delete task by ID
router.delete('/:id', TasksController.delete);

export default router;
