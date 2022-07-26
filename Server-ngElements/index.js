const express = require('express');
const jwt = require('jsonwebtoken');
const app = express()
const PORT = 4500 || process.env.PORT

app.listen(PORT, ()=>{
    console.log('listening at Port'+PORT);
})