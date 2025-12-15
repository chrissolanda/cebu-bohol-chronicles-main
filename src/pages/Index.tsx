import { Calendar, MapPin, Compass, Waves } from "lucide-react";
import Navbar from "@/components/Navbar";
import StatCard from "@/components/StatCard";
import NavigationCard from "@/components/NavigationCard";

const Index = () => {
  const stats = [
    { value: "4", label: "Days", icon: <Calendar className="h-8 w-8" /> },
    { value: "2", label: "Islands", icon: <MapPin className="h-8 w-8" /> },
    { value: "2025", label: "Year", icon: <Compass className="h-8 w-8" /> },
  ];

  const destinations = [
    {
      to: "/cebu",
      title: "Cebu",
      description: "3 days of adventure in the Queen City of the South",
      image: "https://www.visitphilippines.org/wp-content/uploads/2016/04/Visit-Philippines-Cebu-City-780x405.jpg",
    },
    {
      to: "/bohol",
      title: "Bohol",
      description: "1 day exploring the island's natural wonders",
      image: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=800&q=80",
    },
    {
      to: "/journal",
      title: "Journal",
      description: "Certificates and written reflections from our trip",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-ocean-gradient flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden flex-grow">
        <div className="absolute inset-0 opacity-10">
          <Waves className="w-full h-full text-primary" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6 animate-fade-in">
              Educational Tour 2025
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Cebu & Bohol
              <span className="block text-primary">Adventure</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              A 4-day educational journey through the beautiful islands of Cebu and Bohol.
              Exploring history, culture, and natural wonders of the Visayas region.
            </p>
          </div>
        </div>
      </section>





      {/* Stats Section */}
      <section className="py-12 border-y border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Cards - Centered at bottom */}
      <section className="py-16 md:py-24 flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Explore Our Journey
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Click on any destination to view detailed itineraries, photos, and memories from our trip.
            </p>
          </div>
          <div className="flex justify-center gap-6">
            {destinations.map((destination, index) => (
              <NavigationCard key={index} {...destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Educational Trip Portfolio • Cebu & Bohol 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
