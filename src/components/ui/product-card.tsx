import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Heart, Star } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
  className?: string;
}

export function ProductCard({
  id,
  name,
  description,
  price,
  image,
  category,
  rating,
  inStock,
  className,
}: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: Add to cart logic
    console.log("Added to cart:", name);
  };

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  return (
    <Card
      className={cn(
        "group relative overflow-hidden bg-gradient-card shadow-card hover:shadow-float transition-all duration-300 hover:scale-[1.02]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${id}`}>
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {!inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="destructive">Out of Stock</Badge>
            </div>
          )}
          <button
            onClick={toggleLike}
            className={cn(
              "absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm transition-all duration-200",
              isLiked ? "text-red-500" : "text-muted-foreground",
              "hover:bg-white hover:scale-110"
            )}
          >
            <Heart
              className="w-4 h-4"
              fill={isLiked ? "currentColor" : "none"}
            />
          </button>
          <Badge
            variant="secondary"
            className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm"
          >
            {category}
          </Badge>
        </div>

        <CardContent className="p-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {name}
              </h3>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-muted-foreground">{rating}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
            <div className="flex items-center justify-between pt-2">
              <span className="text-lg font-bold text-primary">
                ${price.toFixed(2)}
              </span>
              <Button
                size="sm"
                onClick={handleAddToCart}
                disabled={!inStock}
                className={cn(
                  "transition-all duration-200",
                  isHovered && inStock ? "opacity-100" : "opacity-75"
                )}
              >
                <Plus className="w-4 h-4 mr-1" />
                Add
              </Button>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}