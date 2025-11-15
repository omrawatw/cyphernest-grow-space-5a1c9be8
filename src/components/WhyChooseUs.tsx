import { Card } from "@/components/ui/card";
import { Award, Clock, HeadphonesIcon, Target } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Proven Expertise",
      description: "Years of experience delivering successful projects across various industries and technologies.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We respect deadlines and ensure your project is delivered on schedule without compromising quality.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on delivering measurable results that align with your business objectives and KPIs.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Dedicated support team available round the clock to address your concerns and queries.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-primary">CypherNest?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine technical excellence with a client-first approach to deliver 
            solutions that exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
