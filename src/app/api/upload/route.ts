import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function POST (request: NextRequest) {

  console.log("ENTRY");
  
  // Get the information from the request
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false })
  }

  // Transform file in buffer
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const fileName = Math.round(Math.random() * 1e9).toString() + "_" + file.name;
  const path = join("./public/assets/images/uploads/", fileName);
  await writeFile(path, buffer);
  console.log("open " + path + " to see the uploaded file");

  return NextResponse.json({ success: true, fileName: fileName, path: path });
}