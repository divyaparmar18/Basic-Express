const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('Hello World')
})

app.get('/about-us',(req,res)=>{
    // res.status(200).json({user:'shyan',bal:'2000',id : '123ght'})
    // res.status(404).json({error:'sometihng went wrong'})
    res.status(500).json({error:'sometihng went wrong'})
})

app.get('/Contacts',(req,res)=>{
    res.send('<h1> This is your contact page </h1>')
})

app.get('/Services',(req,res)=>{
    res.send('<h1><ul><li>video recording</li><li>go to the gym</li><li> cook food</li></ul></h1>')
})

app.get('/ab*cd',(req,res)=>{
    res.send('<h1> I an a regex page </h1>')
})

app.get('/user/:id/status/:status_id',(req,res)=>{
  res.send(req.params)
})

app.get('/flights/:from-:to',(req,res)=>{
    res.send(req.params)
})

app.post('/login',(req,res)=>{
    res.send('login success')
})

app.delete('/delete',(req,res)=>{
    res.send('delete sucess')
})

app.listen(3000,()=>{
    console.log(`your server is running at port 3000...`)
})

