export default async function loginAction(data) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(
    `${baseUrl}/v1/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    },
  );

  // const json = await res.json();

  if (!res.ok) {
    throw new Error(res.status);
  } 
}
