import { Request, Response } from "express";
import { ActionModel } from "../models";

class ActionsController {

    // CRUD Operations
    // Create a new action
    async create(req: Request, res: Response): Promise<Response> {
        return res.status(200).json({ message: 'to do' });
    }

    // Read all actions
    async getAll(req: Request, res: Response): Promise<Response> {
        return res.status(200).json({ message: 'to do' });
    }

    // Read action by ID
    async getById(req: Request, res: Response): Promise<Response> {
        return res.status(200).json({ message: 'to do' });
    }

    // Update action by ID
    async update(req: Request, res: Response): Promise<Response> {
        return res.status(200).json({ message: 'to do' });
    }

    // Delete action by ID
    async delete(req: Request, res: Response): Promise<Response> {
        return res.status(200).json({ message: 'to do' });
    }
}

export default new ActionsController();
