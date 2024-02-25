"use client";

import { useState } from "react";
import { RegisterModal } from "../RegisterModal/RegisterModal";

export const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <header className="bg-darkBlue text-lightPink">
      Header
      <button onClick={() => setModalOpen(true)}>Open</button>
      {isModalOpen && (
        <RegisterModal
          onShow={() => setModalOpen(true)}
          onClose={() => setModalOpen(false)}
        />
      )}
    </header>
  );
};
