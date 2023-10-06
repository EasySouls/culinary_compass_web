"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function updateQuery(data: FormData) {
  const query = data.get("query");
  //const type = data.get("type");
  const type = "recipes";

  // TODO Send data to analytics
  const target =
    process.env.NODE_ENV == "production"
      ? "https://culinarycompass.vercel.app"
      : "http://localhost:3000";
  await fetch(`${target}/api/analytics`, {
    method: "POST",
    headers: {
      "Conent-Type": "application/json",
    },
    body: JSON.stringify({
      type: type,
      query: query,
    }),
  });

  revalidateTag("recipes");
  redirect(`/search/${type}/${query}`);
}
