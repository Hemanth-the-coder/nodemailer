const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json())
app.set('view engine' , 'ejs');
app.listen(3000 , ()=>{
    console.log("listening to port 3000");
})

app.get('/' , (req ,res)=>{
    res.render('signup');
}) 