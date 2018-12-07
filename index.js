'use strict';

const express = require('express');
const PORT = process.env.PORT || 80;

let app = express();

function getOutput(req){
    let message = process.env.MESSAGE;
    return "<h1>"+message+"</h1>";
}
app.get('/*', function(req, res){
    res.send(getOutput(req));
});

app.listen(PORT, function(err){
    if(err){
        console.log("Unable to listen on PORT "+ PORT);
        process.exit(-1);
    }
    console.log('Server Started on PORT :'+ PORT);
});
