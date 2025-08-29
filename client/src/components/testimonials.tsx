export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Engineering Student",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      alt: "Priya, education program beneficiary",
      quote: "✨ The scholarship program was a turning point in my life! Today I'm studying engineering and determined to give back. Education truly transforms dreams into reality.",
      emoji: "🎓"
    },
    {
      name: "Sunita Devi",
      role: "Successful Entrepreneur",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      alt: "Sunita, women empowerment program graduate",
      quote: "🌟 From hesitant learner to confident businesswoman! The skills training didn't just teach me tailoring - it gave me wings. I now employ 5 women and we're thriving together!",
      emoji: "👩‍💼"
    },
    {
      name: "Rajesh Kumar",
      role: "Community Leader & Volunteer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      alt: "Rajesh, spiritual program participant",
      quote: "🙏 The Vedanta teachings brought clarity to my life during turbulent times. Now I'm committed to sharing this ancient wisdom with others who need hope and guidance.",
      emoji: "🕉️"
    }
  ];

  return (
    <section className="py-20 bg-muted" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="testimonials-title">
            Stories of Hope
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="testimonials-subtitle">
            Real stories from real people whose lives have been transformed through our programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover-lift transform hover:scale-105 border border-transparent hover:border-primary/20"
              data-testid={`testimonial-${index}`}
            >
              <div className="relative mx-auto mb-6 w-20 h-20">
                <img
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-20 h-20 rounded-full object-cover ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300"
                  data-testid={`testimonial-image-${index}`}
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm">
                  {testimonial.emoji}
                </div>
              </div>
              <blockquote className="text-muted-foreground italic mb-6 text-center" data-testid={`testimonial-quote-${index}`}>
                "{testimonial.quote}"
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-foreground" data-testid={`testimonial-name-${index}`}>
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground" data-testid={`testimonial-role-${index}`}>
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
