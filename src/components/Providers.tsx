"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

const client = new QueryClient();

const Providers = ({ children }: ProviderProps) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default Providers;
