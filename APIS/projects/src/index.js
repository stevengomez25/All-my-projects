const express = require('express');
const app = express();
const morgan = require('morgan');

//middleware

app.use(morgan('dev'));

app.listen(3000,()=>{
    console.log(`server on port ${3000}`)
});