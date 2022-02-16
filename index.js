const express = require('express');
const app = express();
const route = require('./routes/index')
const morgan = require('morgan');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})

app.use(express.json());

app.use(morgan('tiny'));

app.use('/api', route)