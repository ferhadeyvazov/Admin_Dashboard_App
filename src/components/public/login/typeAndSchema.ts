import { z } from "zod";

// export type LoginType = {
//     username: string;
//     password: string;
// }

export const loginSchema = z.object({
    username: z.string()
    .nonempty({message: "Username boş ola bilmez"})
    .min(2, {message: "Username çox qısadır"})
    .max(20, {message: "Username çox uzundur"}),

    password: z.string()
    .nonempty({message: "Şifrə boş ola bilməz"})
    .min(2, ({message: "Şifrə qısadır"}))
    .max(20, ({message: "Şifrə çox uzundur"}))
})

export type LoginType = z.infer<typeof loginSchema>;