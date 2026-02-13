import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Palette } from "lucide-react";
import { toast } from "sonner";
import customizeBg from "@/assets/customize-bg.jpg";
import customizeOverlay from "@/assets/customize-overlay.png";

const CustomizeStyle = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    garmentType: "",
    fabric: "",
    occasion: "",
    size: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your custom design request has been submitted! We'll contact you soon.");
    setOpen(false);
    setFormData({ garmentType: "", fabric: "", occasion: "", size: "", details: "" });
  };

  return (
    <section 
      id="customize" 
      className="py-20 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `url(${customizeBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      {/* Decorative overlays - left side */}
      <div 
        className="absolute left-0 top-1/4 w-64 h-96 opacity-20 pointer-events-none hidden lg:block"
        style={{
          backgroundImage: `url(${customizeOverlay})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center',
          transform: 'translateX(-20%)'
        }}
      ></div>
      
      {/* Decorative overlays - right side */}
      <div 
        className="absolute right-0 top-1/3 w-64 h-96 opacity-20 pointer-events-none hidden lg:block"
        style={{
          backgroundImage: `url(${customizeOverlay})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right center',
          transform: 'translateX(20%) scaleX(-1)'
        }}
      ></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Palette className="h-12 w-12 text-primary mr-3" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Customize your Style
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
            Have a unique Indo-Western style in mind? Tell us your vision and let our designers bring it to life!
          </p>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 hover:scale-105 transition-all">
                Start Designing
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">Create Your Custom Design</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="garmentType">Garment Type</Label>
                  <Select
                    value={formData.garmentType}
                    onValueChange={(value) => setFormData({ ...formData, garmentType: value })}
                  >
                    <SelectTrigger id="garmentType">
                      <SelectValue placeholder="Select garment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kurta">Kurta</SelectItem>
                      <SelectItem value="gown">Gown</SelectItem>
                      <SelectItem value="saree">Saree</SelectItem>
                      <SelectItem value="lehenga">Lehenga</SelectItem>
                      <SelectItem value="dress">Dress</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fabric">Fabric Preference</Label>
                  <Input
                    id="fabric"
                    placeholder="e.g., Silk, Cotton, Georgette"
                    value={formData.fabric}
                    onChange={(e) => setFormData({ ...formData, fabric: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="occasion">Occasion</Label>
                  <Input
                    id="occasion"
                    placeholder="e.g., Wedding, Party, Festival"
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="size">Size</Label>
                  <Select
                    value={formData.size}
                    onValueChange={(value) => setFormData({ ...formData, size: value })}
                  >
                    <SelectTrigger id="size">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="xs">XS</SelectItem>
                      <SelectItem value="s">S</SelectItem>
                      <SelectItem value="m">M</SelectItem>
                      <SelectItem value="l">L</SelectItem>
                      <SelectItem value="xl">XL</SelectItem>
                      <SelectItem value="xxl">XXL</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="images">Reference Images (Optional)</Label>
                  <Input id="images" type="file" multiple accept="image/*" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details">Additional Details</Label>
                  <Textarea
                    id="details"
                    placeholder="Tell us more about your vision..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit Design Request
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default CustomizeStyle;
