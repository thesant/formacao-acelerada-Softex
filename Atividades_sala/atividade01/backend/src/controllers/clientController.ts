import { Request, Response } from 'express';
import {prisma} from '../database';

//
export default{
    async createClient(req:Request, res: Response) {
        try {

            const {nome, sexo, idade, salario, cidade, estado} = req.body;
            const client = await prisma.cliente.create({
                data: {
                    nome, sexo,  idade: parseInt(idade), salario, cidade, estado
                }
            });

            return res.json({
                error:false,
                message: `Sucesso: Usuario ${nome} cadastrado`
            });
        } catch(err) {
            return res.json({message: err.message});
        }
    },

    async listClient(req:Request, res: Response) {
        try{
            const {id} = req.params;
            const clientExist = await prisma.cliente.findUnique({ where: { id: Number(id)} });
            if(!clientExist){
                return res.json({
                    error: true,
                    message:'Usuario nao encontrado',

                });
            }

            return res.render('user',{
                user: clientExist,
            });

        } catch(err){
            return res.json({message: err.message});
        }
    },
    async listClientByGender(req:Request, res: Response) {
        try{
            const {sexo} = req.params;
            const clientExist = await prisma.cliente.findMany({ 
                where: {
                    sexo: sexo.toLowerCase(), 
                },
            });
            if(!clientExist){
                return res.json({
                    error: true,
                    message:'Usuario nao encontrado',

                });
            }

            return res.json({
                error:false,
                clientExist
            });

        } catch(err){
            return res.json({message: err.message});
        }
    },

    async listSalaryInquiry(req:Request, res: Response) {
        try{
            const {salario} = req.params;
            const clientExist = await prisma.cliente.findMany({ 
                where: {
                    salario: {
                        gt: 3000 
                    },
                  
                },

                orderBy: {
                    salario: 'desc',
                },
            });
            if(!clientExist){
                return res.json({
                    error: true,
                    message:'Usuario nao encontrado',

                });
            }

            return res.json({
                error:false,
                clientExist
            });

        } catch(err){
            return res.json({message: err.message});
        }
    },
    
    async updateClient(req:Request, res: Response) {
        try{
            const {id, nome, sexo, idade, salario, cidade, estado} = req.body;
            const clientExist = await prisma.cliente.findUnique({ where: { id: Number(id)} });

            if(!clientExist){
                return res.json({
                    error: true,
                    message:'Usuario nao encontrado',

                });
            }
            const client = await prisma.cliente.update( {
                where: {
                    id: Number(req.body.id)
                },
                data:{
                    nome, sexo, idade, salario, cidade, estado
                }
            });

            return res.json({
                error:false,
                client,
                message: `usuario com id ${id} atualizado`
            });

        } catch(err){
            return res.json({message: err.message});
        }
    },

    async deleteClient(req:Request, res: Response) {
        try{
            const {id} = req.params;
            const clientExist = await prisma.cliente.findUnique({ where: { id: Number(id)} });

            if(!clientExist){
                return res.json({
                    error: true,
                    message:'Usuario nao encontrado',

                });
            }
            const client = await prisma.cliente.delete( {
                where: {
                    id: Number(req.params.id)
                },
            
            });

            return res.json({
                error:false,
                message: `usuario com id ${id} deletado`
            });

        } catch(err){
            return res.json({message: err.message});
        }
    }
};