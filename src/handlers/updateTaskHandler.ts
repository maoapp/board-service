
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function updateTaskHandler(req: Request, res: Response) {
  try {
    const taskId = parseInt(req.params.taskId);
    const { title, content, status } = req.body;

    const updatedTask = await prisma.task.update({
      where: {
        id: taskId
      },
      data: {
        title,
        content,
        status
      }
    });
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
