import type { Metadata } from 'next';
import './globals.css';
import { ScrollProgressBar } from '@/components/ScrollProgressBar';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'Neethumol Tomy | PHP Developer & Full-Stack Engineer',
  description: 'Portfolio of Neethumol Tomy, PHP Developer with 2 years experience in CodeIgniter, Laravel, RESTful APIs, MySQL optimization, and full-stack web applications.',
  keywords: ['Neethumol Tomy', 'PHP Developer', 'Laravel Developer', 'CodeIgniter', 'MySQL Optimization', 'Web Development', 'Kerala'],
  authors: [{ name: 'Neethumol Tomy' }],
  openGraph: {
    title: 'Neethumol Tomy | PHP Developer Portfolio',
    description: 'High-performance web applications, scalable backend architectures, and database optimizations.',
    url: 'https://github.com/neethu2904/portfolio',
    siteName: 'Neethumol Tomy Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollProgressBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
