"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("a933e60e-2834-48ff-8d1f-3aa5d36262b4");
  }, []);

  return null;
};
