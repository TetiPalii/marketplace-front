export default async function registerAction(data) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(
    `${baseUrl}/v1/auth/registration`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    },
  );

  const json = await res.json();

  if (res.ok) {
    // window.location.href = "/verification/?modal=true";
  } else {
    throw new Error(res.status);
  }
}
