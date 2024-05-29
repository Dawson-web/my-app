import { ConnectDB } from "@/lib/config/db";
import PageModel from "@/lib/models/PageModel";
import { NextResponse } from "next/server";

export async function GET(request) {
  const title = request.nextUrl.searchParams.get("title");
  const page = await PageModel.find({ title });
  return NextResponse.json({ page });
}

export async function POST(request) {
  const { title, content, type, date } = await request.json();
  await PageModel.create({ title, content, type, date });
  return NextResponse.json({ msg: "Todo is created" });
}

export async function DELETE(request) {
  const title = await request.nextUrl.searchParams.get("title");
  await PageModel.deleteOne({ title });
  return NextResponse.json({ msg: "Todo is Deleted" });
}

export async function PUT(request) {
  const id = await request.nextUrl.searchParams.get("id");
  await PageModel.findByIdAndUpdate(id, {
    $set: {
      isCompleted: true,
    },
  });
  return NextResponse.json({ msg: "Todo is Updated" });
}

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();
