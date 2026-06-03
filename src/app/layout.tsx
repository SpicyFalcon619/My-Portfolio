import type { Metadata } from 'next';
import './globals.css';
import { Poppins, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import ClientEffects from '@/components/ClientEffects';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ahmad Maruf Hossain - Portfolio',
  description: 'CSE undergrad, coder, Linux tinkerer, blockchain enthusiast.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${jetbrainsMono.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ClientEffects />
          <div className="wrap">{children}</div>
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
