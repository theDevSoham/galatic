"use client";

import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import { ChevronUp } from "lucide-react";

const VanishingButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`scroll-to-top-wrapper transition-transform duration-200 ease-in-out ${
        showButton ? "scale-100" : "scale-0"
      }`}
    >
      <Button
        type="icon"
        label={<ChevronUp />}
        predefinedInteraction="scrollToTop"
        link="#"
      />
    </div>
  );
};

export default VanishingButton;
