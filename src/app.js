const express = require('express');
const bodyParser = require('body-parser');

const myErrorLogger = require('./utilities/ErrorLogger');
const myRequestLogger = require('./utilities/RequestLogger');
const userRouter = require('./routes/userRouter');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(myRequestLogger);

app.use('/user', userRouter);

app.use(myErrorLogger);

app.listen(5002);
console.log("Server listening in port 5002 ");

module.exports = app;