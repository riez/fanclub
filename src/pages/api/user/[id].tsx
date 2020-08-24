import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

export default async (req: Request, res: Response) => {
  const prisma = new PrismaClient()
    try {
      const result = await prisma.users.findOne({
        where: {
          id: Number(req.query.id),
        },
      })
      res.json(result)
    } catch (error) {
        throw Error(error);
    }
}
  