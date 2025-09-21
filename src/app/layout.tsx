import type { Metadata } from 'next';
import './globals.css';
import ClientEffects from '@/components/ClientEffects';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { Poppins, JetBrains_Mono } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
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
    icon: '/favicon.ico', // place favicon.ico in /public
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png', // optional for iOS
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('portfolio-theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
                  
                  if (!isDark) {
                    document.documentElement.classList.add('light');
                    document.documentElement.setAttribute('data-theme', 'light');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {
                  // Fallback to dark theme if localStorage fails
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ClientEffects />
        <div className="wrap">{children}</div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
