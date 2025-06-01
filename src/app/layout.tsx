import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/context/themeProvider';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Hellium',
    description: 'AI sales bot.',
    icons: {
        icon: '/images/Logo.svg',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <ClerkProvider>
            <html lang='en'>
                <body className={inter.className}>
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='system'
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                        <Toaster />
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
