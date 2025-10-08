import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import ServiceCard from "@/components/ServiceCard";
import BottomNav from "@/components/BottomNav";
import TopNav from "@/components/TopNav";
import { Search, Bell, TrendingUp, BookOpen, Palette, Code, PenTool, Trash2, Truck, Camera, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import tutorImage from "@/assets/tutor-service.jpg";
import designImage from "@/assets/design-service.jpg";
import programmingImage from "@/assets/programming-service.jpg";

const Home = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
      setUserName(userData.name);
    }
  }, []);

  const categories = [
    "Tutor", "Design", "Writing", "Programming", "Photography",
    "Cleaning", "Delivery", "Translation", "Music", "Sports"
  ];

  const trendingServices = [
    {
      id: "1",
      title: "Les Privat Kalkulus & Matematika untuk Mahasiswa",
      category: "Tutor",
      price: 75000,
      priceUnit: "jam",
      rating: 4.9,
      reviewCount: 28,
      freelancerName: "Andi Pratama",
      location: "UI Depok",
      availability: "Senin-Jumat",
      image: tutorImage,
    },
    {
      id: "2",
      title: "Jasa Design Logo & Brand Identity Modern",
      category: "Design",
      price: 150000,
      priceUnit: "project",
      rating: 5.0,
      reviewCount: 42,
      freelancerName: "Sarah Wijaya",
      location: "ITB Bandung",
      availability: "Flexible",
      image: designImage,
    },
    {
      id: "3",
      title: "Website Development dengan React & Node.js",
      category: "Programming",
      price: 500000,
      priceUnit: "project",
      rating: 4.8,
      reviewCount: 35,
      freelancerName: "Budi Santoso",
      location: "ITS Surabaya",
      availability: "Minggu-Jumat",
      image: programmingImage,
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      <TopNav />
      {/* Header */}
      <header className="md:hidden sticky top-0 z-40 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                UPWORK
              </h1>
              <p className="text-sm text-muted-foreground">Welcome back, {userName || "Guest"}!</p>
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full"></span>
            </Button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Cari jasa atau freelancer..."
              className="pl-10 transition-smooth"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Service Grid */}
        <section className="mb-8">
          <div className="grid grid-cols-4 gap-4">
            <Link to="/browse?category=Tutor" className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary transition-smooth">
                <BookOpen className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="text-xs font-medium text-center">Tutor</span>
            </Link>
            
            <Link to="/browse?category=Design" className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary transition-smooth">
                <Palette className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="text-xs font-medium text-center">Design</span>
            </Link>
            
            <Link to="/browse?category=Programming" className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary transition-smooth">
                <Code className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="text-xs font-medium text-center">Coding</span>
            </Link>
            
            <Link to="/browse?category=Writing" className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary transition-smooth">
                <PenTool className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="text-xs font-medium text-center">Writing</span>
            </Link>
            
            <Link to="/browse?category=Cleaning" className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary transition-smooth">
                <Trash2 className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="text-xs font-medium text-center">Cleaning</span>
            </Link>
            
            <Link to="/browse?category=Delivery" className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary transition-smooth">
                <Truck className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="text-xs font-medium text-center">Delivery</span>
            </Link>
            
            <Link to="/browse?category=Photography" className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary transition-smooth">
                <Camera className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="text-xs font-medium text-center">Photo</span>
            </Link>
            
            <Link to="/browse" className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary transition-smooth">
                <MoreHorizontal className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="text-xs font-medium text-center">More</span>
            </Link>
          </div>
        </section>

        {/* Trending Services */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Trending Minggu Ini</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mt-8 grid grid-cols-3 gap-4">
          <div className="bg-card rounded-lg p-4 text-center shadow-card">
            <p className="text-2xl font-bold text-primary">500+</p>
            <p className="text-xs text-muted-foreground">Freelancer Aktif</p>
          </div>
          <div className="bg-card rounded-lg p-4 text-center shadow-card">
            <p className="text-2xl font-bold text-accent">1000+</p>
            <p className="text-xs text-muted-foreground">Project Selesai</p>
          </div>
          <div className="bg-card rounded-lg p-4 text-center shadow-card">
            <p className="text-2xl font-bold text-success">4.8</p>
            <p className="text-xs text-muted-foreground">Rating Rata-rata</p>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Home;
