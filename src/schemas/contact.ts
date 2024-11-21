import {z} from "zod"

export const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    interest: z.string().min(1, "Please select an interest"),
    message: z.string().min(5, "message must be 5 character long.")
})

export type ContactFormData = z.infer<typeof contactSchema>