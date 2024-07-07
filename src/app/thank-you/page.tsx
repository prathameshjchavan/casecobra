import ThankYou from "@/components/ThankYou";
import { Suspense } from "react";

const ThankYouPage = () => {
  return (
    <Suspense fallback={<div>Hello World</div>}>
      <ThankYou />
    </Suspense>
  );
};

export default ThankYouPage;
