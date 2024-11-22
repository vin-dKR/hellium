import interest from "@/constants/contact"
import { z } from "zod"

export const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    interest: z.enum(interest),
    message: z.string().min(5, "message must be 5 character long.")
})

export type ContactFormData = z.infer<typeof contactSchema>