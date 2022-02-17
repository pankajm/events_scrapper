const express = require('express');
const app = express();
const route = require('./routes/index')
const morgan = require('morgan');
const logger = require('./startup/logging').logger;
require('./startup/logging').registerGlobalLogging();
require('./startup/database').connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`Server is listening on port ${port}`);
})

app.use(express.json());
app.use(morgan('tiny'));
app.use('/api', route)