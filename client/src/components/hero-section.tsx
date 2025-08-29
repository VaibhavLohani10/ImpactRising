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
          backgroundImage: "url('/attached_assets/generated_images/NGO_hero_background_community_b2d07550.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in" data-testid="hero-title">
          Education. Empowerment.<br />
          <span className="text-secondary animate-pulse">Spirituality. Sustainability.</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" data-testid="hero-subtitle">
          🇮🇳 Building a brighter India through holistic development, transforming lives with love, compassion, and dedicated service.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
          <Link href="/get-involved">
            <Button
              size="lg"
              className="px-8 py-4 bg-gradient-to-r from-secondary to-orange-500 text-secondary-foreground text-lg font-semibold hover:from-orange-500 hover:to-secondary transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-secondary/50 animate-gradient-x"
              data-testid="button-hero-donate"
            >
              💝 Donate Now
            </Button>
          </Link>
          <Link href="/get-involved">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 border-2 border-white text-white text-lg font-semibold hover:bg-white hover:text-foreground transition-all duration-500 hover:scale-110 hover:shadow-2xl"
              data-testid="button-hero-volunteer"
            >
              🙋‍♂️ Become a Volunteer
            </Button>
          </Link>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white hover-lift hover:bg-white/20 transition-all duration-300" data-testid="stat-children">
            <div className="text-3xl font-bold text-secondary animate-pulse">2,500+</div>
            <div className="text-sm">📚 Children Educated</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white hover-lift hover:bg-white/20 transition-all duration-300" data-testid="stat-women">
            <div className="text-3xl font-bold text-secondary animate-pulse">1,200+</div>
            <div className="text-sm">👩‍💼 Women Empowered</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white hover-lift hover:bg-white/20 transition-all duration-300" data-testid="stat-trees">
            <div className="text-3xl font-bold text-secondary animate-pulse">15,000+</div>
            <div className="text-sm">🌳 Trees Planted</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white hover-lift hover:bg-white/20 transition-all duration-300" data-testid="stat-volunteers">
            <div className="text-3xl font-bold text-secondary animate-pulse">500+</div>
            <div className="text-sm">🤝 Active Volunteers</div>
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
