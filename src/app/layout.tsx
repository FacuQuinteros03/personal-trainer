import { Oswald } from 'next/font/google';
import './globals.css';
import NavBar from '@/app/components/NavBar';
import React from 'react';

const oswald = Oswald({ subsets: ['latin'] });

export const metadata = {
  title: 'Athletic Programmer',
  description:
    'A page for a personal trainer who offers different types of trainings, clothing, and programs',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
