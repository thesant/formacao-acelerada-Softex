import  Express  from 'express';
import router from './router/routerClient';
import 'dotenv/config';


const app = Express();

app.use(Express.json());
app.use(router);


app.listen(process.env.PORT,()=>{
    console.log('servidor ok');
});