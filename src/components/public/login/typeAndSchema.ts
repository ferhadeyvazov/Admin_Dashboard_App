import { z } from "zod";

// export type LoginType = {
//     username: string;
//     password: string;
// }

export const loginSchema = z.object({
    email: z.string()
    .nonempty({message: "email boş ola bilmez"})
    .min(2, {message: "email çox qısadır"})
    .max(20, {message: "email çox uzundur"})
    .email({message: "Email düzgün daxil edin"}),

    password: z.string()
    .nonempty({message: "Şifrə boş ola bilməz"})
    .min(2, ({message: "Şifrə qısadır"}))
    .max(20, ({message: "Şifrə çox uzundur"}))
})

export type LoginType = z.infer<typeof loginSchema>;