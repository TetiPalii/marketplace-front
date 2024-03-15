"use server";
import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";

export default async function verificationAction(data) {
  const res = await fetch(
    "https://marketplace-5ihn.onrender.com/api/v1/auth/login/code",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );

  const json = await res.json();

  cookies().set("Authorization", json.token, {
    secure: true,
    httpOnly: true,
    expires: Date.now() + 24 * 60 * 60 * 1000 * 3,
    path: "/",
    sameSite: "strict",
  });

  if (res.ok) {
    redirect("/");
  } else {
    console.log(json.error);
  }
}
