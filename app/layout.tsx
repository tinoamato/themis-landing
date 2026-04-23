import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Themis — El orden que su estudio merece',
  description: 'La plataforma que anticipa plazos, automatiza el monitoreo judicial y profesionaliza la gestión de expedientes.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
