import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['500','600','700'], display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://mirrohaus.com'),
  title: { default: 'MIRRØHAUS — A Creative System of Brands', template: '%s · MIRRØHAUS' },
  description: 'MIRRØHAUS is a premium creative studio crafting brand systems, web experiences, and campaign assets.',
  openGraph: {
    type: 'website',
    url: 'https://mirrohaus.com',
    title: 'MIRRØHAUS — A Creative System of Brands',
    description: 'Brand systems, web experiences, and campaign assets — clean, fast, built to scale.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MIRRØHAUS' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MIRRØHAUS — A Creative System of Brands',
    description: 'Brand systems, web experiences, and campaign assets — clean, fast, built to scale.',
    images: ['/og-image.png']
  },
  icons: { icon: '/icon.png', apple: '/apple-touch-icon.png' }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} theme-dark`}>
        {children}
      </body>
    </html>
  );
}
