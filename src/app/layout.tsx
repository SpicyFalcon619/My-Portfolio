import type { Metadata } from 'next';
import './globals.css';
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import ClientEffects from '@/components/ClientEffects';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'optional',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'optional',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://spicyfalcon619.github.io'),
  title: 'Ahmad Maruf Hossain - Portfolio',
  description: 'CSE undergrad at UIU and DBMS Lab assistant. Blockchain competition finalist; research interests in human-centred AI, HCI and NLP.',
  openGraph: {
    title: 'Ahmad Maruf Hossain (SpicyFalcon619)',
    description: 'CSE undergrad at UIU. Nestly, interactive Field Guides, Drawer 378, and a path into ML and AI.',
    url: 'https://spicyfalcon619.github.io',
    images: [{ url: '/assets/preview.png' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', images: ['/assets/preview.png'] },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${bricolage.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ClientEffects />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
