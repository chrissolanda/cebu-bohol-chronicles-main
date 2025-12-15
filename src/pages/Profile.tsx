import { Github, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";



const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Profile"
        subtitle="About Chriss Laurence Olanda"
        backgroundImage="https://travelogue-portfolio.vercel.app/assets/departure-5-C-1MCMZL.jpg"
      />

      <main className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-start">
              <div className="w-48 h-48 rounded-full overflow-hidden">
                <img
                  src="src/assets/Profile.png"
                  alt="Chriss Laurence Olanda"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="text-left md:text-right">
              <h3 className="text-3xl font-semibold text-foreground mb-3">Chriss Laurence Olanda</h3>
              <p className="text-lg text-muted-foreground mb-6">Student • Explorer • Programmer</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Passionate about discovering new cultures, capturing moments, and sharing educational experiences through travel.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-foreground">09692276848</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-foreground">chrisslaurence.olanda@hcdc.edu.ph</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <a href="https://github.com/chrissolanda" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    github.com/chrissolanda
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mb-12">
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/">
                <Button variant="outline" size="lg">Home</Button>
              </Link>
              <Link to="/cebu">
                <Button variant="outline" size="lg">Cebu</Button>
              </Link>
              <Link to="/bohol">
                <Button variant="outline" size="lg">Bohol</Button>
              </Link>
              <Link to="/journal">
                <Button variant="outline" size="lg">Journal</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto">
          {/* GitHub Projects */}
          <div>
            <h4 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">GitHub Projects</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="https://github.com/chrissolanda/MyPortfolio" className="block p-6 bg-card rounded-lg border hover:shadow-md transition-shadow" target="_blank" rel="noopener noreferrer">
                <h5 className="text-xl font-medium text-foreground mb-2">MyPortfolio</h5>
                <p className="text-muted-foreground">Personal portfolio website showcasing projects and skills</p>
              </a>
              <a href="https://github.com/chrissolanda/PT_CRUD-POSTMAN" className="block p-6 bg-card rounded-lg border hover:shadow-md transition-shadow" target="_blank" rel="noopener noreferrer">
                <h5 className="text-xl font-medium text-foreground mb-2">PT_CRUD-POSTMAN</h5>
                <p className="text-muted-foreground">CRUD operations with Postman integration</p>
              </a>
              <a href="https://github.com/chrissolanda/HCI-final-project" className="block p-6 bg-card rounded-lg border hover:shadow-md transition-shadow" target="_blank" rel="noopener noreferrer">
                <h5 className="text-xl font-medium text-foreground mb-2">HCI-final-project</h5>
                <p className="text-muted-foreground">Final project for Human-Computer Interaction course</p>
              </a>
            </div>
          </div>
        </section>
      </main>

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

export default Profile;
