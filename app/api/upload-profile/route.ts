import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No file was uploaded." },
        { status: 400 }
      );
    }

    // Convert file to ArrayBuffer and then to Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save the file to the target location: src/assets/images/hamad-chishty.png
    const targetDir = path.join(process.cwd(), "src", "assets", "images");
    
    // Ensure directory exists
    await fs.mkdir(targetDir, { recursive: true });

    const targetPath = path.join(targetDir, "hamad-chishty.png");

    // Write the new image
    await fs.writeFile(targetPath, buffer);

    return NextResponse.json({
      success: true,
      message: "Image successfully uploaded and replaced!",
      filePath: "/src/assets/images/hamad-chishty.png"
    });
  } catch (error: any) {
    console.error("Error saving uploaded image:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to save file." },
      { status: 500 }
    );
  }
}
