import HeroSection from "@/components/hero-section";
import PillarsSection from "@/components/pillars-section";
import ImpactStatistics from "@/components/impact-statistics";
import Testimonials from "@/components/testimonials";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen" data-testid="home-page">
      <HeroSection />
      
      {/* Mission Section */}
      <section className="py-16 bg-card" data-testid="mission-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6" data-testid="mission-title">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8" data-testid="mission-description">
            We believe in the transformative power of holistic development. Through education, empowerment, 
            spirituality, and environmental consciousness, we're creating sustainable change in communities 
            across India.
          </p>
          <Link href="/about">
            <span className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium cursor-pointer" data-testid="link-read-story">
              Read Our Story
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
          </Link>
        </div>
      </section>

      <PillarsSection />
      <ImpactStatistics />
      <Testimonials />
    </div>
  );
}
