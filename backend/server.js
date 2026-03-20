import express from 'express'
import nodemailer from "nodemailer"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
    }
})

app.post("/contact", async (req, req) =>{
    const {name, email, message } = req.body

    const mailOptions = {
        from:email,
        to: process.env.EMAIL,
        subject: `New message from ${name}`,
        text: `Email : ${email}\nMessage: ${message}`,

    }

    try{
        await transporter.sendMail(mailOptions)
        req.status(200).json({message: "Email sent successfully" })
    }
    catch (error) {
        res.status(500).json({ error: "Email failed"})
    }
})

app.listen(5000,() => {
    console.log("server running on port 5000")
})