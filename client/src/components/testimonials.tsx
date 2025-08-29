export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Engineering Student",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      alt: "Priya, education program beneficiary",
      quote: "The scholarship program helped me complete my studies. Now I'm studying engineering and want to help other children like me."
    },
    {
      name: "Sunita Devi",
      role: "Small Business Owner",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      alt: "Sunita, women empowerment program graduate",
      quote: "The skills training program gave me confidence to start my own tailoring business. I now employ three other women."
    },
    {
      name: "Rajesh Kumar",
      role: "Volunteer & Teacher",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      alt: "Rajesh, spiritual program participant",
      quote: "The Vedanta workshops helped me find inner peace during difficult times. Now I volunteer to share this wisdom with others."
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
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              data-testid={`testimonial-${index}`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-6"
                data-testid={`testimonial-image-${index}`}
              />
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
