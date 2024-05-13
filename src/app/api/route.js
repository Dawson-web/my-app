import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { log } from "console";
import { NextResponse } from "next/server";
export async function GET(request) {
  const todos = await TodoModel.find({});
  return NextResponse.json({ todos: todos });
}

export async function POST(request) {
  log("post method hit");
  const { title, description } = await request.json();
  await TodoModel.create({ title, description });
  return NextResponse.json({ msg: "Todo is created" });
}

export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");
  await TodoModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Todo is Deleted" });
}

export async function PUT(request) {
  const id = await request.nextUrl.searchParams.get("id");
  await TodoModel.findByIdAndUpdate(id, {
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
