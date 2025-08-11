import { MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/services", label: "SERVICES" },
    { href: "/about", label: "ABOUT" },
    { href: "/locations", label: "LOCATIONS" },
    { href: "/insurance", label: "Why choose us" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="dental-container">
        {/* Top bar */}
        <div className="flex items-center justify-between h-20 px-4 md:px-0 relative">
          {/* Left placeholder - keeps center logo truly centered */}
          <div className="w-8 md:w-auto">
            {/* Location only for desktop */}
            <div className="hidden md:flex items-center text-sm text-dental-gray">
              <MapPin className="w-4 h-4 mr-1" />
              <span>California, U.S.A</span>
            </div>
          </div>

          {/* Centered logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a href="/">
              <img
                src={Logo}
                alt="Company Logo"
                className="h-16 sm:h-20 lg:h-28 w-auto"
              />
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
                className="text-dental-gray"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button className="dental-button-primary ml-4">
                Schedule appointment
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:block border-t border-gray-100">
          <div className="flex items-center justify-center space-x-8 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-dental-gray hover:text-dental-blue transition-colors uppercase tracking-wide"
                style={{ fontFamily: "Messina Sans", fontWeight: 700 }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile nav */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-gray-100 bg-white">
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-dental-gray hover:text-dental-blue transition-colors uppercase tracking-wide"
                  style={{ fontFamily: "Messina Sans", fontWeight: 700 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="dental-button-primary w-full">
                Schedule appointment
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
