import { Link } from "wouter";
import { BookOpen, Briefcase, Heart, Leaf } from "lucide-react";

// Import generated images
import educationImage from "@/assets/images/Indian_children_education_classroom_08abf146.png";
import womenImage from "@/assets/images/Women_empowerment_skills_training_0151b0f5.png";
import spiritualImage from "@/assets/images/Spiritual_meditation_yoga_session_8df56b6b.png";
import environmentImage from "@/assets/images/Environmental_tree_plantation_drive_82f866c6.png";

export default function PillarsSection() {
  const pillars = [
    {
      icon: BookOpen,
      title: "Holistic Education",
      description: "💫 Nurturing young minds with quality education, scholarships, and after-school programs. Every child deserves the chance to dream and achieve greatness.",
      image: educationImage,
      alt: "Children in education program",
      color: "primary",
      link: "/our-work#education",
      stats: "2,500+ children educated"
    },
    {
      icon: Briefcase,
      title: "Women Empowerment",
      description: "🌟 Empowering women through skills training, employment opportunities, and small business support. Together, we're building a generation of independent, confident women leaders.",
      image: womenImage,
      alt: "Women empowerment program",
      color: "secondary",
      link: "/our-work#empowerment",
      stats: "1,200+ women trained"
    },
    {
      icon: Heart,
      title: "Spiritual Growth",
      description: "🕉️ Discovering inner peace through Vedantic teachings, meditation workshops, and spiritual guidance. Ancient wisdom for modern times, nurturing the soul alongside the mind.",
      image: spiritualImage,
      alt: "Spiritual and meditation practices",
      color: "accent",
      link: "/our-work#spirituality",
      stats: "10,000+ lives touched"
    },
    {
      icon: Leaf,
      title: "Environmental Care",
      description: "🌱 Protecting Mother Earth through tree plantation drives, plastic-free initiatives, and environmental awareness. Creating a sustainable future for generations to come.",
      image: environmentImage,
      alt: "Environmental protection activities",
      color: "green-500",
      link: "/our-work#environment",
      stats: "15,000+ trees planted"
    }
  ];

  return (
    <section className="py-20 bg-muted" data-testid="pillars-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4" data-testid="pillars-title">
            Our <span className="font-script text-primary">Sacred</span> Four Pillars
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="pillars-subtitle">
            Each pillar represents a fundamental aspect of holistic development, 
            working together to create lasting positive change.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 text-center hover:shadow-xl transition-all duration-500 group hover-lift transform hover:scale-105 border-2 border-transparent hover:border-primary/20"
                data-testid={`pillar-${pillar.title.toLowerCase().replace(" ", "-")}`}
              >
                <div className={`w-16 h-16 bg-${pillar.color}/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-${pillar.color}/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <IconComponent className={`w-8 h-8 text-${pillar.color} group-hover:scale-125 transition-transform duration-300`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground mb-6">{pillar.description}</p>
                <div className="relative overflow-hidden rounded-lg mb-4 group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={pillar.image}
                    alt={pillar.alt}
                    className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {pillar.stats}
                  </div>
                </div>
                <Link href={pillar.link}>
                  <span className={`text-${pillar.color} hover:text-${pillar.color}/80 font-medium cursor-pointer`} data-testid={`link-learn-more-${index}`}>
                    Learn More →
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
