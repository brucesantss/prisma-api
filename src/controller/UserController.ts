import express from 'express';
import { Request, Response } from 'express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
    const { email, name, pass, birthday } = req.body;

    if(!name || !email || !pass || !birthday){
        return res.status(400).json({ msg: 'todos os campos são obrigatórios.' })
    }

    try{
        const user = await prisma.user.create({
            data: {
              email,
              name,
              pass,
              birthday: new Date(birthday)
            },
          })
    }catch(err){
        console.log(err);
        return res.status(500).json({ msg: 'erro no servidor :(' })  
    }
}