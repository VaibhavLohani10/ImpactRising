import { Link } from "wouter";
import { BookOpen, Briefcase, Heart, Leaf } from "lucide-react";

export default function PillarsSection() {
  const pillars = [
    {
      icon: BookOpen,
      title: "Holistic Education",
      description: "Providing quality education, scholarships, and after-school programs to children who need it most.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      alt: "Children in education program",
      color: "primary",
      link: "/our-work#education"
    },
    {
      icon: Briefcase,
      title: "Women Empowerment",
      description: "Skills training, employment opportunities, and small business support for women seeking independence.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      alt: "Women empowerment program",
      color: "secondary",
      link: "/our-work#empowerment"
    },
    {
      icon: Heart,
      title: "Spiritual Growth",
      description: "Vedantic teachings, meditation workshops, and spiritual guidance for inner peace and personal growth.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      alt: "Spiritual and meditation practices",
      color: "accent",
      link: "/our-work#spirituality"
    },
    {
      icon: Leaf,
      title: "Environmental Care",
      description: "Tree plantation drives, plastic-free initiatives, and environmental awareness for a sustainable future.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      alt: "Environmental protection activities",
      color: "green-500",
      link: "/our-work#environment"
    }
  ];

  return (
    <section className="py-20 bg-muted" data-testid="pillars-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="pillars-title">
            Our Four Pillars
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
                className="bg-card rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 group"
                data-testid={`pillar-${pillar.title.toLowerCase().replace(" ", "-")}`}
              >
                <div className={`w-16 h-16 bg-${pillar.color}/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-${pillar.color}/20 transition-colors`}>
                  <IconComponent className={`w-8 h-8 text-${pillar.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground mb-6">{pillar.description}</p>
                <img
                  src={pillar.image}
                  alt={pillar.alt}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
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
