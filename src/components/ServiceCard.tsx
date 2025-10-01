import { Star, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  id: string;
  title: string;
  category: string;
  price: number;
  priceUnit: string;
  rating: number;
  reviewCount: number;
  freelancerName: string;
  freelancerAvatar?: string;
  location: string;
  availability: string;
  image?: string;
}

const ServiceCard = ({
  id,
  title,
  category,
  price,
  priceUnit,
  rating,
  reviewCount,
  freelancerName,
  freelancerAvatar,
  location,
  availability,
  image,
}: ServiceCardProps) => {
  return (
    <Link to={`/service/${id}`}>
      <Card className="overflow-hidden hover:shadow-hover transition-smooth cursor-pointer group">
        <div className="relative h-40 bg-gradient-primary overflow-hidden">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
              {category.charAt(0)}
            </div>
          )}
          <Badge className="absolute top-2 right-2 bg-card text-card-foreground">
            {category}
          </Badge>
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-smooth">
            {title}
          </h3>
          
          <div className="flex items-center gap-2 mb-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={freelancerAvatar} />
              <AvatarFallback>{freelancerName.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground">{freelancerName}</span>
          </div>

          <div className="flex items-center gap-1 mb-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-sm">{rating}</span>
            <span className="text-sm text-muted-foreground">({reviewCount})</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <MapPin className="h-4 w-4" />
            <span className="line-clamp-1">{location}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Clock className="h-4 w-4" />
            <span>{availability}</span>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div>
              <span className="text-xs text-muted-foreground">Starting at</span>
              <p className="text-lg font-bold text-primary">
                Rp {price.toLocaleString()}
                <span className="text-sm font-normal text-muted-foreground">/{priceUnit}</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ServiceCard;
