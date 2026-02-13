import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";
import product9 from "@/assets/product-9.jpg";
import { toast } from "sonner";
import shopBg from "@/assets/shop-bg.jpg";
import shopOverlay from "@/assets/shop-overlay.png";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

const outfits: Product[] = [
  { id: 1, name: "Tiger and Triumph ", price: "₹2,999", image: product1, category: "Premium" },
  { id: 2, name: "Lotus and Leather", price: "₹15,000", image: product2, category: "Luxury" },
  { id: 3, name: "Peacock and Power", price: "₹12,200", image: product3, category: "Premium" },
  { id: 4, name: "Reagle Fusion", price: "₹7,599", image: product4, category: "Classic" },
  { id: 5, name: "Crimson Confluence ", price: "₹4,500", image: product5, category: "Luxury" },
  { id: 6, name: "Ivory Valor", price: "₹4,000", image: product6, category: "Luxury" },
];

const accessories: Product[] = [
  { id: 7, name: "The Royal Vision", price: "₹699", image: product7, category: "Premium" },
  { id: 8, name: "The Maharaja Knot", price: "₹2,300", image: product8, category: "Classic" },
  { id: 9, name: "The Lotus Bind", price: "₹5,800", image: product9, category: "Luxury" },
  { id: 10, name: "Emerald Statement Ring", price: "₹6,900", image: product4, category: "Premium" },
  { id: 11, name: "Traditional Maang Tikka", price: "₹4,500", image: product5, category: "Luxury" },
  { id: 12, name: "Ruby Choker Set", price: "₹11,200", image: product6, category: "Premium" },
];

const Shop = () => {
  const handleAddToCart = (productName: string) => {
    toast.success(`${productName} added to cart!`);
  };

  const handleViewDetails = (productName: string) => {
    toast.info(`Viewing details for ${productName}`);
  };

  // ✅ Fixed: Independent animation timing
  const renderProductGrid = (products: Product[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scale-80">
      {products.map((product, index) => (
        <Card
          key={product.id}
          className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-slide-up border-border/50"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardHeader className="p-0">
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "9/16" }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* 
              <div className="absolute top-4 right-4">
                <span className="bg-gold text-luxury-black px-3 py-1 text-xs font-semibold rounded-full">
                  {product.category}
                </span>
              </div>
              */}
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              {product.name}
            </h3>
            <p className="text-2xl font-bold text-primary">{product.price}</p>
          </CardContent>
          <CardFooter className="p-6 pt-0 flex gap-3">
            <Button
              variant="outline"
              className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => handleViewDetails(product.name)}
            >
              View Details
            </Button>
            <Button
              className="flex-1 bg-primary hover:bg-primary/90 transition-all hover:scale-105"
              onClick={() => handleAddToCart(product.name)}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );

  return (
    <section
      id="shop"
      className="py-20 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `url(${shopBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/75 backdrop-blur-sm"></div>

      {/* Decorative overlays - left side */}
      <div
        className="absolute left-0 top-1/4 w-80 h-96 opacity-15 pointer-events-none hidden lg:block"
        style={{
          backgroundImage: `url(${shopOverlay})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
          transform: "translateX(-25%)",
        }}
      ></div>

      {/* Decorative overlays - right side */}
      <div
        className="absolute right-0 bottom-1/4 w-80 h-96 opacity-15 pointer-events-none hidden lg:block"
        style={{
          backgroundImage: `url(${shopOverlay})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          transform: "translateX(25%) scaleX(-1)",
        }}
      ></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Collection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
            Discover our curated selection of Indo-Western luxury pieces, where
            tradition meets contemporary elegance.
          </p>
        </div>

        {/* Outfits Section */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
            Outfits
          </h3>
          {renderProductGrid(outfits)}
        </div>

        {/* Accessories Section */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
            Accessories
          </h3>
          {renderProductGrid(accessories.slice(0, 3))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
