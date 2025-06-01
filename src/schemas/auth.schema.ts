import { ZodType, z } from 'zod'

// user sign-up schema
export type UserRegistrationProps = {
    type: string
    fullname: string
    email: string
    password: string
    confirmPassword: string
    otp: string
}

export const UserRegistrationSchema: ZodType<UserRegistrationProps> = z
    .object({
        type: z.string().min(1),
        fullname: z
            .string()
            .min(4, { message: 'your full name must be atleast 4 characters long' }),
        email: z.string().email({ message: 'Incorrect email format' }),
        password: z
            .string()
            .min(8, { message: 'Your password must be atleast 8 characters long' })
            .max(64, {
                message: 'Your password can not be longer then 64 characters long',
            })
            .refine(
                (value) =>
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,64}$/.test(value ?? ''),
                {
                  message:
                    'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character',
                }
              ),
        confirmPassword: z.string(),
        otp: z.string().min(6, { message: 'You must enter a 6 digit code' }),
    })
    .refine((schema) => schema.password === schema.confirmPassword, {
        message: 'passwords do not match',
        path: ['confirmPassword'],
    })


// user log-in schema
export type UserLoginProps = {
    email: string
    password: string
}


export const UserLoginSchema: ZodType<UserLoginProps> = z.object({
    email: z.string().email({ message: 'You did not enter a valid email' }),
    password: z
        .string()
        .min(8, { message: 'Your password must be atleast 8 characters long' })
        .max(64, {
            message: 'Your password can not be longer then 64 characters long',
        }),
})



// user pass-change schema
export type ChangePasswordProps = {
    password: string
    confirmPassword: string
}

export const ChangePasswordSchema: ZodType<ChangePasswordProps> = z
    .object({
        password: z
            .string()
            .min(8, { message: 'Your password must be atleast 8 characters long' })
            .max(64, {
                message: 'Your password can not be longer then 64 characters long',
            })
            .refine(
                (value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ''),
                'password should contain only alphabets and numbers'
            ),
        confirmPassword: z.string(),
    })
    .refine((schema) => schema.password === schema.confirmPassword, {
        message: 'passwords do not match',
        path: ['confirmPassword'],
    })
