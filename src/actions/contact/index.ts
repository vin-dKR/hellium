'use server'

import nodemailer from 'nodemailer'
import { ContactFormData, contactSchema } from "@/schemas/contact"

export const submitContact = async (data: ContactFormData) => {
    try {
        const validated = contactSchema.parse(data)

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NODE_MAILER_EMAIL,
                pass: process.env.NODE_MAILER_GMAIL_APP_PASSWORD
            }
        })

        await transporter.sendMail({
            from: process.env.NODE_MAILER_EMAIL,
            replyTo: validated.email,
            to: process.env.NODE_MAILER_EMAIL,
            subject: `Hellium AI support: ${validated.interest} by ${validated.name}`,
            html: `
            <h3>Hellium AI: New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${validated.name}</p>
            <p><strong>Email:</strong> ${validated.email}</p>
            <p>Interest:</strong> ${validated.interest}</p>
            <p>Message:</strong> ${validated.message}</p>
            `
        })

        return { sucess: true }
    } catch (e) {
        return {
            success: false, error: 'Failed to send email'
        }
    }
}