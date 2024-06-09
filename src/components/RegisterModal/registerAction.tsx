export async function registerAction(data:{firstName:string,phoneNumber:string
  
}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(
    `${baseUrl}/v1/auth/registration`,
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
