import { Router } from 'express';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../controllers/productsController.js';

const router = Router();

router.post('/products/create', addProduct);
router.put('/products/:id/update_quantity/', updateProduct);

router.get('/products/getProducts', getProducts);

router.delete('/products/delete/:id/', deleteProduct);


export default router;