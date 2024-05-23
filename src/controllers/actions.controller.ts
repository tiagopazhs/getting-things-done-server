import { Request, Response } from "express";
import { ActionModel } from "../models";

class ActionsController {

    // CRUD Operations
    // Create a new action
    async create(req: Request, res: Response) {
        try {
            const { name, description, initialDate } = req.body;
            const createdAction = await ActionModel.create({ name, description, initialDate, status: 'Open' });
            res.status(201).json(createdAction);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to create action', error: error });
        }
    }

    // Read all actions
    async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const actions = await ActionModel.findAll();
            return res.status(200).json(actions);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Failed to get actions", error: error });
        }
    }

    // Read action by ID
    async getById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const action = await ActionModel.findByPk(id);
            if (!action) {
                return res.status(404).json({ error: "Action not found" });
            }
            return res.status(200).json(action);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Failed to get action by id", error: error });
        }
    }

    // Update action by ID
    async update(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const [updatedAction] = await ActionModel.update(req.body, {
                where: { id },
            });
            if (!updatedAction) {
                return res.status(404).json({ error: "Action not found" });
            }
            const updatedData = await ActionModel.findByPk(id);
            return res.status(200).json(updatedData);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Failed to update action", error: error });
        }
    }

    // Delete action by ID
    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const deletedAction = await ActionModel.destroy({ where: { id } });
            if (!deletedAction) {
                return res.status(404).json({ message: "Action not found" });
            }
            return res.status(200).json({ message: "Action deleted with success" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Failed to delete action", error: error });
        }
    }
}

export default new ActionsController();
