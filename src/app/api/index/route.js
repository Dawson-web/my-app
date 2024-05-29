import { ConnectDB } from "@/lib/config/db";
import IndexModel from "@/lib/models/IndexModel";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const page = await IndexModel.find({});
    return NextResponse.json({ page });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function POST(request) {
  const { title, introduction, date } = await request.json();
  await IndexModel.create({ title, introduction, date });
  return NextResponse.json({ msg: "Index is created" });
}

export async function DELETE(request) {
  const title = await request.nextUrl.searchParams.get("title");

  if (title) {
    await IndexModel.deleteOne({ title });
    return NextResponse.json({ msg: "Index is Deleted" });
  } else {
    return NextResponse.json({ error: "Title parameter is missing" });
  }
}

export async function PUT(request) {
  const id = await request.nextUrl.searchParams.get("id");
  await IndexModel.findByIdAndUpdate(id, {
    $set: {
      isCompleted: true,
    },
  });
  return NextResponse.json({ msg: "Index is Updated" });
}
// 连接数据库
const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();
