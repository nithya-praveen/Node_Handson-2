const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("This is my home page");
    res.end();
})
app.get('/contact',(req,res)=>{
    res.send("This is my contact us page");
    res.end();
})
app.get("/express",(req,res)=>{
    res.send(`
    <h2>Express :</h2>
     <h3>Express is a node js web application framework that provides broad features for building web and mobile applications.<br/>
      It is used to build a single page, multipage, and hybrid web application.<br/>
      It's a layer built on the top of the Node js that helps manage servers and routes.</h3>
    <pre>
        => Express is basically a frame work for node Js.
        => It will get access from client and give response to client side.
        => It is an third party library we want to install it.
        => which handles all kind of requests(GET,POST,PUT,DELETE)  
    </pre>
    `);
    res.end();
})
app.post('/login',(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    if(username === 'admin' && password === 'admin'){
        res.send('Login Successfully');
    }else{
        res.send('Login Failed');
    }
    
})
app.post('/submit',(req,res)=>{
    res.send("About Post");
    res.end();
})
app.listen(8001,()=>{
    console.log('Application is running on port 8001');
});