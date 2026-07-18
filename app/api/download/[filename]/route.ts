import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await params;

    // Security sanitization to prevent path traversal attacks
    const safeFilename = path.basename(filename);

    // List of allowed files to download
    const allowedFiles = [
      '001-complete-restaurant-pos-guide.md',
      '002-restaurant-pos-vs-cash-register.md',
      '003-how-restaurant-pos-reduces-billing-mistakes.md',
      '004-restaurant-inventory-management-guide.md',
      '005-qr-ordering-complete-guide.md',
      '006-kitchen-display-system-guide.md',
      '007-restaurant-table-management.md',
      '008-restaurant-menu-management.md',
      '009-restaurant-reporting-and-analytics.md',
      '010-restaurant-staff-management.md',
      'chishty-restaurant-pos-guides.zip'
    ];

    if (!allowedFiles.includes(safeFilename)) {
      return NextResponse.json({ error: 'File access denied' }, { status: 403 });
    }

    const filePath = path.join(process.cwd(), safeFilename);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    const fileContent = fs.readFileSync(filePath);
    const contentType = safeFilename.endsWith('.zip') 
      ? 'application/zip' 
      : 'text/markdown; charset=utf-8';

    return new NextResponse(fileContent, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${safeFilename}"`,
      },
    });
  } catch (error) {
    console.error('Error downloading file:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
