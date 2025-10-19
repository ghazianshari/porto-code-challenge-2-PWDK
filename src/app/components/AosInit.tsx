"use client";

import { useEffect } from "react";
import AOS from "aos";

const AosInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return null;
};

export default AosInit;
