import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
app.listen(5000);

app.use(express.json());

app.post('/sendEmail', (req, res) => {
  const email = req.body.email;
  
})