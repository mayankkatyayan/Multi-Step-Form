import DarkModeToggle from './components/DarkMode';
import { ToastContextProvider } from './components/ui/ToastContext';
import './globals.css';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Multi-Step Form',
  description: 'A collaborative multi-step form project',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
      <ToastContextProvider>
        <header className="p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-800">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Multi-Step Form</h1>
          <DarkModeToggle />
        </header>
        
        <main className="min-h-screen p-4">{children}</main>
        <footer className="p-4 bg-gray-100 dark:bg-gray-800 text-center text-gray-700 dark:text-gray-300">
          © 2024 Multi-Step Form
        </footer>
        </ToastContextProvider>
      </body>
    </html>
  );
}

