import type { Metadata } from 'next';
import '../styles/index.css';

export const metadata: Metadata = {
    title: 'Monte Sereno Resort & Spa',
    description: 'Experience peaceful mountain living at Monte Sereno Munnar',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased font-inter">
                {children}
            </body>
        </html>
    );
}
