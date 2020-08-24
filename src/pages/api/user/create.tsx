import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

export default async (req: Request, res: Response) => {
  const prisma = new PrismaClient()
    try {
      const {id, ...data} = req.body;
      const result = await prisma.users.create({
        data,
      });
      res.json(result)
    } catch (error) {
        throw Error(error);
    }
}
  