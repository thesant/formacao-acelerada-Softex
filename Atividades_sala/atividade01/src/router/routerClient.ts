import  express  from 'express';
import clientController from '../controllers/clientController';

const router = express.Router();

router.post('/createClient', clientController.createClient);
router.get('/listClient/:id', clientController.listClient);
router.put('/updateClient/:id', clientController.updateClient);
router.delete('/deleteClient/:id', clientController.deleteClient);

router.get('/listClientByGender/:sexo', clientController.listClientByGender);
router.get('/listSalaryInquiry', clientController.listSalaryInquiry);

export default router;