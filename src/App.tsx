import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import EventsPage from './pages/EventsPage';
import CommunityPage from './pages/CommunityPage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import IssuePage from './pages/IssuePage';
import ArchivePage from './pages/ArchivePage';
import AdvertisePage from './pages/AdvertisePage';
import WriterPage from './pages/WriterPage';
import NewsletterPopup from './components/NewsletterPopup';
import { NewsletterProvider, useNewsletterContext } from './context/NewsletterContext';

const AppContent = () => {
  const { showPopup, handleClose } = useNewsletterContext();

  return (
    <Router>
      <div className="min-h-screen bg-[#F2F0EF]">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<ArticlePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/current-issue" element={<IssuePage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/advertise" element={<AdvertisePage />} />
          <Route path="/writer/:writerId" element={<WriterPage />} />
        </Routes>
        <Footer />
        {showPopup && <NewsletterPopup onClose={handleClose} />}
      </div>
    </Router>
  );
};

function App() {
  return (
    <NewsletterProvider>
      <AppContent />
    </NewsletterProvider>
  );
}

export default App;