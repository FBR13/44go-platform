import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '44Go - Marketplace Local',
  description: 'A sua plataforma de delivery local.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Navbar Global */}
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link 
                  href="/" 
                  className="text-2xl font-black bg-gradient-to-r from-[#fa7109] to-[#ab0029] bg-clip-text text-transparent"
                >
                  44Go
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link 
                  href="/auth/login" 
                  className="text-gray-900 hover:text-[#fa7109] transition-colors font-medium"
                >
                  Entrar
                </Link>
                <Link 
                  href="/dashboard" 
                  className="bg-gradient-to-r from-[#fa7109] to-[#ab0029] text-white px-5 py-2 rounded-md hover:opacity-90 transition-opacity font-medium shadow-sm"
                >
                  Minha Loja
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Conteúdo das Páginas */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}