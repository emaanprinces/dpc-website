
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronRight, ChevronDown, X, Menu } from 'lucide-react';

// --- BrandLogo Component ---
const BrandLogo = ({ compact = false, dark = false }) => (
  <div className="inline-flex items-center gap-3">
    <img
      src="/dpc-logo.png"
      alt="DPC logo"
      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
      className={`object-contain bg-white rounded-md ${compact ? 'w-8 h-8 p-0.5' : 'w-16 h-16 p-1'}`}
    />
    {!compact && (
      <div className={`flex flex-col justify-center border-l pl-3 h-10 transition-colors duration-300 ${
        dark 
          ? 'border-white/20 text-white' 
          : 'border-white/20 text-white' 
      }`}
      style={{
        // UPDATED: Added black border and shadow to text for visibility
        WebkitTextStroke: '1px black',
        paintOrder: 'stroke fill',
        textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0px 0px 10px rgba(0,0,0,0.5)'
      }}
      >
        <div className="font-sans font-bold uppercase tracking-[0.15em] text-[10px] leading-tight text-white">
          Deposit Protection
        </div>
        <div className="font-sans font-semibold uppercase tracking-[0.15em] text-[9px] leading-tight text-white">
          Corporation
        </div>
      </div>
    )}
  </div>
);

// --- Navbar Component ---
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeNavGroup, setActiveNavGroup] = useState('general');
  const [mobileGeneralOpen, setMobileGeneralOpen] = useState(false);
  const [mobileReferenceOpen, setMobileReferenceOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detect if we are on the Governance page
  const isGovernancePage = location.pathname === '/governance';

  useEffect(() => {
    const handleScroll = () => {
      const threshold = (location.pathname === '/' || location.pathname === '/homeb') ? window.innerHeight - 100 : 50;
      setScrolled(window.scrollY > threshold);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const generalLinks: Array<{ label: string; to: string; dropdown?: Array<{ label: string; to: string }> }> = [
    { label: 'Home', to: '/' },
    {
      label: 'About',
      to: '/about',
      dropdown: [
        { label: 'About Us', to: '/about' },
        { label: 'Strategic Goals', to: '/strategic-goals' },
        { label: 'Core Values', to: '/core-values' }
      ]
    },
    { label: 'Governance', to: '/governance' },
    {
      label: 'Depositors',
      to: '/depositor-info',
      dropdown: [
        { label: 'Protected Depositors', to: '/protected-deposits' },
        { label: 'Depositors Verification Form', to: '/depositor-verification' }
      ]
    },
    { label: 'Banks', to: '/members' },
    { label: 'FAQ', to: '/dfaq' },
    { label: 'Contact', to: '/contact' },
  ];

  const referenceLinks: Array<{ label: string; to: string }> = [
    { label: 'Home', to: '/homeb' },
    { label: 'Governance', to: '/governance' },
    { label: 'Banks', to: '/members' },
    { label: 'Media', to: '/media' },
    { label: 'Latest Updates', to: '/latestupdates' },
    {label: 'FAQ', to: '/bfaq' },
  ];

  const currentLinks = activeNavGroup === 'general' ? generalLinks : referenceLinks;

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDesktopDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDesktopDropdown(null), 150);
  };

  const toggleMobileSubmenu = (label: string) => {
    setMobileSubmenuOpen(prev => prev === label ? null : label);
  };

  // UPDATED: Unified style for all text with black border and shadow
  // This creates the "Visible" look requested.
  const textBorderShadowStyle = {
    color: '#ffffff',
    textShadow: '2px 2px 4px rgba(0,0,0,1)', // Hard black shadow
    WebkitTextStroke: '1px black', // Black border around text
    paintOrder: 'stroke fill', // Ensures stroke is outside color
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 py-2 border-none shadow-none`}
      style={{ 
        backgroundColor: (scrolled || isOpen) ? 'var(--color-dpc-navy)' : 'transparent', 
        backdropFilter: (!scrolled && !isOpen) ? 'blur(0px)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        
        <div className="transition-opacity duration-300 opacity-100">
          <Link to="/" className="flex items-center gap-2" aria-label="Back to top">
            <BrandLogo compact={false} dark={!scrolled} /> 
          </Link>
        </div>

        {/* Desktop Nav - WITH BLACK BORDERS */}
        <div className="hidden md:flex items-center gap-2">
          {currentLinks.map((item) => (
            <div 
              key={item.label} 
              className="relative group"
              onMouseEnter={() => (item as any).dropdown && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {(item as any).dropdown ? (
                <>
                  <button 
                    type="button" 
                    style={textBorderShadowStyle}
                    className="flex items-center gap-1 font-bold tracking-wide transition-colors px-3 py-2 rounded text-[12px] text-white hover:text-dpc-teal hover:bg-white/20"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.label}
                    <ChevronDown size={10} className={`transition-transform ${desktopDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {desktopDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        style={{ backgroundColor: 'var(--color-dpc-navy)' }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-lg shadow-xl overflow-hidden"
                      >
                        {(item as any).dropdown.map((sub: any) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            // UPDATED: Applied style to dropdown items as well
                            style={textBorderShadowStyle}
                            className="block px-4 py-3 text-sm text-white hover:text-dpc-teal transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link 
                  to={item.to} 
                  // UPDATED: Applied style to links
                  style={textBorderShadowStyle}
                  className="font-bold tracking-wide transition-colors px-3 py-2 rounded text-[12px] text-white hover:text-dpc-teal hover:bg-white/20"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Button group (right side) - BLACK TEXT BORDERS */}
        <div className="hidden md:flex items-center gap-2 transition-opacity duration-300 opacity-100">
          <button
            type="button"
            onClick={() => {
              setActiveNavGroup('general');
              setDesktopDropdown(null);
              navigate('/');
            }}
            className={`px-4 py-2 text-[12px] font-bold uppercase tracking-wide rounded-lg transition-all duration-200 ${
              activeNavGroup === 'general'
                ? 'bg-dpc-teal text-white shadow-lg'
                : 'text-white hover:bg-white/15'
            }`}
            style={activeNavGroup !== 'general' ? textBorderShadowStyle : { textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
          >
            General Public
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveNavGroup('reference');
              setDesktopDropdown(null);
              navigate('/homeb');
            }}
            className={`px-4 py-2 text-[12px] font-bold uppercase tracking-wide rounded-lg transition-all duration-200 ${
              activeNavGroup === 'reference'
                ? 'bg-dpc-teal text-white shadow-lg'
                : 'text-white hover:bg-white/15'
            }`}
            style={activeNavGroup !== 'reference' ? textBorderShadowStyle : { textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
          >
            For Banks
          </button>
        </div>

        {/* Mobile Toggle - WHITE ICON WITH SHADOW */}
        <button
          className={`md:hidden p-2 transition-colors text-white`} 
          style={!scrolled && !isOpen ? { filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,1))' } : {}}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
        </button>
      </div>

      {/* Mobile Menu - NAVY BACKGROUND, BLACK TEXT BORDERS */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: 'var(--color-dpc-navy)' }}
          >
            <div className="flex flex-col px-4 py-2">
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setMobileGeneralOpen(!mobileGeneralOpen);
                    if (mobileGeneralOpen === false) {
                      setMobileReferenceOpen(false);
                      setActiveNavGroup('general');
                      navigate('/');
                    }
                  }}
                  className={`w-full text-left font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-between py-2 px-3 rounded my-1 ${
                    mobileGeneralOpen
                      ? 'bg-dpc-teal text-white'
                      : 'text-white hover:bg-white/10'
                  }`}
                  style={!mobileGeneralOpen ? textBorderShadowStyle : {}}
                >
                  General Public
                  <ChevronRight size={14} className={`transition-transform ${mobileGeneralOpen ? 'rotate-90' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {mobileGeneralOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-3"
                    >
                      {generalLinks.map((item) => (
                        <div key={item.label}>
                          {item.dropdown ? (
                            <>
                              <button
                                onClick={() => toggleMobileSubmenu(item.label)}
                                className="w-full text-left text-white hover:text-dpc-teal text-sm font-medium py-2 pl-2 flex justify-between items-center rounded hover:bg-white/5"
                                style={textBorderShadowStyle}
                              >
                                {item.label}
                                <ChevronDown size={12} className={`transition-transform ${mobileSubmenuOpen === item.label ? 'rotate-180' : ''}`} />
                              </button>
                              {mobileSubmenuOpen === item.label && (
                                <div className="pl-3 pb-1 space-y-1">
                                  {item.dropdown.map((sub) => (
                                    <Link
                                      key={sub.to}
                                      to={sub.to}
                                      onClick={() => setIsOpen(false)}
                                      className="block text-white/80 hover:text-white text-sm py-1 px-2 rounded hover:bg-white/5"
                                      style={textBorderShadowStyle}
                                    >
                                      {sub.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              to={item.to}
                              onClick={() => setIsOpen(false)}
                              className="block text-white hover:text-dpc-teal text-sm font-medium py-2 px-2 rounded hover:bg-white/5"
                              style={textBorderShadowStyle}
                            >
                              {item.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => {
                    setMobileReferenceOpen(!mobileReferenceOpen);
                    if (mobileReferenceOpen === false) {
                      setMobileGeneralOpen(false);
                      setActiveNavGroup('reference');
                      navigate('/homeb');
                    }
                  }}
                  className={`w-full text-left font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-between py-2 px-3 rounded my-1 ${
                    mobileReferenceOpen
                      ? 'bg-dpc-teal text-white'
                      : 'text-white hover:bg-white/10'
                  }`}
                  style={!mobileReferenceOpen ? textBorderShadowStyle : {}}
                >
                  For Banks
                  <ChevronRight size={14} className={`transition-transform ${mobileReferenceOpen ? 'rotate-90' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {mobileReferenceOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-3"
                    >
                      {referenceLinks.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          onClick={() => setIsOpen(false)}
                          className="block text-white hover:text-dpc-teal text-sm font-medium py-2 px-2 rounded hover:bg-white/5"
                          style={textBorderShadowStyle}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Footer Component ---
const Footer = () => (
  <footer 
    className="text-dpc-clay py-16 border-t border-white/5"
    style={{ backgroundColor: 'var(--color-dpc-navy)' }}
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        <div className="lg:col-span-2 space-y-6">
          <BrandLogo compact={false} dark={true} />
          <p className="text-dpc-clay/40 text-sm max-w-sm leading-relaxed">
            A wholly-owned subsidiary of the State Bank of Pakistan, mandated to protect depositors and ensure systemic financial stability.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] font-bold tracking-[0.2em] text-dpc-teal uppercase mb-6">Navigation</h4>
          <ul className="space-y-3 text-sm text-dpc-clay/60">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/#vision" className="hover:text-white transition-colors">Mandate</Link></li>
            <li><Link to="/Media" className="hover:text-white transition-colors">Media</Link></li>
            <li><Link to="/governance" className="hover:text-white transition-colors">Governance</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold tracking-[0.2em] text-dpc-teal uppercase mb-6">Legal</h4>
          <ul className="space-y-3 text-sm text-dpc-clay/60">
            <li><a href="#" className="hover:text-white transition-colors">DPC Act 2016</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-dpc-clay/40">
        <p>© {new Date().getFullYear()} Deposit Protection Corporation. All rights reserved.</p>
        <p>A subsidiary of <span className="text-dpc-clay/80">State Bank of Pakistan</span></p>
      </div>
    </div>
  </footer>
);

// --- Main Layout Function ---
const Layout = () => {
  return (
    <div className="min-h-screen bg-dpc-clay font-sans text-dpc-navy selection:bg-dpc-teal selection:text-dpc-navy">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
