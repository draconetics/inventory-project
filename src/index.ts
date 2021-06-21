import express from 'express';
import cors from 'cors';
// rest of the code remains same

import brandRoutes from './routes/brand.route';
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.use(brandRoutes);

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