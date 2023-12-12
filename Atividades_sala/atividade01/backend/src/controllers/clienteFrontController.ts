import { Request, Response } from 'express';

export const cliente = (req:Request,res:Response) => {
   
    res.render('cliente'); 
};

export const clienteList = (req:Request,res:Response) => {
   
    if(req.method === 'POST'){
        const {id} = req.body;
        return res.redirect(`/api/v1/list-client/${id}`);
    }
};