import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// Component that scrolls window to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-navy-950 text-slate-100 selection:bg-primary-600/30 selection:text-primary-300">
      <ScrollToTop />
      
      {/* Background Decorative Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary-950/10 blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-950/10 blur-[150px] pointer-events-none z-0" />
      
      <Navbar />
      
      <main className="flex-grow pt-20 relative z-10">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}
