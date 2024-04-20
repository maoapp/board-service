// taskHandler.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createTaskHandler(req: Request, res: Response) {
  try {
    const userId = parseInt(req.params.userId);
    const { title, content, status } = req.body;
    const task = await prisma.task.create({
      data: {
        title,
        content,
        status,
        userId
      }
    });

    console.log("task", task)

    res.status(201).json(task);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
