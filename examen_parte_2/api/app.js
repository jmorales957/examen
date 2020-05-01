const express = require('express');
const app = express();
const cors = require('cors')

require('./database/database')

app.use(cors())
app.use(express.json());

const routes = require('./routes/index.routes');
app.use('/api',routes);

app.listen(3000, ()=> {console.log('arranca en el puerto 3000')})