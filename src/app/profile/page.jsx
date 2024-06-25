'use client'
import { Wrapper } from "@/components/Wrapper/Wrapper";
import { useAppSelector } from "@/store/hooks";
import { useEffect } from "react";

export default function Profile() {
  const user = useAppSelector(state=>state.user.user)
  useEffect(() => {
console.log(user)
    
  },[user])
  return <Wrapper>
    <h1>
      {user && user.firstName}
    </h1>
  </Wrapper>
}
