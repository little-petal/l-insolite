import { writeFile, unlink } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function POST (request: NextRequest) {  
  // Get the information from the request
  const data = await request.formData();
  const files: File[] | null = data.getAll('files') as unknown as File[];

  if (!files) {
    return NextResponse.json({ success: false })
  }

  const fileNames = await Promise.all(
    files.map((file) => WriteFile(file))
  );

  return NextResponse.json({ success: true, fileNames: fileNames });
};

export async function DELETE (request: NextRequest) {  
  // Get the information from the request
  const data = await request.formData();
  const fileNames: string[] | null = data.getAll('fileNames') as unknown as string[];

  // Delete the file
  if (fileNames) {
    fileNames.forEach(async (fileName) => {    
      const path = join("./public/uploads/", fileName);
      await unlink(path);
    
      });
      return NextResponse.json({ success: true });
  }
  return NextResponse.json({ success: false })

};

async function WriteFile(file: File) {

  // Transform file in buffer
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Write the file
  const fileName = Math.round(Math.random() * 1e9).toString() + "_" + file.name;
  const path = join("./public/uploads/", fileName);
  await writeFile(path, buffer);

  return fileName;
};