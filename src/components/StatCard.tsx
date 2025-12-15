interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const StatCard = ({ value, label, icon }: StatCardProps) => {
  return (
    <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-border card-hover">
      <div className="text-primary mb-2">{icon}</div>
      <span className="text-3xl font-serif font-bold text-foreground">{value}</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
};

export default StatCard;
