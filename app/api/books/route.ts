import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
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
      driveUrl: book.driveUrl,
    }));

    return NextResponse.json(formattedBooks);
  } catch (error) {
    console.error('Error fetching books:', error);
    return NextResponse.json({ error: 'Failed to fetch books' }, { status: 500 });
  }
}
