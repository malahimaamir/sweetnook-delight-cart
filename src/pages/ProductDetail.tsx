import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Plus, Minus, Heart, Star, ShoppingCart } from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [sugarLevel, setSugarLevel] = useState("regular");
  const [isLiked, setIsLiked] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const handleToppingToggle = (topping: string) => {
    setSelectedToppings(prev => 
      prev.includes(topping) 
        ? prev.filter(t => t !== topping)
        : [...prev, topping]
    );
  };

  const calculateTotal = () => {
    let total = product.price * quantity;
    // Add $0.50 for each topping
    total += selectedToppings.length * 0.5;
    return total;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/products">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-card shadow-card">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge variant="destructive" className="text-lg px-4 py-2">
                    Out of Stock
                  </Badge>
                </div>
              )}
            </div>
            
            {/* Category Badge */}
            <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm">
              {product.category}
            </Badge>
            
            {/* Like Button */}
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`absolute top-4 right-4 p-3 rounded-full bg-white/90 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:scale-110 ${
                isLiked ? "text-red-500" : "text-muted-foreground"
              }`}
            >
              <Heart className="w-6 h-6" fill={isLiked ? "currentColor" : "none"} />
            </button>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">(124 reviews)</span>
                </div>
                <Badge variant={product.inStock ? "default" : "destructive"}>
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-primary">
              ${calculateTotal().toFixed(2)}
              {quantity > 1 && (
                <span className="text-lg text-muted-foreground ml-2">
                  (${product.price.toFixed(2)} each)
                </span>
              )}
            </div>

            <Separator />

            {/* Customizations */}
            <div className="space-y-6">
              {/* Sugar Level */}
              {product.customizations?.sugarLevel && (
                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    Sugar Level
                  </Label>
                  <RadioGroup value={sugarLevel} onValueChange={setSugarLevel}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="light" id="light" />
                      <Label htmlFor="light">Light</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="regular" id="regular" />
                      <Label htmlFor="regular">Regular</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="extra" id="extra" />
                      <Label htmlFor="extra">Extra Sweet</Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              {/* Size Selection */}
              {product.customizations?.sizes && (
                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    Size
                  </Label>
                  <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                    {product.customizations.sizes.map((size) => (
                      <div key={size} className="flex items-center space-x-2">
                        <RadioGroupItem value={size} id={size} />
                        <Label htmlFor={size}>{size}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {/* Toppings */}
              {product.customizations?.toppings && (
                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    Toppings (+$0.50 each)
                  </Label>
                  <div className="space-y-2">
                    {product.customizations.toppings.map((topping) => (
                      <div key={topping} className="flex items-center space-x-2">
                        <Checkbox
                          id={topping}
                          checked={selectedToppings.includes(topping)}
                          onCheckedChange={() => handleToppingToggle(topping)}
                        />
                        <Label htmlFor={topping}>{topping}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Separator />

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div>
                <Label className="text-base font-semibold mb-3 block">
                  Quantity
                </Label>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-xl font-semibold min-w-[2rem] text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full"
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart - ${calculateTotal().toFixed(2)}
              </Button>
            </div>

            {/* Ingredients */}
            {product.ingredients && (
              <Card className="bg-muted/30">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Ingredients</h3>
                  <p className="text-sm text-muted-foreground">
                    {product.ingredients.join(", ")}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;