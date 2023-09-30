import { NextResponse } from "next/server";
import client from "@/data/mongodb";
import { DATABASE_NAME } from "@/constants";

type Feedback = {
  name?: string;
  email?: string;
  message?: string;
};

const uploadFeedback = async (data: Feedback) => {
  await client.connect();

  const db = client.db(DATABASE_NAME);
  const collection = db.collection("feedbacks");

  const result = await collection.insertOne(data);

  console.log(`A document was inserted with the id: ${result.insertedId}`);
};

export async function POST(request: Request) {
  const data: Feedback = await request.json();
  console.log("data: ", data);

  const { name, email, message } = data;

  // TODO Store this data in MongoDB
  uploadFeedback(data);

  return NextResponse.json({ name, email, message });
}
