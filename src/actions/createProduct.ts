import Cookies from "js-cookie";
import { ScopedMutator } from "swr/dist/_internal";

export async function createProduct(formData: FormData,token:string,mutate:ScopedMutator): Promise<void> {
   
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    console.log(token)

    try {
        const response = await fetch(`${baseUrl}/v1/products/create`, {
            method: "POST",
            headers: { "Authorization": `Bearer ${token}` },
            body: formData,
        });   

        if (!response.ok) {
            throw new Error(response.statusText)
        }
        
        else {
            mutate(`${baseUrl}/v1/products/s/view`)
            const json = await response.json();
            
            return json
            
        }
        
    } catch (error) {
        console.error(error)
    }
    
}