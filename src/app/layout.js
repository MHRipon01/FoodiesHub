import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { Lexend } from 'next/font/google';
import './globals.css';

const lexend = Lexend({ subsets: ['latin'] });

export const metadata = {
  title: 'FoodiesHub',
  description:
    'This is a online restaurant based food order & delivery platform. We are providing the best service to our customers.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={lexend.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
