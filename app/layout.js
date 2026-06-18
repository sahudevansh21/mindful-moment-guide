import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Mindful Moment Guide',
  description: 'Simple, self-contained tool for mindfulness exercises and reflections.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <nav className="container nav-content">
            <Link href="/" className="logo">
              Mindful Moment Guide
            </Link>
            <ul className="nav-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/guided-practice">Guided Practice</Link>
              </li>
              <li>
                <Link href="/reflection-journal">Reflection Journal</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Mindful Moment Guide. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}