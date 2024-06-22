import DesignConfigurator from "@/components/DesignConfigurator";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface DesignPageProps {
  searchParams: { id: string | undefined };
}

const DesignPage = async ({ searchParams: { id } }: DesignPageProps) => {
  if (!id || typeof id !== "string") return notFound();

  const configuration = await db.configuration.findUnique({ where: { id } });

  if (!configuration) return notFound();

  const { imageUrl, width, height } = configuration;

  return (
    <DesignConfigurator
      configId={configuration.id}
      imageUrl={imageUrl}
      imageDimentions={{ width, height }}
    />
  );
};

export default DesignPage;
