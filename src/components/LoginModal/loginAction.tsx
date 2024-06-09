export default async function loginAction(data:{phoneNumber:string}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  
  const res:Response = await fetch(
    `${baseUrl}/v1/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    },
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  } 
  const {phoneNumber}:{phoneNumber:string} = await res.json();
  
  return phoneNumber;


  
}
