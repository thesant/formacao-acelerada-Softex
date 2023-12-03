import  Express  from 'express';
import clientController from './controllers/clientController';

const app = Express();
app.use(Express.json());
const PORT = 3300;

app.get('/', (req,res) => {
    return res.json({status:200});
});

app.post('/createClient', clientController.createClient);
app.get('/listClient/:id', clientController.listClient);
app.put('/updateClient/:id', clientController.updateClient);
app.delete('/deleteClient/:id', clientController.deleteClient);

app.listen(PORT,()=>{
    console.log('servidor ok');
});