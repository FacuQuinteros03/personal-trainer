import { Oswald } from 'next/font/google';
import './globals.css';
import NavBar from '../components/NavBar';

const oswald = Oswald({ subsets: ['latin'] });

export const metadata = {
  title:
    'Vanguard Training - Entrenamientos personalizados para todos los niveles',
  description:
    'A page for a personal trainer who offers differents types of trainings and programs ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
