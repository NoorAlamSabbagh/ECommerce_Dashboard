const express = require('express');

const app = express();

app.get("/", (req,res)=>{
    app.send("app is working")
});

app.listen(5000)