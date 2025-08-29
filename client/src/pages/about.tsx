export default function About() {
  const values = [
    { sanskrit: "Seva", english: "Service" },
    { sanskrit: "Satya", english: "Truth" },
    { sanskrit: "Shiksha", english: "Education" },
    { sanskrit: "Samaan", english: "Equality" },
    { sanskrit: "Shraddha", english: "Faith" },
    { sanskrit: "Sahbhagita", english: "Participation" },
    { sanskrit: "Parivartan", english: "Change" },
    { sanskrit: "Jal-Vayu-Mati", english: "Water-Air-Earth" }
  ];

  return (
    <div className="pt-16 min-h-screen" data-testid="about-page">
      {/* Hero Section */}
      <section className="py-20 bg-muted" data-testid="about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6" data-testid="about-title">
            About Seva Foundation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="about-subtitle">
            Founded in 2015, we emerged from a simple belief: that sustainable change comes through holistic development.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-card" data-testid="about-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6" data-testid="about-foundation-title">
                Our Foundation
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="about-foundation-description">
                Founded in 2015, Seva Foundation emerged from a simple belief: that sustainable change 
                comes through holistic development. We've dedicated ourselves to addressing the 
                interconnected challenges facing communities across India.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2" data-testid="mission-title">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground" data-testid="mission-text">
                    To empower communities through education, women's empowerment, spiritual growth, 
                    and environmental stewardship, creating lasting positive change.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2" data-testid="vision-title">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground" data-testid="vision-text">
                    A thriving India where every individual has access to quality education, 
                    dignified employment, spiritual fulfillment, and a healthy environment.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Seva Foundation team and volunteers"
                className="rounded-xl shadow-lg w-full"
                data-testid="about-team-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted" data-testid="core-values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="values-title">
              Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="values-subtitle">
              Our Sanskrit-rooted values guide every action we take and every program we implement.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-lg hover:shadow-md transition-shadow"
                data-testid={`value-${index}`}
              >
                <div className="font-semibold text-primary text-lg mb-2" data-testid={`value-sanskrit-${index}`}>
                  {value.sanskrit}
                </div>
                <div className="text-sm text-muted-foreground" data-testid={`value-english-${index}`}>
                  {value.english}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-card" data-testid="our-story-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="story-title">
              Our Story
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-testid="story-paragraph-1">
              In 2015, a group of passionate individuals came together with a shared vision: to create meaningful 
              change in India's most underserved communities. What started as weekend volunteer work in local 
              schools has grown into a comprehensive foundation touching thousands of lives.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-testid="story-paragraph-2">
              We recognized early on that true development cannot happen in isolation. A child's education means 
              little without their mother's economic empowerment. Environmental protection requires spiritual 
              awareness. Women's empowerment needs educational support. This understanding shaped our holistic 
              approach.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="story-paragraph-3">
              Today, Seva Foundation operates across multiple states in India, but our core belief remains 
              unchanged: every individual deserves the opportunity to thrive, and sustainable change comes 
              through addressing root causes, not just symptoms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
