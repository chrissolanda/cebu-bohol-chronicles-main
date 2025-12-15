interface Activity {
  time: string;
  title: string;
  description: string;
  image: string;
}

interface DayItineraryProps {
  day: number;
  date: string;
  activities: Activity[];
}

const DayItinerary = ({ day, date, activities }: DayItineraryProps) => {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-serif font-bold text-lg">
          {day}
        </div>
        <div>
          <h3 className="text-xl font-serif font-semibold text-foreground">Day {day}</h3>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
      </div>

      <div className="space-y-6 ml-6 border-l-2 border-border pl-8">
        {activities.map((activity, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-ocean-medium border-2 border-card" />
            <div className="bg-card rounded-xl border border-border overflow-hidden card-hover">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h4 className="text-lg font-serif font-semibold text-foreground">
                    {activity.title}
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayItinerary;
