export default function ImpactStatistics() {
  return (
    <section className="py-20 bg-card" data-testid="impact-statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="impact-title">
            Making Real Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="impact-subtitle">
            Every number represents a life touched, a community transformed, and hope restored.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-xl bg-primary/5 border border-primary/10" data-testid="impact-stat-women">
            <div className="text-5xl font-bold text-primary mb-4">1 in 4</div>
            <p className="text-lg text-muted-foreground">
              Indian women lack work opportunities.<br />
              <span className="text-primary font-semibold">We are changing that.</span>
            </p>
          </div>
          
          <div className="text-center p-8 rounded-xl bg-secondary/5 border border-secondary/10" data-testid="impact-stat-education">
            <div className="text-5xl font-bold text-secondary mb-4">40%</div>
            <p className="text-lg text-muted-foreground">
              Of rural children lack quality education.<br />
              <span className="text-secondary font-semibold">We bridge that gap.</span>
            </p>
          </div>
          
          <div className="text-center p-8 rounded-xl bg-green-500/5 border border-green-500/10" data-testid="impact-stat-environment">
            <div className="text-5xl font-bold text-green-500 mb-4">75%</div>
            <p className="text-lg text-muted-foreground">
              Less plastic waste in our partner communities.<br />
              <span className="text-green-500 font-semibold">Small steps, big change.</span>
            </p>
          </div>
        </div>
        
        {/* Progress indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-muted rounded-xl p-6" data-testid="progress-annual">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-foreground">Annual Goal Progress</span>
              <span className="text-primary font-bold">67%</span>
            </div>
            <div className="w-full bg-border rounded-full h-3">
              <div className="bg-primary h-3 rounded-full" style={{ width: "67%" }}></div>
            </div>
          </div>
          
          <div className="bg-muted rounded-xl p-6" data-testid="progress-fundraising">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-foreground">Fundraising Target</span>
              <span className="text-secondary font-bold">82%</span>
            </div>
            <div className="w-full bg-border rounded-full h-3">
              <div className="bg-secondary h-3 rounded-full" style={{ width: "82%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
