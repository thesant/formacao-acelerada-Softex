import { Request, Response } from 'express';
import {prisma} from '../database';

export const pdv = (req:Request,res:Response) => {
   
    res.render('pdv'); 
};

export default{
    async createVenda(req:Request, res: Response) {
        try {

            const {id_cliente, forma_pgm, valor_total} = req.body;
            const venda = await prisma.vendas.create({
                data: {
                    id_cliente, forma_pgm, valor_total
                }
            });

            return res.json({
                error:false,
                message: 'Sucesso: Venda cadastrado'
            });
        } catch(err) {
            return res.json({message: err.message});
        }
    },
};