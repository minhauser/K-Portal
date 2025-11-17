import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const books = [
    {
      title: 'Essential Korean Vocabulary',
      description: 'Comprehensive vocabulary book for beginners',
      category: 'vocabulary',
      driveUrl: 'https://drive.google.com/file/d/example1/view',
    },
    {
      title: 'Korean Vocabulary Builder',
      description: 'Intermediate level vocabulary practice',
      category: 'vocabulary',
      driveUrl: 'https://drive.google.com/file/d/example2/view',
    },
    {
      title: 'Advanced Korean Words',
      description: 'Advanced vocabulary for TOPIK preparation',
      category: 'vocabulary',
      driveUrl: 'https://drive.google.com/file/d/example3/view',
    },
    {
      title: 'Korean Grammar in Use',
      description: 'Complete grammar guide for Korean learners',
      category: 'grammar',
      driveUrl: 'https://drive.google.com/file/d/example4/view',
    },
    {
      title: 'Essential Korean Grammar',
      description: 'Fundamental grammar rules and examples',
      category: 'grammar',
      driveUrl: 'https://drive.google.com/file/d/example5/view',
    },
    {
      title: 'Advanced Korean Grammar',
      description: 'Complex grammar structures explained',
      category: 'grammar',
      driveUrl: 'https://drive.google.com/file/d/example6/view',
    },
    {
      title: 'TOPIK I Practice Tests',
      description: 'Complete practice tests for TOPIK Level 1-2',
      category: 'topik',
      driveUrl: 'https://drive.google.com/file/d/example7/view',
    },
    {
      title: 'TOPIK II Preparation',
      description: 'Comprehensive guide for TOPIK Level 3-6',
      category: 'topik',
      driveUrl: 'https://drive.google.com/file/d/example8/view',
    },
    {
      title: 'TOPIK Vocabulary & Grammar',
      description: 'Essential vocabulary and grammar for TOPIK',
      category: 'topik',
      driveUrl: 'https://drive.google.com/file/d/example9/view',
    },
    {
      title: 'Korean Writing Practice',
      description: 'Step-by-step guide to Korean writing',
      category: 'writing',
      driveUrl: 'https://drive.google.com/file/d/example10/view',
    },
    {
      title: 'Academic Writing in Korean',
      description: 'Advanced writing techniques and examples',
      category: 'writing',
      driveUrl: 'https://drive.google.com/file/d/example11/view',
    },
    {
      title: 'Business Writing in Korean',
      description: 'Professional Korean writing skills',
      category: 'writing',
      driveUrl: 'https://drive.google.com/file/d/example12/view',
    },
    {
      title: '2000 Essential Korean Words ( Intermediate )',
      description: 'Comprehensive intermediate level vocabulary book with 2000 essential Korean words',
      category: 'vocabulary',
      driveUrl: 'https://drive.google.com/file/d/17Vp2Ra0L3HCs4eZr6NNBCGCnLTGBV5ed/view?usp=sharing',
    },
  ];

  for (const book of books) {
    await prisma.book.upsert({
      where: { driveUrl: book.driveUrl },
      update: book,
      create: book,
    });
  }

  console.log('Seeded books successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

