import  Express  from 'express';
import bodyParser from 'body-parser';

import router from './router/routerClient';
import 'dotenv/config';
import path from 'path';

const app = Express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(Express.json());
app.use(router);

const getDirname = () => {
    const { cwd } = process;
    return cwd();
};
const dirname = getDirname();

app.set('views', path.resolve(dirname, 'src','views'));//caminho absoluto da pasta view
app.set('view engine', 'ejs');// engine
app.use(Express.static(path.resolve(dirname,'public'))); //lida com os arquivos estaticos


app.listen(process.env.PORT,()=>{
    console.log(`
    Node version 20.10.0,
    Starting development server at http://127.0.0.1:3300/
    Quit the server with CONTROL-C.
    `);
});