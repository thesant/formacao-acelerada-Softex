import { Request, Response } from 'express';
import {prisma} from '../database';

export const home = async (req:Request,res:Response) => {
    const users = await prisma.cliente.findMany();
    res.render('index',{users}); 
};