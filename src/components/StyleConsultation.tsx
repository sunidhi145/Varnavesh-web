import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Video } from "lucide-react";
import { toast } from "sonner";
import consultationBg from "@/assets/consultation-bg.jpg";
import consultationOverlay from "@/assets/consultation-overlay.png";

const StyleConsultation = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your consultation has been booked! We'll send you a confirmation email shortly.");
    setOpen(false);
    setFormData({ name: "", email: "", date: "", time: "", notes: "" });
  };

  return (
    <section 
      id="consultation" 
      className="py-20 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `url(${consultationBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm"></div>
      
      {/* Decorative illustration - bottom left */}
      <div 
        className="absolute left-8 bottom-8 w-72 h-72 opacity-30 pointer-events-none hidden lg:block"
        style={{
          backgroundImage: `url(${consultationOverlay})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left bottom'
        }}
      ></div>
      
      {/* Decorative illustration - top right */}
      <div 
        className="absolute right-8 top-8 w-64 h-64 opacity-25 pointer-events-none hidden lg:block"
        style={{
          backgroundImage: `url(${consultationOverlay})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right top',
          transform: 'scaleX(-1)'
        }}
      ></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Video className="h-12 w-12 text-primary mr-3" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Personal Style Consultation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
            Unsure how to mix and match? Book a free 15-minute video consultation with our expert Indo-Western stylists for personalized advice, fitting guidance, and exclusive recommendations.
          </p>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 hover:scale-105 transition-all">
                Book Your Free Call
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">Book Your Consultation</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">What do you need help with?</Label>
                  <Textarea
                    id="notes"
                    placeholder="Tell us briefly what you'd like to discuss..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Confirm Booking
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default StyleConsultation;
