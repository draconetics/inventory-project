import express from 'express';
import cors from 'cors';
// rest of the code remains same

import brandRoutes from './routes/brand.route';
import productRoutes from './routes/product.route';
import saleRoutes from './routes/sale.route';
import clientRoutes from './routes/client.route';
import { errorHandler } from './middleware/error.middleware';

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.use(productRoutes);
app.use(brandRoutes);
app.use(saleRoutes);
app.use(clientRoutes);
app.use(errorHandler);

const {PORT} = require('./config/portConfig')
const db = require('./config/db')
db.connect()
  .then(() => {
    console.log('database connected..')
    app.listen(PORT, () => {
      console.log(`Listening on http://localhost:${PORT} with typescript`);
    });
  });

module.exports = app;