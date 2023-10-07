import connectDB from "@/lib/connectDB";
import Recipe from "@/model/Recipe";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const recipe = await req.json();

  try {
    await connectDB();
    await Recipe.create({});

    return NextResponse.json({
      msg: ["Recipe uploaded successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(e);
      }

      return NextResponse.json({
        msg: errorList,
      });
    } else {
      return NextResponse.json(error);
    }
  }
}
