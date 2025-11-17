import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Check if DATABASE_URL is available
    if (!process.env.DATABASE_URL) {
      return NextResponse.json([]);
    }

    const books = await prisma.book.findMany({
      orderBy: {
        uploadedAt: 'desc',
      },
    });

    const formattedBooks = books.map((book) => ({
      id: book.id,
      title: book.title,
      description: book.description,
      category: book.category,
      filename: book.filename,
      driveUrl: book.driveUrl,
    }));

    return NextResponse.json(formattedBooks);
  } catch (error) {
    console.error('Error fetching books:', error);
    // Return empty array instead of error during build
    if (process.env.NODE_ENV === 'production' && !process.env.DATABASE_URL) {
      return NextResponse.json([]);
    }
    return NextResponse.json({ error: 'Failed to fetch books' }, { status: 500 });
  }
}
