const express = require('express');
const sendMail = require('./mailUtils');
const app = express();
app.use(express.static('public'));
app.use(express.json())
app.set('view engine' , 'ejs');
// console.log(sendMail)
app.listen(3000 , ()=>{
    console.log("listening to port 3000");
})

app.get('/signup' , (req ,res)=>{
    res.render('signup');
}) 

app.get('/confirm' , (req, res)=>{
    res.render('emailconfirm.ejs');
})


app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        console.log("sending email");
        const result = await sendMail(email);
        console.log("email sent")
        res.status(200).json({ data: "sent mail" });
    } catch (err) {
        console.error("Error sending email:", err);
        res.status(500).json({ error: "Error sending mail" });
    }
});