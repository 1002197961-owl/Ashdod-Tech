import type { Metadata } from 'next';
import { Heebo } from 'next/font/google';
import './globals.css';

const heebo = Heebo({ subsets: ['hebrew', 'latin'], variable: '--font-heebo' });

export const metadata: Metadata = {
  title: 'Ashdod Tech | למידה עירונית באשדוד',
  description: 'פלטפורמת למידה עירונית לתלמידים, בני נוער ומורים באשדוד.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <body className={heebo.variable}>{children}</body>
    </html>
  );
}
