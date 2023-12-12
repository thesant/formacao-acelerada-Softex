import { Request, Response } from 'express';

export const produto = (req:Request,res:Response) => {
   
    res.render('produto'); 
};