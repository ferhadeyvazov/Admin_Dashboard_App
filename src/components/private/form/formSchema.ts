import {z} from 'zod'

export const formSchema = z.object({
    firstName: z.string()
    .min(2,{message:"Name is required"})
    .max(20, {message:"Please enter your name correctly"})
    .nonempty({message: "Name is required"}),

    lastName: z.string()
    .min(2,{message:"Last Name is required"})
    .max(20, {message:"Please enter your lastname correctly"})
    .nonempty({message: "Lastname is required"}),

    email: z.string().email({message: "Email is required"}),

    contactNumber: z.string().min(10,{message:"Please enter your number correctly"})
    .max(10,{message:"Please enter your number correctly"}),
    
    address1: z.string().min(2,{message:"Address is required"}).max(50).nonempty(),
}).required()