import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Users, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies to deliver forward-thinking solutions.",
    },
    {
      icon: Code2,
      title: "Quality Code",
      description: "Our commitment to clean, maintainable, and scalable code ensures long-term success.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We work closely with you to understand and exceed your goals.",
    },
    {
      icon: Zap,
      title: "Agile & Fast",
      description: "Rapid development cycles and iterative improvements keep your project moving forward.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">CypherNest</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We are a tech software company dedicated to nurturing ideas and transforming them into 
            powerful digital solutions. At CypherNest, innovation meets expertise to create software 
            that drives businesses forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-primary text-primary-foreground shadow-glow animate-fade-in">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold">Our Mission</h3>
              <p className="text-lg opacity-90">
                To empower businesses and entrepreneurs with cutting-edge technology solutions that 
                transform ideas into reality. We believe in creating a nurturing environment where 
                innovation thrives and projects flourish.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
