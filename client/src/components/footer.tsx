import { Link } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter", { email });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      newsletterMutation.mutate(email);
    }
  };

  return (
    <footer className="bg-foreground text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-6" data-testid="footer-logo">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">Seva Foundation</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed" data-testid="footer-description">
              Empowering communities through education, women's empowerment, spiritual growth, 
              and environmental stewardship across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" data-testid="social-facebook">
                <span className="sr-only">Facebook</span>
                <span className="text-xs font-bold">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors" data-testid="social-twitter">
                <span className="sr-only">Twitter</span>
                <span className="text-xs font-bold">t</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors" data-testid="social-instagram">
                <span className="sr-only">Instagram</span>
                <span className="text-xs font-bold">i</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6" data-testid="footer-quicklinks-title">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-link-about">About Us</Link></li>
              <li><Link href="/our-work" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-link-work">Our Work</Link></li>
              <li><Link href="/stories" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-link-stories">Stories & Updates</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-link-contact">Contact</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-link-reports">Annual Reports</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-link-transparency">Transparency</a></li>
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6" data-testid="footer-programs-title">Our Programs</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-program-education">Education Initiative</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-program-women">Women Empowerment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-program-spiritual">Spiritual Growth</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-program-environment">Environmental Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-program-health">Community Health</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-program-disaster">Disaster Relief</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6" data-testid="footer-newsletter-title">Stay Updated</h3>
            <p className="text-gray-300 mb-4" data-testid="footer-newsletter-description">
              Subscribe to our newsletter for latest updates and impact stories.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                required
                data-testid="input-newsletter-email"
              />
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={newsletterMutation.isPending}
                data-testid="button-newsletter-subscribe"
              >
                {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            
            <p className="text-sm text-gray-400 mt-3" data-testid="footer-newsletter-privacy">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0" data-testid="footer-copyright">
            © 2023 Seva Foundation. All rights reserved. | Registered under Section 12A & 80G
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-link-privacy">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-link-terms">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-link-cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
