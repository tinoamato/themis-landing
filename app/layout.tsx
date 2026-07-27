import type {Metadata} from 'next';
import { Outfit, Cormorant_Garamond, JetBrains_Mono } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Themis — El orden que su estudio merece',
  description: 'La plataforma de gestión procesal premium para estudios jurídicos en Argentina. Automatice el monitoreo de expedientes (PJN y MEV), anticipe plazos y controle su agenda.',
  icons: {
    icon: '/icon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://themis.com.ar',
  },
  openGraph: {
    title: 'Themis — El orden que su estudio merece',
    description: 'La plataforma de gestión procesal premium para estudios jurídicos en Argentina. Automatice el monitoreo de expedientes (PJN y MEV), anticipe plazos y controle su agenda.',
    url: 'https://themis.com.ar',
    siteName: 'Themis',
    images: [
      {
        url: 'https://themis.com.ar/og-image.png?v=2',
        width: 1200,
        height: 630,
        alt: 'Themis — Gestión Procesal Inteligente',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Themis — El orden que su estudio merece',
    description: 'La plataforma de gestión procesal premium para estudios jurídicos en Argentina. Automatice el monitoreo de expedientes (PJN y MEV), anticipe plazos y controle su agenda.',
    images: ['https://themis.com.ar/og-image.png?v=2'],
  },
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${outfit.variable} ${cormorant.variable} ${jetbrains.variable}`}>
      <body>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {children}
      </body>
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
    </html>
  );
}

