"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { ReactPortal } from "./ReactPortal/ReactPortal";

export const BaseModal = ({ onShow = true, children }) => {
  const router = useRouter();
  const modalContainerRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (!onShow) return;

    const bodyScroll = (disable) => {
      document.body.style.overflow = disable ? "hidden" : "auto";
    };

    if (onShow) {
      bodyScroll(true);
    }

    const handleEsc = (e) => {
      if (e.code === "Escape") {
        router.back();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      bodyScroll(false);
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onShow]);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <div
          onClick={router.back}
          ref={backdropRef}
          className="absolute top-0 left-0 z-[1200]"
        >
          <div onClick={(e) => e.stopPropagation()} ref={modalContainerRef}>
            <button type="button" onClick={router.back}>
              Close
            </button>
            {children}
          </div>
        </div>
      </>
    </ReactPortal>
  );
};
