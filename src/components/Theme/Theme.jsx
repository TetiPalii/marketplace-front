"use client";
import { useState } from "react";

export const Theme = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <ul>
      <li className="h-[40px] w-full bg-gradient-to-r from-[#161C2A] via-[#990078] via-50% to-[#161C2A] to-100% ...">
        <label className="flex gap-6 pl-[40px]  py-2 w-full h-[98%] bg-darkBlue">
          <input
            checked={isChecked}
            type="checkbox"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          Хлопчик
        </label>
      </li>
      <li className="h-[40px] w-full bg-gradient-to-r from-[#161C2A] via-[#990078] via-50% to-[#161C2A] to-100% ...">
        <label className="flex gap-6 pl-[40px]  py-2 w-full h-[98%] bg-darkBlue">
          <input
            type="checkbox"
            checked={!isChecked}
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          Дівчинка
        </label>
      </li>
    </ul>
  );
};
