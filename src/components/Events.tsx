import { Card } from "@/components/ui/card";
import { Calendar, Users, Lightbulb, Rocket, Code, Trophy, Laugh } from "lucide-react";
import { Button } from "@/components/ui/button";

const Events = () => {
  const events = [
    {
      icon: Code,
      title: "Tech Workshops",
      description: "Hands-on sessions covering the latest technologies and development practices.",
      date: "Monthly",
      type: "Workshop",
    },
    {
      icon: Rocket,
      title: "Startup Meetups",
      description: "Network with fellow entrepreneurs and share insights on building successful startups.",
      date: "Bi-weekly",
      type: "Networking",
    },
    {
      icon: Laugh,
      title: "Meme Battle",
      description: "Epic showdown of creativity and humor! Create the funniest tech memes and compete for glory.",
      date: "Monthly",
      type: "Competition",
    },
    {
      icon: Trophy,
      title: "Hackathons",
      description: "48-hour coding marathons where ideas come to life with innovation and creativity.",
      date: "Quarterly",
      type: "Competition",
    },
    {
      icon: Lightbulb,
      title: "Innovation Sessions",
      description: "Brainstorming and ideation workshops to turn concepts into actionable projects.",
      date: "Weekly",
      type: "Workshop",
    },
    {
      icon: Users,
      title: "Tech Talks",
      description: "Industry experts share knowledge on emerging trends and best practices.",
      date: "Monthly",
      type: "Seminar",
    },
    {
      icon: Calendar,
      title: "Developer Conferences",
      description: "Large-scale events bringing together developers, designers, and tech enthusiasts.",
      date: "Annually",
      type: "Conference",
    },
  ];

  return (
    <section id="events" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join our community events where innovation meets collaboration. 
            Connect, learn, and grow with fellow tech enthusiasts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {events.map((event, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 group hover:shadow-glow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <event.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                  {event.type}
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              <p className="text-muted-foreground mb-4">{event.description}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2 text-primary" />
                {event.date}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
