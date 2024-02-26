"use client";

import { useEffect, useState } from "react";
import { ProModal } from "./pro-model";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // solving the hydration error
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ProModal />
    </>
  );
};