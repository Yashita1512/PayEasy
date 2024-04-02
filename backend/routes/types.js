import zod from "zod"

export const userSignupSchema = zod.object({
    firstName : zod.string(),
    lastName: zod.string(),
    username: zod.string().email(),
    password: zod.string()
})

export const userSigninSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

export const userUpdateSchema = zod.object({
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
    password: zod.string().optional()
})