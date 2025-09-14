import type { Metadata } from 'next';
import './globals.css';
import ClientEffects from '@/components/ClientEffects';

export const metadata: Metadata = {
  title: 'Ahmad Maruf Hossain — Portfolio',
  description: 'CSE undergrad, coder, Linux tinkerer, blockchain enthusiast.',
  icons: {
    icon: '/favicon.ico', // place favicon.ico in /public
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png', // optional for iOS
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientEffects />
        <div className="wrap">{children}</div>
      </body>
    </html>
  );
}
