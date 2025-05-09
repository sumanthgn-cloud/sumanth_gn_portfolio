// pages/_app.js
import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'; // For page transitions
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true); // Set initial state to dark mode
  const router = useRouter();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
      <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
      </AnimatePresence>
  );
}

export default MyApp;