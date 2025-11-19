import React from 'react';
import { Instagram, Youtube, Video, Mail } from 'lucide-react';
import { SOCIAL_LINKS, BRAND_LOGO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
          <img 
            src={BRAND_LOGO.src} 
            alt={BRAND_LOGO.alt} 
            className="h-16 w-16 rounded-full bg-stone-100 p-1 object-cover"
          />
          <div>
            <h2 className="text-2xl font-serif font-bold text-white tracking-wider mb-1">TRUNC Woodworks</h2>
            <p className="text-sm">Handcrafted in the USA.</p>
            <p className="text-sm">© {new Date().getFullYear()} Trunc Woodworks.</p>
          </div>
        </div>

        <div className="flex space-x-6">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="hover:text-wood-400 transition-colors">
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="hover:text-wood-400 transition-colors">
            <Video className="h-6 w-6" /> {/* Lucide doesn't have exact TikTok icon, using Video as generic */}
            <span className="sr-only">TikTok</span>
          </a>
          <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noreferrer" className="hover:text-wood-400 transition-colors">
            <Youtube className="h-6 w-6" />
            <span className="sr-only">YouTube</span>
          </a>
          <a href={SOCIAL_LINKS.email} className="hover:text-wood-400 transition-colors">
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;