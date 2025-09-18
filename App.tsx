

import React, { useState, useCallback, useEffect } from 'react';
import { Page } from './types';
import { NAV_LINKS, SEO_DATA } from './constants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PartnersPage from './pages/PartnersPage';
import CustomersPage from './pages/CustomersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const handleNavigate = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const seo = SEO_DATA[currentPage];
    if (seo) {
      document.title = seo.title;
      const descriptionTag = document.querySelector('meta[name="description"]');
      if (descriptionTag) {
        descriptionTag.setAttribute('content', seo.description);
      } else {
        const newDescriptionTag = document.createElement('meta');
        newDescriptionTag.name = 'description';
        newDescriptionTag.content = seo.description;
        document.head.appendChild(newDescriptionTag);
      }
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage onNavigate={handleNavigate} />;
      case Page.Partners:
        return <PartnersPage />;
      case Page.Customers:
        return <CustomersPage onNavigate={handleNavigate}/>;
      case Page.About:
        // FIX: Added missing 'onNavigate' prop to AboutPage.
        return <AboutPage onNavigate={handleNavigate} />;
      case Page.Contact:
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-brand-white text-brand-black font-sans flex flex-col min-h-screen">
      <Navbar
        navLinks={NAV_LINKS}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate}/>
    </div>
  );
};

export default App;