import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    
    // Ensure the slug is a safe path fragment
    const safeSlug = slug.replace(/[^a-zA-Z0-9-_]/g, '');
    const filePath = path.join(process.cwd(), 'lib', 'blog-content', `${safeSlug}.json`);
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Blog content not found' }, { status: 404 });
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return new NextResponse(fileContent, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600, s-maxage=18000',
      },
    });
  } catch (error) {
    console.error('Error serving blog content:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
