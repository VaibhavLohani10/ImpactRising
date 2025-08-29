export default function Stories() {
  const stories = [
    {
      id: 1,
      category: "Education",
      title: "New School Opens in Rural Rajasthan",
      excerpt: "With support from our education program, 200 children now have access to quality primary education in their village.",
      date: "Dec 15, 2023",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      color: "primary"
    },
    {
      id: 2,
      category: "Women Empowerment",
      title: "50 Women Graduate from Skills Program",
      excerpt: "Our latest batch of women entrepreneurs are now ready to start their own businesses with newfound skills and confidence.",
      date: "Dec 10, 2023",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      color: "secondary"
    },
    {
      id: 3,
      category: "Environment",
      title: "5,000 Trees Planted This Month",
      excerpt: "Our biggest tree plantation drive yet brings us closer to our goal of creating greener, healthier communities.",
      date: "Dec 5, 2023",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      color: "green-500"
    },
    {
      id: 4,
      category: "Spiritual Growth",
      title: "Community Meditation Center Opens",
      excerpt: "A new meditation center provides peaceful space for spiritual practice and Vedantic study for 500 community members.",
      date: "Nov 28, 2023",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      color: "accent"
    },
    {
      id: 5,
      category: "Education",
      title: "Digital Library Transforms Learning",
      excerpt: "Introduction of digital resources in rural schools enhances learning experience for hundreds of students.",
      date: "Nov 20, 2023",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      color: "primary"
    },
    {
      id: 6,
      category: "Women Empowerment",
      title: "Microfinance Program Expands",
      excerpt: "New microfinance initiatives support 100 women entrepreneurs in starting sustainable small businesses.",
      date: "Nov 15, 2023",
      image: "https://images.unsplash.com/photo-1551836022-8b2858c9c69b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      color: "secondary"
    }
  ];

  return (
    <div className="pt-16 min-h-screen" data-testid="stories-page">
      {/* Hero Section */}
      <section className="py-20 bg-muted" data-testid="stories-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6" data-testid="stories-title">
            <span className="font-script text-primary">Inspiring</span> Stories & Updates
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="stories-subtitle">
            Stay updated with our latest activities, impact stories, and community events.
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-20 bg-card" data-testid="featured-story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm text-primary font-medium mb-2" data-testid="featured-category">
                Featured Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6" data-testid="featured-title">
                {stories[0].title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="featured-excerpt">
                {stories[0].excerpt} Our education program has transformed not just individual lives but entire communities, 
                creating a ripple effect of positive change that will benefit generations to come.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground" data-testid="featured-date">
                  {stories[0].date}
                </span>
                <button className="text-primary hover:text-primary/80 font-medium" data-testid="featured-read-more">
                  Read Full Story →
                </button>
              </div>
            </div>
            <div>
              <img
                src={stories[0].image}
                alt={stories[0].title}
                className="rounded-xl shadow-lg w-full"
                data-testid="featured-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* All Stories */}
      <section className="py-20 bg-muted" data-testid="all-stories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="all-stories-title">
              Latest Updates
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="all-stories-subtitle">
              Discover more inspiring stories and updates from our ongoing programs and initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.slice(1).map((story) => (
              <article
                key={story.id}
                className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                data-testid={`story-${story.id}`}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                  data-testid={`story-image-${story.id}`}
                />
                <div className="p-6">
                  <div className={`text-sm text-${story.color} font-medium mb-2`} data-testid={`story-category-${story.id}`}>
                    {story.category}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3" data-testid={`story-title-${story.id}`}>
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground mb-4" data-testid={`story-excerpt-${story.id}`}>
                    {story.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground" data-testid={`story-date-${story.id}`}>
                      {story.date}
                    </span>
                    <button className={`text-${story.color} hover:text-${story.color}/80 font-medium`} data-testid={`story-read-more-${story.id}`}>
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium" data-testid="load-more-stories">
              Load More Stories
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary" data-testid="newsletter-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6" data-testid="newsletter-title">
            Never Miss an Update
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8" data-testid="newsletter-description">
            Subscribe to our newsletter to receive the latest stories, impact updates, and opportunities to get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary-foreground"
              data-testid="newsletter-email-input"
            />
            <button
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 font-medium whitespace-nowrap"
              data-testid="newsletter-subscribe-button"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
