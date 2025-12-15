import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface NavigationCardProps {
  to: string;
  title: string;
  description: string;
  image: string;
}

const NavigationCard = ({ to, title, description, image }: NavigationCardProps) => {
  return (
    <Link to={to} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border card-hover">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-serif font-semibold text-primary-foreground mb-1">{title}</h3>
          <p className="text-sm text-primary-foreground/80 mb-3">{description}</p>
          <div className="flex items-center gap-2 text-primary-foreground text-sm font-medium">
            <span>Explore</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NavigationCard;
