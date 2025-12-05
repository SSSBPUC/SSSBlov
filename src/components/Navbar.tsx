import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import collegeLogo from '@/assets/college-logo.png';
import trustLogo from '@/assets/trust-logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Academics', path: '/academics' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Campus Life', path: '/campus-life' },
  { name: 'About', path: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card shadow-md">
      {/* Top bar with logos and college name */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Left Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={collegeLogo} alt="College Logo" className="h-14 md:h-16 w-auto" />
          </Link>

          {/* Center - College Name */}
          <div className="hidden md:block text-center flex-1 px-4">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground leading-tight">
              Sri Sathya Sai Baba Pre-University College
            </h1>
            <p className="text-sm text-muted-foreground">Jayalakshmipuram, Mysuru</p>
          </div>

          {/* Right Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={trustLogo} alt="Trust Logo" className="h-14 md:h-16 w-auto" />
          </Link>
        </div>

        {/* Mobile College Name */}
        <div className="md:hidden text-center pb-2">
          <h1 className="text-base font-bold text-foreground leading-tight">
            Sri Sathya Sai Baba Pre-University College
          </h1>
          <p className="text-xs text-muted-foreground">Jayalakshmipuram, Mysuru</p>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="border-t border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? 'nav-link-active' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Admission Button - Desktop */}
            <div className="hidden md:block">
              <Link to="/admission" className="btn-admission">
                For Admission
              </Link>
            </div>

            {/* Mobile Menu Button and Admission */}
            <div className="md:hidden flex items-center justify-between w-full">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <Link to="/admission" className="btn-admission text-sm px-4 py-2">
                For Admission
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-4 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
