"use client";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logoutOperation } from "@/store/features/user/userProfileSlice";

export const Logout = () => {
  // const [loading, setLoading] = useState(false);
  const loading = useAppSelector(state=>state.user.loading)

  const dispatch = useAppDispatch();
  return (
    <form
      action={async () => {
        try {
         
          dispatch(logoutOperation());
        } catch (error) {
          console.log(error);
        } 
      }}
    >
      {loading ? (
        "Loading..."
      ) : (
        <button
          className={loading ? "text-[#656E81]" : "text-xs"}
          type="submit"
          disabled={loading}
        >
          Вийти із аккаунта
        </button>
      )}
    </form>
  );
};
