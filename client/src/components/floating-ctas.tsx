import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function FloatingCTAs() {
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "हि" : "EN");
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40" data-testid="floating-ctas">
      <Link href="/get-involved">
        <Button
          size="icon"
          className="w-14 h-14 bg-secondary text-secondary-foreground rounded-full shadow-lg hover:bg-secondary/90 transition-all duration-300 hover:scale-110"
          title="Quick Donate"
          data-testid="floating-button-donate"
        >
          <Heart className="w-6 h-6" />
        </Button>
      </Link>
      
      <Button
        size="icon"
        variant="outline"
        className="w-14 h-14 bg-card border border-border text-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        onClick={toggleLanguage}
        title="Hindi / English"
        data-testid="floating-button-language"
      >
        <span className="text-xs font-bold">{language}</span>
      </Button>
    </div>
  );
}
