import { Request, Response } from "express";
import { TaskModel } from "../models";

class TasksController {

    // CRUD Operations
    // Create a new task
    async create(req: Request, res: Response) {
        try {
            const { name, actionId } = req.body;
            const createdTask = await TaskModel.create({ name, actionId, status: 'open' });
            // Todo: Create a validation of existing actions here
            res.status(201).json(createdTask);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to create task', error: error });
        }
    }

    // Read all tasks
    async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const tasks = await TaskModel.findAll();
            return res.status(200).json(tasks);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Failed to get tasks", error: error });
        }
    }

    // Read task by ID
    async getById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const task = await TaskModel.findByPk(id);
            if (!task) {
                return res.status(404).json({ error: "Task not found" });
            }
            return res.status(200).json(task);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Failed to get task by id", error: error });
        }
    }

    // Update task by ID
    async update(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const [updatedTask] = await TaskModel.update(req.body, {
                where: { id },
            });
            if (!updatedTask) {
                return res.status(404).json({ error: "Task not found" });
            }
            const updatedData = await TaskModel.findByPk(id);
            return res.status(200).json(updatedData);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Failed to update task", error: error });
        }
    }

    // Delete task by ID
    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const deletedTask = await TaskModel.destroy({ where: { id } });
            if (!deletedTask) {
                return res.status(404).json({ message: "Task not found" });
            }
            return res.status(200).json({ message: "Task deleted with success" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Failed to delete task", error: error });
        }
    }
}

export default new TasksController();
