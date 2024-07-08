"use client";

import { OrderStatus } from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { changeOrderStatus } from "@/app/dashboard/actions";
import { useRouter } from "next/navigation";
import { startTransition, useOptimistic } from "react";
import { toast } from "./ui/use-toast";

interface StatusDropdownProps {
  id: string;
  orderStatus: OrderStatus;
}

const LABEL_MAP: Record<keyof typeof OrderStatus, string> = {
  awaiting_shipment: "Awaiting Shipment",
  fulfilled: "Fulfilled",
  shipped: "Shipped",
};

const StatusDropdown = ({ id, orderStatus }: StatusDropdownProps) => {
  const router = useRouter();
  const [optimisticOrderStatus, changeOptimisticOrderStatus] = useOptimistic(
    orderStatus,
    (_, newState) => newState as OrderStatus,
  );
  const { mutate, isPending } = useMutation({
    mutationKey: ["change-order-status"],
    mutationFn: changeOrderStatus,
    onError: () => toast({
      title: "Something went wrong",
      description: "There was an error updating the order status. Please try again.",
      variant: "destructive",
    }),
    onSettled: () => router.refresh(),
  });

  const handleStatusChange = (status: OrderStatus) =>
    startTransition(() => {
      changeOptimisticOrderStatus(status);
      mutate({ id, newStatus: status as OrderStatus });
    });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          disabled={isPending}
          variant="outline"
          className="flex w-52 items-center justify-between"
        >
          {LABEL_MAP[optimisticOrderStatus]}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[999999] my-1 overflow-hidden rounded-md border border-zinc-200 bg-white p-0 shadow-md">
        {Object.keys(LABEL_MAP).map((status) => (
          <DropdownMenuItem
            key={status}
            className={cn(
              "flex cursor-pointer items-center gap-1 rounded-none p-2.5 text-sm hover:bg-zinc-100",
              { "bg-zinc-100": optimisticOrderStatus === status },
            )}
            onClick={() => handleStatusChange(status as OrderStatus)}
          >
            <Check
              className={cn(
                "mr-2 h-4 w-4 text-primary",
                optimisticOrderStatus === status ? "opacity-100" : "opacity-0",
              )}
            />
            {LABEL_MAP[status as OrderStatus]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StatusDropdown;
