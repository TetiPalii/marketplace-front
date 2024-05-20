"use server"

import { cookies } from "next/headers";

export async function createProduct(formData: FormData): Promise<void> {
    console.log(formData)

    const baseUrl = process.env.BASE_URL;
   
    const token = cookies().get('Authorization')?.value;

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
            const json = await response.json();
            console.log(json);
            return json
        }
        
    } catch (error) {
        console.error(error)
    }
    
}