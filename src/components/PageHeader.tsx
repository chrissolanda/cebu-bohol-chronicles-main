interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  return (
    <div className="relative h-64 md:h-80 overflow-hidden">
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
        </>
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-ocean-wave to-accent" />
      )}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-2 animate-fade-in">
          {title}
        </h1>
        <p className="text-lg text-primary-foreground/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
