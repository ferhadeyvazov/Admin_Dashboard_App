import {z} from "zod"

export const registerSchema = z.object({
    firstName: z.string()
    .nonempty({message: "Ad boş ola bilməz"})
    .min(2,{message: "Ad çox qısadır"})
    .max(15, {message: "Ad çox uzundur"}),
    lastName: z.string()
    .nonempty({message: "Soyad boş ola bilməz"})
    .min(2,{message: "Soyad çox qısadır"})
    .max(15, {message: "Soyad çox uzundur"}),
    email: z.string()
    .nonempty({message: "Email boş ola bilməz"})
    .email({message: "Email düzgün daxil edin"}),
    password: z.string()
    .nonempty({message: "Şifrə boş ola bilməz"})
    .min(3,{message: "Şifrə qısadır"})
    .max(16, {message: "Şifrə uzundur"})
})

export type RegisterType = z.infer<typeof registerSchema>; //Yaratdigimiz Schema-nin tipini aliriq
