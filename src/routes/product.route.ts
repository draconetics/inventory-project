import {Router} from 'express'
import {
  getProductList,
  createProduct,
  getProductById,
  updateProduct,
  deleteProductById
} from '../controllers/product.controller';


const router = Router();

router.get('/api/products', getProductList);
router.get('/api/products/:id', getProductById);
router.put('/api/products', updateProduct)
router.post('/api/products', createProduct);
router.delete('/api/products/:id', deleteProductById);
 


export default router;