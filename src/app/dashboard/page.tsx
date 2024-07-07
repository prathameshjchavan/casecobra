import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";

const DashboardPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const ADMIN_EMAIL = process.env.ADMIN_EMAIL!;

  if (!user || user.email !== ADMIN_EMAIL) return notFound();

  return <div className="flex min-h-screen w-full bg-muted/40">Dashboard</div>;
};

export default DashboardPage;
