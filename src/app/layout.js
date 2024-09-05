// src/app/layout.js
import './globals.css'; // Ensure Tailwind CSS is imported
import Header from '../components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}