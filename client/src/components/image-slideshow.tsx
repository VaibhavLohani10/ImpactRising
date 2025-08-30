import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import the generated images
import heroImage from "@/assets/images/NGO_hero_background_community_b2d07550.png";
import volunteersImage from "@/assets/images/Community_volunteers_working_together_251bd569.png";
import villageImage from "@/assets/images/Indian_village_community_scene_61bcd7a5.png";
import educationImage from "@/assets/images/Modern_education_technology_classroom_ba238a06.png";
import classroomImage from "@/assets/images/Indian_children_education_classroom_08abf146.png";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  cta: string;
}

const slides: Slide[] = [
  {
    image: heroImage,
    title: "Building Brighter Communities",
    subtitle: "🇮🇳 Transforming lives through education, empowerment, and spiritual growth across India",
    cta: "Join Our Mission"
  },
  {
    image: volunteersImage,
    title: "Volunteers Making a Difference",
    subtitle: "🤝 Together we plant trees, teach children, and empower women in rural communities",
    cta: "Become a Volunteer"
  },
  {
    image: villageImage,
    title: "Preserving Our Heritage",
    subtitle: "🏛️ Honoring traditional values while building modern opportunities for every family",
    cta: "Learn Our Story"
  },
  {
    image: educationImage,
    title: "Modern Education for All",
    subtitle: "💻 Bridging the digital divide with technology-enabled learning for rural children",
    cta: "Support Education"
  },
  {
    image: classroomImage,
    title: "Every Child Deserves a Chance",
    subtitle: "📚 Quality education, scholarships, and mentorship programs changing young lives",
    cta: "Sponsor a Child"
  }
];

export default function ImageSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen overflow-hidden slideshow-container" data-testid="hero-slideshow">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* Overlay content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight animate-fade-in text-shadow" data-testid="slideshow-title">
            {slides[currentSlide].title}
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up" data-testid="slideshow-subtitle">
            {slides[currentSlide].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <Button
              size="lg"
              className="px-8 py-4 bg-gradient-to-r from-secondary to-orange-500 text-white text-lg font-semibold hover:from-orange-500 hover:to-secondary transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-secondary/50 animate-gradient-x hover-glow donate-button"
              data-testid="slideshow-cta-primary"
            >
              💝 {slides[currentSlide].cta}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 border-2 border-white text-white text-lg font-semibold hover:bg-white hover:text-foreground transition-all duration-500 hover:scale-110 hover:shadow-2xl bg-[#fabd23]"
              data-testid="slideshow-cta-secondary"
            >
              🤝 Volunteer With Us
            </Button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-secondary scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                onClick={() => goToSlide(index)}
                data-testid={`slide-indicator-${index}`}
              />
            ))}
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
      </div>

      {/* Navigation arrows */}
      <Button
        size="icon"
        variant="ghost"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20"
        onClick={prevSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        data-testid="slideshow-prev"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20"
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        data-testid="slideshow-next"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20" data-testid="scroll-indicator">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}