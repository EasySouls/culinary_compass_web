import { getServerSession } from "next-auth";
import React from "react";
import { config } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession(config);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/dashboard");
  }

  return (
    <section>
      <p>Hello {session?.user?.name}!</p>
    </section>
  );
};

export default Dashboard;
