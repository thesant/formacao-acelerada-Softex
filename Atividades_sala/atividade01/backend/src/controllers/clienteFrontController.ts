import { Request, Response } from 'express';

export const cliente = (req:Request,res:Response) => {
   
    res.render('cliente'); 
};