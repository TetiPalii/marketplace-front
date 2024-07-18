import { z } from "zod";

export const productSchema = z.object({
    productName: z
        .string()
        .min(5, {
            message:
                "Назва товару має містити щонайменше 5 символів ",
        })
        .max(100, {
            message:
                "Назва товару має містити не більше 100 символів ",
        }),
    category: z.object({
        label: z.string(),
        value: z.string(),
    }),
    productType: z.string(),
    productPrice: z.string().min(1),
    productDescription: z
        .string()
        .min(5, {
            message:
                "Опис товару має містити щонайменше 5 символів",
        })
        .max(250, {
            message:
                "Опис товару має містити не більше 250 символів",
        }),
    sellerName: z.string().min(3).max(50),
    sellerPhoneNumber: z
        .string()
        .min(13,{message:"Це поле є обовʼязковим"})
        .max(17),
    sellerEmail: z
        .string()
        .email({
            message:
                "Будь-ласка введіть валідний адрес електронної пошти",
        })
        .min(1, "Це поле є обовʼязковим"),
    location: z.string().min(3).max(100),
    files: z
        .array(
            z
                .instanceof(File)
                .refine(
                    (file) =>
                        file.size <=
                        5 * 1024 * 1024,
                    {
                        message:
                            "Размер файла должен быть не более 5MB",
                    }
                )
                .refine(
                    (file) =>
                        [
                            "image/jpeg",
                            "image/png",
                        ].includes(file.type),
                    {
                        message:
                            "Файл должен бути изображением (JPEG/PNG)",
                    }
                )
        )
        .max(
            8,
            "Можна завантажити максимум 8 фото"
        ),
});

export type ProductSchema = z.infer<
    typeof productSchema
>;