import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import contactBg from "@/assets/contact-bg.jpg";
import contactOverlay from "@/assets/contact-overlay.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    query: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, we'll show a toast. To enable email sending, user needs Lovable Cloud
    toast.success("Thank you for your message! We'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: "",
      contact: "",
      email: "",
      query: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section 
      id="contact" 
      className="py-20 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm"></div>
      
      {/* Decorative overlays - scattered */}
      <div 
        className="absolute left-12 top-1/4 w-48 h-64 opacity-25 pointer-events-none hidden lg:block"
        style={{
          backgroundImage: `url(${contactOverlay})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center'
        }}
      ></div>
      
      <div 
        className="absolute right-12 top-1/3 w-48 h-64 opacity-20 pointer-events-none hidden lg:block"
        style={{
          backgroundImage: `url(${contactOverlay})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right center',
          transform: 'scaleX(-1)'
        }}
      ></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to learn more about our collection? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-border/50 animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contact">Contact Number</Label>
                  <Input
                    id="contact"
                    name="contact"
                    type="tel"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email ID</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="query">Your Query</Label>
                  <Textarea
                    id="query"
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 transition-all hover:scale-105">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:snehal.23bce7455@vitapstudent.ac.in"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        snehal.23bce7455@vitapstudent.ac.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-foreground">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Connect With Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/varnavesh.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-accent to-primary text-white hover:scale-110 transition-transform"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/varnavesh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground italic">
                  "Fashion is the armor to survive the reality of everyday life. At VARNAVESH, 
                  we craft that armor with tradition, luxury, and fearless design."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
