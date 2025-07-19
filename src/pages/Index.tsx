import { Link } from "react-router-dom";
import { ArrowRight, Star, Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/ui/navbar";
import { ProductCard } from "@/components/ui/product-card";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-desserts.jpg";

const featuredProducts = products.slice(0, 4);

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    comment: "The best desserts in town! The strawberry ice cream is absolutely divine.",
  },
  {
    name: "Mike Chen",
    avatar: "/api/placeholder/60/60", 
    rating: 5,
    comment: "Amazing quality and beautiful presentation. My kids love the rainbow cake!",
  },
  {
    name: "Emma Davis",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    comment: "Fresh ingredients and incredible flavors. SweetNook never disappoints!",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero/80" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-slide-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display text-foreground mb-6">
              Welcome to{" "}
              <span className="bg-gradient-candy bg-clip-text text-transparent">
                SweetNook
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Indulge in our handcrafted desserts made with love and the finest ingredients. From creamy ice creams to decadent cakes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="group">
                <Link to="/products">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Explore Sweets
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">🍦</span>
          </div>
        </div>
        <div className="absolute top-32 right-16 animate-sweet-bounce">
          <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
            <span className="text-xl">🍰</span>
          </div>
        </div>
        <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-14 h-14 bg-secondary/30 rounded-full flex items-center justify-center">
            <span className="text-xl">🍬</span>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Featured Desserts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular treats that keep customers coming back for more
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of happy dessert lovers!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-card rounded-3xl p-8 sm:p-12 shadow-float">
            <Heart className="w-16 h-16 text-primary mx-auto mb-6" fill="currentColor" />
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Ready to Satisfy Your Sweet Tooth?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Order now and get your favorite desserts delivered fresh to your doorstep
            </p>
            <Button size="lg" asChild>
              <Link to="/products">
                Order Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
