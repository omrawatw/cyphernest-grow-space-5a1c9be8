import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your project? Let's discuss how we can help turn your ideas into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">contact@cyphernest.com</p>
                  <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                  <p className="text-muted-foreground">Available Mon-Fri, 9am-6pm EST</p>
                  <p className="text-sm text-muted-foreground mt-1">Instant support for urgent queries</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-primary text-primary-foreground shadow-glow">
              <h3 className="text-2xl font-bold mb-4">Start Your Journey</h3>
              <p className="opacity-90 mb-4">
                Join over 50+ satisfied clients who have transformed their ideas into successful 
                digital products with CypherNest.
              </p>
              <div className="flex items-center space-x-2 text-sm opacity-90">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/20 border-2 border-primary" />
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/20 border-2 border-primary" />
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/20 border-2 border-primary" />
                </div>
                <span>50+ happy clients</span>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-card border-border animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="bg-background border-border resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow group"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
