const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();
let mailTransporter = nodemailer.createTransport(
    {
        service : 'gmail', 
        auth : {
            user : process.env.EMAIL, 
            pass : process.env.PASSWORD
        }
    }
); 

const sendMail = async (to) => {
    maildetails = {
        from : process.env.EMAIL,
        to : to,
        subject : 'Test mail',
        text : 'Hey this is a mail for testing'
    }
    try{
        const res = await mailTransporter.sendMail(maildetails)
        return res;
    }catch(err){
        throw err
    }
}

module.exports = sendMail;