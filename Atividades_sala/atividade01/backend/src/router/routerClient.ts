import  express  from 'express';
import clientController from '../controllers/clientController';
import produtoController from '../controllers/produtoController';
import pdvControllers from '../controllers/pdvController';
import {home} from '../controllers/homeController';
import { pdv } from '../controllers/pdvController';

const router = express.Router();

router.get('/', home);
router.get('/produto', produtoController.menu);
router.get('/api/v1/create-product', produtoController.createPage);
router.post('/api/v1/create-product', produtoController.createProduct);
router.get('/api/v1/list-product/:id_produto', produtoController.listProduct);

router.post('',);

router.get('/pdv', pdv);
router.post('/api/v1/create-venda', pdvControllers.createVenda);




router.post('/api/v1/create-client', clientController.createClient);
router.get('/api/v1/create-client', clientController.createPage);
router.get('/api/v1/list-client/:id', clientController.listClient);
router.post('/api/v1/update-client/:id', clientController.updateClient);
router.get('/api/v1/update-client/:id', clientController.updatePage);
router.post('/api/v1/delete-client/:id', clientController.deleteClient);

router.get('/api/v1/list-client-by-gender/:sexo', clientController.listClientByGender);
router.get('/api/v1/list-salary-inquiry', clientController.listSalaryInquiry);

export default router;