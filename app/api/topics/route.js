import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, contact, amount, type } = await request.json();
  await connectMongoDB();
  await Topic.create({ name, contact, amount, type });
  return NextResponse.json({ message: "Deal Created" }, { status: 201 });
}

export async function GET(req) {
  await connectMongoDB();

  const url = new URL(req.url);
  const type = url.searchParams.get("type");

  if (!type) {
    return NextResponse.json(
      { error: "Type parameter is required" },
      { status: 400 }
    );
  }
  if (type === "all") {
    const topics = await Topic.find();
    return NextResponse.json({ topics });
  }

  try {
    const topics = await Topic.find({ type: type });
    return NextResponse.json({ topics });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch topics" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deal deleted" }, { status: 200 });
}
