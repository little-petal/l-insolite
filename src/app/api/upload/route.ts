import { writeFile, unlink } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function POST (request: NextRequest) {  
  // Get the information from the request
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false })
  }

  // Transform file in buffer
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Write the file
  const fileName = Math.round(Math.random() * 1e9).toString() + "_" + file.name;
  const path = join("./public/uploads/", fileName);
  await writeFile(path, buffer);

  return NextResponse.json({ success: true, fileName: fileName, path: path });
};

export async function DELETE (request: NextRequest) {  
  // Get the information from the request
  const data = await request.json();

  // Delete the file
  const path = join("./public/uploads/", data.fileName);
  await unlink(path);

  return NextResponse.json({ success: true });
};