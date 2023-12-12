import  express  from 'express';
import clientController from '../controllers/clientController';
import {home} from '../controllers/homeController';
import { produto } from '../controllers/produtoController';
import { pdv } from '../controllers/pdvController';
import {cliente, clienteList} from '../controllers/clienteFrontController';

const router = express.Router();

router.get('/', home);
router.get('/produto', produto);
router.get('/pdv', pdv);
router.get('/cliente', cliente);
router.post('/clienteList', clienteList);


router.post('/api/v1/create-client', clientController.createClient);
router.get('/api/v1/list-client/:id', clientController.listClient);
router.put('/api/v1/update-client/:id', clientController.updateClient);
router.delete('/api/v1/delete-client/:id', clientController.deleteClient);

router.get('/api/v1/list-client-by-gender/:sexo', clientController.listClientByGender);
router.get('/api/v1/list-salary-inquiry', clientController.listSalaryInquiry);

export default router;