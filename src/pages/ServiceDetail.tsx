import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Star, Calendar, Clock } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import BookingDialog from "@/components/BookingDialog";

const ServiceDetail = () => {
  const { id } = useParams();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Mock service data - in real app, fetch based on id
  const service = {
    id: id || "1",
    title: "Les Privat Kalkulus & Matematika",
    category: "Tutor",
    description: "Berpengalaman mengajar kalkulus dan matematika untuk mahasiswa tingkat 1-2. Metode pengajaran yang mudah dipahami dengan latihan soal yang komprehensif.",
    price: 75000,
    priceUnit: "jam",
    rating: 4.9,
    reviewCount: 28,
    freelancerName: "Andi Pratama",
    location: "UI Depok",
    availability: "Senin-Jumat, 09:00-17:00",
    experience: "3 tahun",
    completedProjects: 45,
  };

  return (
    <div className="min-h-screen pb-20 md:pb-8 bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/browse">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold">Detail Layanan</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Service Info */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <Badge className="mb-3">{service.category}</Badge>
            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
            
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-primary/10 text-primary">
                  {service.freelancerName.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{service.freelancerName}</p>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{service.rating} ({service.reviewCount} review)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{service.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-4">{service.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Pengalaman</p>
                <p className="font-semibold">{service.experience}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Project Selesai</p>
                <p className="font-semibold">{service.completedProjects}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Ketersediaan
                </p>
                <p className="font-semibold">{service.availability}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Harga
                </p>
                <p className="font-semibold text-primary">
                  Rp {service.price.toLocaleString("id-ID")}/{service.priceUnit}
                </p>
              </div>
            </div>

            <Button 
              className="w-full" 
              size="lg"
              onClick={() => setIsBookingOpen(true)}
            >
              Book Service
            </Button>
          </CardContent>
        </Card>
      </main>

      <BookingDialog
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        service={service}
      />

      <BottomNav />
    </div>
  );
};

export default ServiceDetail;
