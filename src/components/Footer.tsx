import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cardinal-red text-off-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">About The Cardinal</h3>
            <p className="text-sm leading-relaxed mb-4">
              Your trusted source for local news and stories in Doylestown, PA. 
              Bringing our community together through authentic journalism and 
              engaging storytelling since 1970.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/news" className="hover:text-warm-gold transition-colors">News</a></li>
              <li><a href="/events" className="hover:text-warm-gold transition-colors">Events</a></li>
              <li><a href="/advertise" className="hover:text-warm-gold transition-colors">Advertise</a></li>
              <li><a href="/privacy" className="hover:text-warm-gold transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-warm-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>123 Main St, Doylestown, PA 18901</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>(215) 555-0123</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>info@thecardinal.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-warm-gold hover:text-off-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-warm-gold hover:text-off-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-warm-gold hover:text-off-white transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-off-white/20">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} The Cardinal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;