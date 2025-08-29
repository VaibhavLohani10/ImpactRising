import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/our-work" },
    { name: "Stories", href: "/stories" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-border" data-testid="main-navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3" data-testid="logo-link">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-script font-bold text-foreground">Seva Foundation</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors font-medium ${
                  location === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
                data-testid={`nav-link-${item.name.toLowerCase().replace(" ", "-")}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-3">
              <Link href="/get-involved">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  data-testid="button-volunteer"
                >
                  Volunteer
                </Button>
              </Link>
              <Link href="/get-involved">
                <Button
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 donate-button"
                  data-testid="button-donate"
                >
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" data-testid="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 ${
                  location === item.href
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`mobile-nav-link-${item.name.toLowerCase().replace(" ", "-")}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 px-3 py-2">
              <Link href="/get-involved">
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid="mobile-button-volunteer"
                >
                  Volunteer
                </Button>
              </Link>
              <Link href="/get-involved">
                <Button
                  className="w-full bg-secondary text-secondary-foreground donate-button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid="mobile-button-donate"
                >
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
