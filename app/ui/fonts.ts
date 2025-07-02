import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

// weights 400, 700
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-lusitana',
    });

export const inter = Inter({
  subsets: ['latin'],
});