import DesignPreview from "@/components/DesignPreview";
import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";

interface PreviewPageProps {
  searchParams: {
    id: string | undefined;
  };
}

const PreviewPage = async ({ searchParams }: PreviewPageProps) => {
  const { id } = searchParams;

  if (!id || typeof id !== "string") return notFound();

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) return notFound();

  return <DesignPreview />;
};

export default PreviewPage;
