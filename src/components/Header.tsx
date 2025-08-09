import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="dental-container">
        <div className="flex items-center justify-between h-16">
          {/* Location */}
          <div className="flex items-center text-sm text-dental-gray">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Wichita, KS</span>
          </div>

          {/* Logo */}
          <div className="text-2xl font-bold text-dental-blue">
            AspenDental
          </div>

          {/* CTA Button */}
          <Button className="dental-button-primary">
            Schedule appointment
          </Button>
        </div>

        {/* Navigation */}
        <nav className="border-t border-gray-100">
          <div className="flex items-center justify-center space-x-8 py-4">
            <a 
              href="/" 
              className="text-sm font-medium text-dental-gray hover:text-dental-blue transition-colors uppercase tracking-wide"
            >
              HOME
            </a>
            <a 
              href="/services" 
              className="text-sm font-medium text-dental-gray hover:text-dental-blue transition-colors uppercase tracking-wide"
            >
              SERVICES
            </a>
            <a 
              href="/about" 
              className="text-sm font-medium text-dental-gray hover:text-dental-blue transition-colors uppercase tracking-wide"
            >
              ABOUT
            </a>
            <a 
              href="/locations" 
              className="text-sm font-medium text-dental-gray hover:text-dental-blue transition-colors uppercase tracking-wide"
            >
              LOCATIONS
            </a>
            <a 
              href="/insurance" 
              className="text-sm font-medium text-dental-gray hover:text-dental-blue transition-colors uppercase tracking-wide"
            >
              INSURANCE & FINANCING
            </a>
            <a 
              href="/contact" 
              className="text-sm font-medium text-dental-gray hover:text-dental-blue transition-colors uppercase tracking-wide"
            >
              CONTACT
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;