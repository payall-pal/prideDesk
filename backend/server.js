console.log("Server file is running")
import express from 'express'
import nodemailer from "nodemailer"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("Server working")
})

app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body
    
    
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.APP_PASSWORD,
            }
        })
        const mailOptions = {
            from: email,
            to: process.env.EMAIL,
            subject: `New message from ${name}`,
            text: `Email : ${email}\nMessage: ${message}`,
        }
        await transporter.sendMail(mailOptions)
        res.status(200).json({ success: true, message: "Email sent successfully" })
    }
    catch (error) {
        res.status(500).json({ success: false, error: "Error sending email" })
    }
})

app.listen(5001, () => {
    console.log("server running on port 5001")
})