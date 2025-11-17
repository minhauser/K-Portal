'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { Eye, Download, Book, FileText, Loader2 } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  description: string;
  category: string;
  filename?: string | null;
  driveUrl?: string | null;
}

const categories = [
  { id: 'all', nameKey: 'all' },
  { id: 'vocabulary', nameKey: 'vocabulary' },
  { id: 'grammar', nameKey: 'grammar' },
  { id: 'topik', nameKey: 'topik' },
  { id: 'writing', nameKey: 'writing' },
];

export function LibraryContent() {
  const t = useTranslations('LibraryPage');
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('/api/books');
      if (response.ok) {
        const data = await response.json();
        setBooks(data);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleView = (book: Book) => {
    if (book.driveUrl) {
      // Convert Google Drive share link to viewer link
      const fileId = book.driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/)?.[1];
      if (fileId) {
        const viewerUrl = `https://drive.google.com/file/d/${fileId}/preview`;
        window.open(viewerUrl, '_blank');
      } else {
        window.open(book.driveUrl, '_blank');
      }
    } else if (book.filename) {
      // Open local file in new tab
      window.open(`/api/books/download/${book.filename}`, '_blank');
    }
  };

  const handleDownload = (book: Book) => {
    if (book.driveUrl) {
      // Convert Google Drive share link to download link
      const fileId = book.driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/)?.[1];
      if (fileId) {
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
        window.open(downloadUrl, '_blank');
      } else {
        window.open(book.driveUrl, '_blank');
      }
    } else if (book.filename) {
      // Download local file
      window.open(`/api/books/download/${book.filename}`, '_blank');
    }
  };

  const filteredBooks = selectedCategory === 'all' 
    ? books 
    : books.filter(book => book.category === selectedCategory);

  return (
    <div>
      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            {t(`categories.${category.nameKey}`)}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="text-center py-16">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">{t('loading')}</p>
        </div>
      ) : filteredBooks.length === 0 ? (
        <div className="text-center py-16 border rounded-lg">
          <Book className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">{t('noBooks')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="border rounded-lg p-6 hover:border-primary transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <FileText className="w-8 h-8 text-primary" />
                <span className="px-2 py-1 text-xs bg-muted rounded">
                  {t(`categories.${book.category}`)}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 flex-1">{book.title}</h3>
              {book.description && (
                <p className="text-muted-foreground text-sm mb-4">{book.description}</p>
              )}
              <div className="flex space-x-2 mt-auto">
                <button
                  onClick={() => handleView(book)}
                  disabled={!book.driveUrl && !book.filename}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Eye className="w-4 h-4" />
                  <span>{t('view')}</span>
                </button>
                <button
                  onClick={() => handleDownload(book)}
                  disabled={!book.driveUrl && !book.filename}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border rounded-lg hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  title={t('download')}
                >
                  <Download className="w-4 h-4" />
                  <span>{t('download')}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
