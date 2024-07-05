"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getAuthStatus } from "./actions";

const Page = () => {
  const [configId, setConfigId] = useState<string | null>(null);

  useEffect(() => {
    const configurationId = localStorage.getItem("configurationId");

    if (configurationId) setConfigId(configurationId);
  }, []);

  const { data } = useQuery({
    queryKey: ["auth-callback"],
    queryFn: async () => await getAuthStatus(),
    retry: true,
    retryDelay: 500,
  });

  return <div>page</div>;
};

export default Page;
