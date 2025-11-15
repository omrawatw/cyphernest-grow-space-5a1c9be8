import { Card } from "@/components/ui/card";
import { Smartphone, Cloud, Database, Globe, Shield, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices for performance and scalability.",
      features: ["React & Next.js", "Full-stack solutions", "Responsive design"],
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: ["iOS & Android", "Cross-platform", "Progressive Web Apps"],
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions for modern applications.",
      features: ["AWS & Azure", "DevOps", "Microservices"],
    },
    {
      icon: Database,
      title: "Data Solutions",
      description: "Robust database design and data management systems for your business needs.",
      features: ["Database design", "Data analytics", "Big data processing"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and user data.",
      features: ["Security audits", "Penetration testing", "Compliance"],
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "Strategic consulting to modernize your business processes and technology stack.",
      features: ["Tech consulting", "Process automation", "Legacy modernization"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive tech solutions tailored to your business needs. From concept to deployment, 
            we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 group hover:shadow-glow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
