import { Request, Response } from 'express';
import {prisma} from '../database';


export default{

    async menu(req:Request, res: Response){
        const products = await prisma.produtos.findMany();
        res.render('produto/produto-menu',{products}); 
    },

    async listProduct(req:Request, res: Response) {
        try{
            const {id_produto} = req.params;
            const productExist = await prisma.produtos.findUnique({ where: { id_produto: Number(id_produto)} });
            if(!productExist){
                return res.json({
                    error: true,
                    message:'Produto nao encontrado',

                });
            }

            return res.json({
                Produtos: productExist,
            });

        } catch(err){
            return res.json({message: err.message});
        }
    },

    async createProduct(req:Request, res: Response){
        try {

            const {nome, valor, estoque_atual, categoria} = req.body;
            const prod = await prisma.produtos.create({
                data: {
                    nome,
                    valor: parseInt(valor),
                    estoque_atual: parseInt(estoque_atual),
                    categoria
                }
            });

            return res.redirect('/produto');
        } catch(err) {
            return res.json({message: err.message});
        }
    },

    async updateProduct(req:Request, res: Response){
        try{
            const {id_produto, nome, valor, estoque_atual,categoria} = req.body;
            const productExist = await prisma.produtos.findUnique({ where: { id_produto: Number(id_produto)} });

            if(!productExist){
                return res.json({
                    error: true,
                    message:'Usuario nao encontrado',

                });
            }
            const client = await prisma.produtos.update( {
                where: {
                    id_produto: Number(req.body.id_produto)
                },
                data:{
                    nome,
                    valor,
                    estoque_atual,
                    categoria
                }
            });

            return res.json({
                error:false,
                client,
                message: `usuario com id ${id_produto} atualizado`
            });
        }catch(err){
            return res.json({message: err.message});
        }
    },

    createPage(req:Request, res: Response){
        res.render('produto/produto-create'); 
    },

    
};