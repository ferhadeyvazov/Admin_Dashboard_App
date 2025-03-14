import { z } from "zod";
// FORM TYPE
// export type FormProperties = {
//     firstName: string;
//     lastName: string;
//     email: string;
//     contactNumber: string;
//     address1: string;
//     address2?: string;
// }

// SCHEMA
const phoneRegex = /(?:0|994)(?:12|51|50|55|70|77)[^\w]{0,2}[2-9][0-9]{2}[^\w]{0,2}[0-9]{2}[^\w]{0,2}[0-9]{2}/;

export const formSchema = z.object({
    firstName: z.string()
    .nonempty({message: "Name is required"})
    .min(2,{message:"Name is required"})
    .max(20, {message:"Please enter your name correctly"}),

    lastName: z.string()
    .nonempty({message: "Lastname is required"})
    .min(2,{message:"Last Name is required"})
    .max(20, {message:"Please enter your lastname correctly"}),

    email: z.string()
    .nonempty({message: "Email is required"})
    .email({message: "Email is invalid"}),

    contactNumber: z.string()
    .nonempty({message: "Contact Number is required"})
    .min(10,{message:"Please enter your number correctly"})
    .max(10,{message:"Please enter your number correctly"})
    .regex(phoneRegex, {message: "Please enter your number correctly"}),
    
    address1: z.string()
    .nonempty({message: "Address is required"})
    .min(2,{message:"Address is required"})
    .max(50, {message:"Address is too long"}),

    address2: z.string()
    .optional() //Bu optinaldi, PArametr kimi olmasini istemirsense, bu sile bilersen
});

export type UserData = z.infer<typeof formSchema>; //Yaratdigimiz Schema-nin tipini aliriq