import { Router } from 'express';
import { ActionsController } from '../controllers'

const router = Router();

// CRUD Operations
// Create a new action
router.post('/', ActionsController.create);

// Read all actions
router.get('/', ActionsController.getAll);

// Read action by ID
router.get('/:id', ActionsController.getById);

// Read all tasks from an action by ID
router.get('/:id/tasks', ActionsController.getTasksById);

// Update action by ID
router.put('/:id', ActionsController.update);

// Delete action by ID
router.delete('/:id', ActionsController.delete);

export default router;
