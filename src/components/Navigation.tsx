import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isCurrentPage = (path: string) => {
    return location.pathname === path;
  };

  const MobileNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      to={to}
      className={`text-xl font-serif italic transition-colors ${
        isCurrentPage(to)
          ? 'text-[#8B0000] font-bold'
          : 'text-[#333333] hover:text-[#8B0000]'
      }`}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {children}
    </Link>
  );

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'News', path: '/news' },
    { name: 'Events', path: '/events' },
    { name: 'Community', path: '/community' },
    { name: 'Current Issue', path: '/current-issue' },
    { name: 'About', path: '/about' }
  ];

  return (
    <div className="fixed w-full z-50">
      <div className="p-2">
        <nav 
          className={`
            w-[calc(100%-4px)] mx-auto
            rounded-2xl
            transition-all duration-300
            bg-[#FAFAFA]
            ${isScrolled ? 'shadow-lg' : ''}
          `}
        >
          <div className="px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-2xl font-serif italic font-bold text-[#8B0000]">
                  The Cardinal
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Navigation Links */}
              <div className="flex items-center space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative font-serif italic text-base transition-colors py-2 group ${
                      isCurrentPage(link.path)
                        ? 'text-[#8B0000] font-semibold'
                        : 'text-[#333333] hover:text-[#8B0000]'
                    }`}
                  >
                    {link.name}
                    <span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8B0000] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                    />
                  </Link>
                ))}
              </div>

              {/* Search and CTA */}
              <div className="flex items-center space-x-4">
                <button className="text-[#333333] hover:text-[#8B0000] transition-colors p-2">
                  <Search size={20} />
                </button>
                <Link
                  to="/advertise"
                  className="
                    px-6 py-2
                    rounded-2xl
                    font-semibold
                    transition-all duration-300
                    bg-[#8B0000] text-white hover:bg-[#660000]
                  "
                >
                  Advertise with Us
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#333333] hover:text-[#8B0000] transition-colors"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Extended Bar */}
          <div 
            className={`
              md:hidden 
              overflow-hidden 
              transition-all duration-300 ease-in-out
              ${isMobileMenuOpen ? 'max-h-[400px] border-t border-gray-100' : 'max-h-0'}
            `}
          >
            <div className="px-8 py-6 space-y-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <MobileNavLink key={link.name} to={link.path}>
                    {link.name}
                  </MobileNavLink>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  to="/advertise"
                  className="
                    w-full
                    inline-flex
                    justify-center
                    px-8 py-3
                    rounded-2xl
                    font-semibold
                    transition-all duration-300
                    bg-[#8B0000] text-white hover:bg-[#660000]
                  "
                >
                  Advertise with Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;