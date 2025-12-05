import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import collegeLogo from '@/assets/college-logo.png';

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <img src={collegeLogo} alt="College Logo" className="h-16 w-auto brightness-0 invert" />
            <h3 className="text-lg font-bold">Sri Sathya Sai Baba PU College</h3>
            <p className="text-primary-foreground/80 text-sm">
              Nurturing minds with value-based quality education since establishment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/academics" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Academics</Link></li>
              <li><Link to="/gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Gallery</Link></li>
              <li><Link to="/campus-life" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Campus Life</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About</Link></li>
              <li><Link to="/admission" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Admissions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/80 text-sm">
                  Jayalakshmipuram, Mysuru, Karnataka - 570012
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">+91 821 2345678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">contact@sssbpuc.edu.in</span>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h4 className="text-lg font-semibold mb-4">College Hours</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li>Monday - Friday: 8:00 AM - 4:00 PM</li>
              <li>Saturday: 8:00 AM - 1:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Sri Sathya Sai Baba Pre-University College, Mysuru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
