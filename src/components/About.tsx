import { Card, CardContent, CardHeader } from "@/components/ui/card";
import aboutBg from "@/assets/about-bg.jpg";
import aboutOverlay from "@/assets/about-overlay.png";

// 🖼️ Import your team images here
import avipsaImg from "@/assets/avipsa.jpg"; // Avipsa image
import sunidhiImg from "@/assets/sunidhi.jpg"; // Sunidhi image
import snehalImg from "@/assets/snehal.jpg"; // Snehal image
import shoyebImg from "@/assets/shoyeb.jpg"; // Shoyeb image

// ✅ All members now include image fields
const teamMembers = [
  { name: "Avipsa Maitra", role: "Lead Designer", image: avipsaImg },
  { name: "Sunidhi Baroorkar", role: "Lead Stylist", image: sunidhiImg },
  { name: "Snehal Tripathy", role: "Marketing Manager", image: snehalImg },
  { name: "Shoyeb M", role: "Senior Developer", image: shoyebImg },
];

const About = () => {
  return (
    <section 
      id="about" 
      className="py-20 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `url(${aboutBg})`, // background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      {/* Decorative overlays - top left */}
      <div 
        className="absolute left-8 top-8 w-64 h-64 opacity-20 pointer-events-none hidden lg:block"
        style={{
          backgroundImage: `url(${aboutOverlay})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left top'
        }}
      ></div>
      
      {/* Decorative overlays - bottom right */}
      <div 
        className="absolute right-8 bottom-8 w-64 h-64 opacity-20 pointer-events-none hidden lg:block"
        style={{
          backgroundImage: `url(${aboutOverlay})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right bottom',
          transform: 'rotate(180deg)'
        }}
      ></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About VARNAVESH
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              VARNAVESH is where heritage meets innovation. We are a luxury Indo-Western clothing brand 
              that celebrates the richness of traditional craftsmanship while embracing contemporary design sensibilities.
            </p>
            <p>
              Each piece in our collection is thoughtfully created to honor India's textile legacy, 
              reimagined for the modern, fearless individual. From intricate embroidery to bold silhouettes, 
              we blend the best of both worlds to create clothing that tells a story.
            </p>
            <p>
              Our design philosophy centers on empowering you to express your unique identity—whether you're 
              attending a celebration, making a statement at work, or embracing your everyday elegance.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
            Meet Our Team
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  {/* 🖼️ Team Member Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mx-auto mb-4 h-28 w-28 rounded-full object-cover border-4 border-primary shadow-md"
                  />
                </CardHeader>

                <CardContent>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">
                    {member.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
