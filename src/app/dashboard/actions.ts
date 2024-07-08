"use server";

import { db } from "@/db";
import { OrderStatus } from "@prisma/client";

export const changeOrderStatus = async ({
  id,
  newStatus,
}: {
  id: string;
  newStatus: OrderStatus;
}) => {
  try {
    await db.order.update({
      where: {
        id,
      },
      data: {
        status: newStatus,
      },
    });
  } catch (error) {
    throw new Error(
      "There was an error updating the order status. Please try again.",
    );
  }
};
