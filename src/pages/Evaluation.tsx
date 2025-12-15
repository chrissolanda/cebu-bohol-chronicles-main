import { Star, ThumbsUp, MessageSquare, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const evaluationCategories = [
  {
    category: "Tour Organization",
    rating: 5,
    comment: "The tour was exceptionally well-organized. All activities were planned with precision, and the schedule was followed smoothly throughout the trip.",
  },
  {
    category: "Accommodations",
    rating: 4,
    comment: "Hotels were clean and comfortable. Great locations with easy access to attractions. Breakfast buffets were satisfying.",
  },
  {
    category: "Transportation",
    rating: 5,
    comment: "Air-conditioned buses were comfortable for long drives. Ferry rides were well-timed and the vessels were clean.",
  },
  {
    category: "Tour Guide",
    rating: 5,
    comment: "Our tour guide was knowledgeable, enthusiastic, and made the experience educational and fun. Always ensured everyone's safety and comfort.",
  },
  {
    category: "Educational Value",
    rating: 5,
    comment: "Learned extensively about Philippine history, culture, and natural heritage. The trip perfectly balanced education with enjoyment.",
  },
  {
    category: "Food & Dining",
    rating: 4,
    comment: "Meals were delicious and showcased local cuisine. The Loboc River lunch cruise was a highlight. Variety could be slightly improved.",
  },
];

const highlights = [
  "Chocolate Hills viewing experience",
  "Meeting the Philippine Tarsiers",
  "Loboc River floating lunch",
  "Historical tour of Cebu City",
  "Panglao Beach sunrise",
  "Temple of Leah architecture",
];

const improvements = [
  "More free time for personal exploration",
  "Option for adventure activities like diving",
  "Additional local community interactions",
];

const Evaluation = () => {
  const overallRating = (
    evaluationCategories.reduce((sum, cat) => sum + cat.rating, 0) /
    evaluationCategories.length
  ).toFixed(1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Tour Evaluation"
        subtitle="Feedback & Assessment"
      />

      <main className="container mx-auto px-4 py-12">
        {/* Overall Rating */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-center text-primary-foreground">
            <h2 className="text-lg font-medium mb-2">Overall Rating</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-6xl font-serif font-bold">{overallRating}</span>
              <span className="text-2xl">/5</span>
            </div>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-8 w-8 ${
                    star <= Math.round(Number(overallRating))
                      ? "fill-current"
                      : "opacity-40"
                  }`}
                />
              ))}
            </div>
            <p className="mt-4 text-primary-foreground/90">
              An exceptional educational experience
            </p>
          </div>
        </section>

        {/* Category Ratings */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-serif font-bold text-foreground">Category Ratings</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {evaluationCategories.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 card-hover"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-foreground">{item.category}</h3>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= item.rating
                            ? "fill-primary text-primary"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{item.comment}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights & Improvements */}
        <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Highlights */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <ThumbsUp className="h-5 w-5 text-accent" />
              <h3 className="text-xl font-serif font-semibold text-foreground">Trip Highlights</h3>
            </div>
            <ul className="space-y-3">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-medium">
                    ✓
                  </span>
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Suggestions */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-serif font-semibold text-foreground">Suggestions</h3>
            </div>
            <ul className="space-y-3">
              {improvements.map((improvement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-medium">
                    →
                  </span>
                  <span className="text-muted-foreground">{improvement}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="max-w-4xl mx-auto mt-12">
          <div className="bg-ocean-light rounded-2xl p-8 text-center">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
              Final Thoughts
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              This educational tour to Cebu and Bohol was an unforgettable experience that perfectly 
              combined learning with adventure. The rich history, stunning natural landscapes, and 
              warm hospitality of the Visayan people left a lasting impression. I highly recommend 
              this tour to anyone seeking an educational and enriching travel experience in the Philippines.
            </p>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-border bg-card/50 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Educational Trip Portfolio • Cebu & Bohol 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Evaluation;
