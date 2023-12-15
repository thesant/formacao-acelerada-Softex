import { Request, Response } from 'express';
import {prisma} from '../database';


export default{

    async menu(req:Request, res: Response){
        const users = await prisma.cliente.findMany();
        res.render('produto/produto-menu',{users}); 
    }
};