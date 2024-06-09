export default async function verificationAction(fulfilledData:{inputCode:string, phoneNumber:string}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

 try {
  const res:Response = await fetch(
    `${baseUrl}/v1/auth/login/code`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fulfilledData),
    },
  );
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  const {token}:{token:string} = await res.json();

   return token;

 } catch (error) {
  console.error(error.message)
 }
} 

