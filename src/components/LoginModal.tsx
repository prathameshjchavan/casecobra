import type { Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent, DialogHeader } from "./ui/dialog";
import Image from "next/image";

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const LoginModal = ({ isOpen, setIsOpen }: LoginModalProps) => {
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogContent className="absolute z-[999]">
        <DialogHeader>
          <div className="relative mx-auto mb-2 h-24 w-24">
            <Image
              src="/snake-1.png"
              width={633}
              height={824}
              className="object-contain"
              alt="snake"
            />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
