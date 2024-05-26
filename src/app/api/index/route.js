import IndexModel from "@/lib/models/IndexModel";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

export async function GET(request) {
  const page = await IndexModel.find({});
  return NextResponse.json({ page });
}

export async function POST(request) {
  const { title, introduction, date } = await request.json();
  await IndexModel.create({ title, introduction, date });
  return NextResponse.json({ msg: "Index is created" });
}

export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");
  await TodoModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Index is Deleted" });
}

export async function PUT(request) {
  const id = await request.nextUrl.searchParams.get("id");
  await TodoModel.findByIdAndUpdate(id, {
    $set: {
      isCompleted: true,
    },
  });
  return NextResponse.json({ msg: "Index is Updated" });
}
// // 连接数据库
// const LoadDB = async () => {
//   await ConnectDB();
// };

// LoadDB();
