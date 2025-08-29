import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight" data-testid="hero-title">
          Education. Empowerment.<br />
          <span className="text-secondary">Spirituality. Sustainability.</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="hero-subtitle">
          Building a brighter India through holistic development, one life at a time.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href="/get-involved">
            <Button
              size="lg"
              className="px-8 py-4 bg-secondary text-secondary-foreground text-lg font-semibold hover:bg-secondary/90 transform hover:scale-105 transition-all duration-300 shadow-lg"
              data-testid="button-hero-donate"
            >
              Donate Now
            </Button>
          </Link>
          <Link href="/get-involved">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 border-2 border-white text-white text-lg font-semibold hover:bg-white hover:text-foreground transition-all duration-300"
              data-testid="button-hero-volunteer"
            >
              Become a Volunteer
            </Button>
          </Link>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white" data-testid="stat-children">
            <div className="text-3xl font-bold text-secondary">2,500+</div>
            <div className="text-sm">Children Educated</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white" data-testid="stat-women">
            <div className="text-3xl font-bold text-secondary">1,200+</div>
            <div className="text-sm">Women Empowered</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white" data-testid="stat-trees">
            <div className="text-3xl font-bold text-secondary">15,000+</div>
            <div className="text-sm">Trees Planted</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white" data-testid="stat-volunteers">
            <div className="text-3xl font-bold text-secondary">500+</div>
            <div className="text-sm">Active Volunteers</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-testid="scroll-indicator">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
