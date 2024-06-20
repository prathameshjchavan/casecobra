import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ReactNode } from "react";

interface PropsProps {
  children: ReactNode;
}

const LayoutPage = ({ children }: PropsProps) => {
  return (
    <MaxWidthWrapper className="flex flex-1 flex-col">
      {children}
    </MaxWidthWrapper>
  );
};

export default LayoutPage;
