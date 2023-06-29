import { ReactNode } from 'react';
import Header from './Header';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
