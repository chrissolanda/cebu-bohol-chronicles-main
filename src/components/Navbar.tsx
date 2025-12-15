import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Compass, MapPin, BookOpen, ClipboardCheck, Home, User } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/cebu", label: "Cebu", icon: MapPin },
  { to: "/bohol", label: "Bohol", icon: MapPin },
  { to: "/journal", label: "Journal", icon: BookOpen },
  { to: "/profile", label: "Profile", icon: User },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary">
            <Compass className="h-6 w-6" />
            <span className="font-serif text-xl font-semibold">EduTrip 2025</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  location.pathname === link.to
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                )}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "p-2 rounded-lg transition-all duration-200",
                  location.pathname === link.to
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary"
                )}
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
