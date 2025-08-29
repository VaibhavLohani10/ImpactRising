import { BookOpen, Briefcase, Heart, Leaf } from "lucide-react";

export default function OurWork() {
  const programs = [
    {
      id: "education",
      title: "Education Initiative",
      icon: BookOpen,
      color: "primary",
      description: "Comprehensive educational support for children from underserved communities",
      initiatives: [
        "After-school learning centers in rural areas",
        "Scholarship programs for promising students",
        "Teacher training and capacity building",
        "Digital literacy programs",
        "Library and resource development"
      ],
      impact: "2,500+ children educated across 15 states",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "empowerment",
      title: "Women Empowerment",
      icon: Briefcase,
      color: "secondary",
      description: "Skills training and economic opportunities for women seeking independence",
      initiatives: [
        "Vocational skills training (tailoring, handicrafts, digital skills)",
        "Microfinance and small business support",
        "Leadership development programs",
        "Health and wellness education",
        "Legal awareness workshops"
      ],
      impact: "1,200+ women trained and employed",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "spirituality",
      title: "Spiritual Growth",
      icon: Heart,
      color: "accent",
      description: "Vedantic teachings and spiritual guidance for inner peace and personal growth",
      initiatives: [
        "Weekly Bhagavad Gita study sessions",
        "Meditation and mindfulness workshops",
        "Yoga and wellness programs",
        "Spiritual counseling services",
        "Cultural heritage preservation"
      ],
      impact: "10,000+ people reached through spiritual programs",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "environment",
      title: "Environmental Care",
      icon: Leaf,
      color: "green-500",
      description: "Tree plantation drives and environmental awareness for a sustainable future",
      initiatives: [
        "Community tree plantation drives",
        "Plastic-free village initiatives",
        "Water conservation projects",
        "Renewable energy awareness",
        "Waste management education"
      ],
      impact: "15,000+ trees planted, 50+ plastic-free communities",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  ];

  return (
    <div className="pt-16 min-h-screen" data-testid="our-work-page">
      {/* Hero Section */}
      <section className="py-20 bg-muted" data-testid="work-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6" data-testid="work-title">
            Our <span className="font-script text-primary">Noble</span> Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="work-subtitle">
            Discover our comprehensive programs designed to create lasting change through holistic development.
          </p>
        </div>
      </section>

      {/* Programs */}
      {programs.map((program, index) => {
        const IconComponent = program.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section
            key={program.id}
            id={program.id}
            className={`py-20 ${isEven ? 'bg-card' : 'bg-muted'}`}
            data-testid={`program-${program.id}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <div className={`w-16 h-16 bg-${program.color}/10 rounded-full flex items-center justify-center mb-6`}>
                    <IconComponent className={`w-8 h-8 text-${program.color}`} />
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6" data-testid={`program-title-${program.id}`}>
                    {program.title}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid={`program-description-${program.id}`}>
                    {program.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4" data-testid={`program-initiatives-title-${program.id}`}>
                      Key Initiatives:
                    </h3>
                    <ul className="space-y-2">
                      {program.initiatives.map((initiative, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-3"
                          data-testid={`program-initiative-${program.id}-${idx}`}
                        >
                          <div className={`w-2 h-2 bg-${program.color} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="text-muted-foreground">{initiative}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`bg-${program.color}/5 rounded-lg p-6 border border-${program.color}/20`}>
                    <div className={`text-2xl font-bold text-${program.color} mb-2`} data-testid={`program-impact-${program.id}`}>
                      Impact
                    </div>
                    <p className="text-muted-foreground">{program.impact}</p>
                  </div>
                </div>
                
                <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <img
                    src={program.image}
                    alt={`${program.title} program`}
                    className="rounded-xl shadow-lg w-full"
                    data-testid={`program-image-${program.id}`}
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Call to Action */}
      <section className="py-20 bg-primary" data-testid="work-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6" data-testid="work-cta-title">
            Join Our Mission
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8" data-testid="work-cta-description">
            Whether through volunteering, donating, or spreading awareness, 
            your contribution can help us expand our impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/get-involved"
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              data-testid="work-cta-donate"
            >
              Donate Now
            </a>
            <a
              href="/get-involved"
              className="px-8 py-4 border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors"
              data-testid="work-cta-volunteer"
            >
              Become a Volunteer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
