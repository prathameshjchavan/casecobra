"use client";

import { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";

interface DesignPreviewProps {}

const DesignPreview = (props: DesignPreviewProps) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex select-none justify-center overflow-hidden"
    >
      <Confetti
        active={showConfetti}
        config={{ elementCount: 200, spread: 90 }}
      />
    </div>
  );
};

export default DesignPreview;
