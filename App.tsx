import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, PenTool, Box, Hammer, X, ChevronLeft, ChevronRight } from 'lucide-react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { NavRoute, Project } from './types';
import { GALLERY_PROJECTS, CATALOG_ITEMS, TIKTOK_VIDEOS, SOCIAL_LINKS, BRAND_LOGO, HERO_IMAGE_URL } from './constants';

// --- Home Page Component ---
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE_URL}
            alt="Woodworking Workshop"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 to-stone-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8 flex justify-center">
            <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full border border-stone-600">
              <img
                src={BRAND_LOGO.src}
                alt={BRAND_LOGO.alt}
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover bg-stone-50 shadow-2xl"
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">
            Made to Measure. <span className="text-wood-500">Built to Last.</span>
          </h1>
          <p className="text-xl text-stone-300 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Custom woodworking for your home and family. From Montessori-style kids' furniture to stylish dog crates and built-ins, we build practical, beautiful pieces designed to fit your life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate(NavRoute.CATALOG)}
              className="px-8 py-4 bg-wood-600 hover:bg-wood-500 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              View Catalog <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => navigate(NavRoute.CONTACT)}
              className="px-8 py-4 border border-stone-500 text-stone-300 hover:text-white hover:border-white rounded-full font-semibold transition-all"
            >
              Start Custom Project
            </button>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-6 text-wood-600">
                <PenTool className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Made For Your Home</h3>
              <p className="text-stone-600">Built to fit your space perfectly. Whether it's a weird corner or a specific vision, we'll make it happen.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-6 text-wood-600">
                <Hammer className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Built To Last</h3>
              <p className="text-stone-600">Solid wood, real joinery, and attention to detail. Furniture that stands up to daily use (and kids).</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-6 text-wood-600">
                <Box className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Safe & Solid</h3>
              <p className="text-stone-600">Quality materials that look good and last. We use durable hardwoods and safe, family-friendly finishes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Portfolio Page Component ---
const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState<'gallery' | 'tiktok'>('gallery');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // When project changes, reset index
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProject]);

  const handleNextImage = (e: React.MouseEvent, totalImages: number) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const handlePrevImage = (e: React.MouseEvent, totalImages: number) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleThumbnailClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  return (
    <div className="pt-12 pb-24 px-4 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Our Work</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">Explore our gallery of completed commissions and watch the process behind the build.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-full shadow-sm border border-stone-200 inline-flex">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'gallery' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
            >
              Photo Gallery
            </button>
            <button
              onClick={() => setActiveTab('tiktok')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'tiktok' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
            >
              TikTok Feed
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        {activeTab === 'gallery' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_PROJECTS.sort((a, b) => (a.priority || 0) - (b.priority || 0)).map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/3] bg-stone-200">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-wood-400 text-xs font-bold uppercase tracking-wider mb-1">{project.category}</span>
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-stone-300 text-sm">{project.description}</p>
                  <div className="mt-3 flex items-center text-white/80 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    <span>View Project & Process</span>
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TikTok Grid */}
        {activeTab === 'tiktok' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIKTOK_VIDEOS.map((video) => (
              <div key={video.id} className="bg-stone-900 rounded-xl overflow-hidden shadow-lg aspect-[9/16] relative group border border-stone-800">
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${video.embedUrl}`}
                  className="w-full h-full absolute inset-0 border-0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  title={`TikTok video ${video.id}`}
                ></iframe>
                {/* Overlay description only appears on hover/focus if needed, but iframe usually captures events */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent z-10">
                  <p className="text-white text-sm font-medium truncate shadow-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox Modal with Carousel */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <button
              className="absolute top-6 right-6 text-stone-400 hover:text-white p-2 transition-colors z-50 bg-stone-800/50 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProject(null);
              }}
            >
              <X className="h-8 w-8" />
            </button>

            <div
              className="max-w-6xl w-full max-h-screen flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Construct list of all images: Main + Additional */}
              {(() => {
                const allImages = [selectedProject.imageUrl, ...(selectedProject.additionalImages || [])];
                const hasMultipleImages = allImages.length > 1;

                return (
                  <>
                    <div className="relative w-full flex justify-center items-center">
                      {/* Prev Button */}
                      {hasMultipleImages && (
                        <button
                          onClick={(e) => handlePrevImage(e, allImages.length)}
                          className="absolute left-2 md:left-4 p-2 md:p-3 bg-stone-800/50 hover:bg-stone-700 text-white rounded-full transition-all z-10 backdrop-blur-sm"
                        >
                          <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
                        </button>
                      )}

                      {/* Main Image */}
                      <img
                        src={allImages[currentImageIndex]}
                        alt={`${selectedProject.title} - View ${currentImageIndex + 1}`}
                        className="max-h-[65vh] md:max-h-[70vh] max-w-full object-contain rounded-md shadow-2xl border border-stone-800"
                      />

                      {/* Next Button */}
                      {hasMultipleImages && (
                        <button
                          onClick={(e) => handleNextImage(e, allImages.length)}
                          className="absolute right-2 md:right-4 p-2 md:p-3 bg-stone-800/50 hover:bg-stone-700 text-white rounded-full transition-all z-10 backdrop-blur-sm"
                        >
                          <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
                        </button>
                      )}
                    </div>

                    {/* Thumbnails */}
                    {hasMultipleImages && (
                      <div className="flex gap-2 mt-4 overflow-x-auto max-w-full pb-2 px-2 scrollbar-hide">
                        {allImages.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => handleThumbnailClick(e, idx)}
                            className={`relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${currentImageIndex === idx ? 'border-wood-500 opacity-100' : 'border-transparent opacity-50 hover:opacity-80'
                              }`}
                          >
                            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Description */}
                    <div className="mt-4 text-center animate-fade-in max-w-2xl px-4">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-wood-500 text-sm font-bold uppercase tracking-wider">{selectedProject.category}</span>
                        {hasMultipleImages && (
                          <span className="text-stone-500 text-xs bg-stone-900 px-2 py-0.5 rounded-full">
                            {currentImageIndex + 1} / {allImages.length}
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">{selectedProject.title}</h3>
                      <p className="text-stone-400 text-sm md:text-base">{selectedProject.description}</p>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Catalog Page Component ---
const CatalogPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-12 pb-24 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Service Catalog</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">Standard designs we love to build. All items can be customized to your specific needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {CATALOG_ITEMS.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row bg-stone-50 rounded-2xl overflow-hidden shadow-sm border border-stone-100">
              <div className="md:w-2/5 h-64 md:h-auto relative">
                <img src={item.imageUrl} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col">
                <h3 className="text-2xl font-bold text-stone-900 mb-2">{item.name}</h3>
                <p className="text-wood-600 font-bold text-lg mb-4">{item.basePrice}</p>
                <p className="text-stone-600 mb-6 flex-grow">{item.description}</p>
                <ul className="space-y-2 mb-8">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-stone-500">
                      <CheckCircle2 className="h-4 w-4 text-wood-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate(NavRoute.CONTACT)}
                  className="w-full py-3 border-2 border-stone-900 text-stone-900 font-semibold hover:bg-stone-900 hover:text-white transition-colors rounded-lg"
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Request Callout */}
        <div className="mt-20 bg-wood-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-serif font-bold mb-4">Have something else in mind?</h2>
          <p className="mb-8 text-wood-100 max-w-xl mx-auto">We specialize in one-of-a-kind projects. If you can dream it, we can build it.</p>
          <button
            onClick={() => navigate(NavRoute.CONTACT)}
            className="px-10 py-4 bg-white text-wood-700 font-bold rounded-full hover:bg-stone-100 transition-colors shadow-xl"
          >
            Start Custom Commission
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Contact Page Component ---
const ContactPage = () => {
  return (
    <div className="pt-12 pb-24 px-4 bg-stone-50 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">

        {/* Info Side */}
        <div className="bg-stone-900 p-12 md:w-1/2 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Abstract BG Shape */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-wood-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold mb-6">Get in Touch</h2>
            <p className="text-stone-300 mb-12 leading-relaxed">
              Ready to start your project? Reach out via email or DM us on social media. We typically respond within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1"><Box className="h-6 w-6 text-wood-500" /></div>
                <div>
                  <h4 className="font-bold text-white">Workshop Location</h4>
                  <p className="text-stone-400 text-sm">Mahwah, NJ</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1"><Box className="h-6 w-6 text-wood-500" /></div> {/* Reusing icon for simplicity */}
                <div>
                  <h4 className="font-bold text-white">Follow Us</h4>
                  <p className="text-stone-400 text-sm">Check out our latest builds on Instagram & TikTok.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12 pt-12 border-t border-stone-800">
            <p className="text-wood-400 font-serif italic text-lg">"Measure ten times, cut once."</p>
          </div>
        </div>

        {/* Links Side */}
        <div className="p-12 md:w-1/2 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-stone-900 mb-8">Connect With Us</h3>

          <div className="space-y-4">
            <a
              href={SOCIAL_LINKS.email}
              className="flex items-center justify-between p-6 bg-stone-50 hover:bg-wood-50 border border-stone-200 rounded-xl transition-colors group"
            >
              <span className="font-medium text-stone-700 group-hover:text-wood-700">Send an Email</span>
              <ArrowRight className="h-5 w-5 text-stone-400 group-hover:text-wood-500" />
            </a>

            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-6 bg-stone-50 hover:bg-pink-50 border border-stone-200 rounded-xl transition-colors group"
            >
              <span className="font-medium text-stone-700 group-hover:text-pink-700">Instagram (@truncwoodworks)</span>
              <ArrowRight className="h-5 w-5 text-stone-400 group-hover:text-pink-500" />
            </a>

            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-6 bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-xl transition-colors group"
            >
              <span className="font-medium text-stone-700 group-hover:text-black">TikTok (@truncwoodworks)</span>
              <ArrowRight className="h-5 w-5 text-stone-400 group-hover:text-black" />
            </a>

            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-6 bg-stone-50 hover:bg-red-50 border border-stone-200 rounded-xl transition-colors group"
            >
              <span className="font-medium text-stone-700 group-hover:text-red-700">YouTube Channel</span>
              <ArrowRight className="h-5 w-5 text-stone-400 group-hover:text-red-500" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- Main App Structure ---
const App = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-800">
      <NavWrapper />
      <main className="flex-grow">
        <Routes>
          <Route path={NavRoute.HOME} element={<HomePage />} />
          <Route path={NavRoute.PORTFOLIO} element={<PortfolioPage />} />
          <Route path={NavRoute.CATALOG} element={<CatalogPage />} />
          <Route path={NavRoute.CONTACT} element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

// Wrapper to access navigate hook for Navbar
const NavWrapper = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return <Navbar currentRoute={location.pathname} onNavigate={(path) => navigate(path)} />;
}

// Root wrapper for Router
const AppRoot = () => (
  <HashRouter>
    <App />
  </HashRouter>
);

export default AppRoot;