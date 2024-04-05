import * as z from 'zod';

export const SignupValidation = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters long').max(30, 'Name must be at most 30 characters long'),
    username: z.string().min(3, 'Username must be at least 3 characters long').max(20, 'Username must be at most 20 characters long'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long').max(20, 'Password must be at most 20 characters long'),
})

export const SigninValidation = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long').max(20, 'Password must be at most 20 characters long'),
})

export const PostValidation = z.object({
    caption: z.string().min(3, 'Caption must be at least 3 characters long').max(100, 'Caption must be at most 100 characters long'),
    file: z.custom<File[]>(),
    location: z.string().min(3).max(100),
    tags: z.string()
})