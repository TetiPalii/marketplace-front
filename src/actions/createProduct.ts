// "use server"
// import { revalidatePath } from "next/cache";
// import { z } from "zod";

// export async function createProduct(prevState,formData:FormData) {
//     const productSchema = z.object({
//         product: z.string(),
    
      
//     });
//     // console.log('fomdata:', formData)
//     // console.log('prevstate:', prevState)
//     const parse = productSchema.safeParse({
//         product: formData.get("product"),
//     });
//     console.log(parse.data)
//     const data = parse.data;
//     return data
// }