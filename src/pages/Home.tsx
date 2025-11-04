import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import ServiceCard from "@/components/ServiceCard";
import BottomNav from "@/components/BottomNav";
import TopNav from "@/components/TopNav";
import { Search, Bell, TrendingUp, BookOpen, Palette, Code, PenTool, Trash2, Truck, Camera, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import tutorImage from "@/assets/tutor-service.jpg";
import designImage from "@/assets/design-service.jpg";
import programmingImage from "@/assets/programming-service.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, DollarSign, CheckCircle, Clock, MessageSquare, TrendingUp as TrendingUpIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Home = () => {
  const { user } = useAuth();
  const userName = user?.name || "Guest";
  const userRole = user?.role || "client";

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

  // Freelancer Dashboard Content
  if (userRole === "freelancer" || userRole === "both") {
    return (
      <div className="min-h-screen pb-20 md:pb-0">
        <TopNav />
        
        {/* Header */}
        <header className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-primary">CAMPUSWORK</h1>
                <p className="text-sm text-muted-foreground">Dashboard Freelancer - {userName}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button className="gradient-primary">
                  <Plus className="h-4 w-4 mr-2" />
                  Tambah Jasa
                </Button>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full"></span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-6">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Penghasilan</CardTitle>
                <DollarSign className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">Rp 2.450.000</div>
                <p className="text-xs text-muted-foreground mt-1">+12% dari bulan lalu</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Order Aktif</CardTitle>
                <Clock className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-warning">5</div>
                <p className="text-xs text-muted-foreground mt-1">3 menunggu review</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Order Selesai</CardTitle>
                <CheckCircle className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">23</div>
                <p className="text-xs text-muted-foreground mt-1">Rating rata-rata 4.8</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Pesan Baru</CardTitle>
                <MessageSquare className="h-4 w-4 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent">8</div>
                <p className="text-xs text-muted-foreground mt-1">4 belum dibaca</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="orders" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="orders">Activity Order</TabsTrigger>
              <TabsTrigger value="services">Jasa Saya</TabsTrigger>
              <TabsTrigger value="chats">Chat Client</TabsTrigger>
            </TabsList>

            <TabsContent value="orders" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Order Terbaru</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/5 transition-smooth">
                      <div className="flex-1">
                        <h3 className="font-semibold">Website Development untuk Startup</h3>
                        <p className="text-sm text-muted-foreground">Client: John Doe • 2 hari lagi</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-success">Rp 500.000</p>
                        <Badge variant="outline" className="mt-1">In Progress</Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="services" className="space-y-4 mt-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Jasa yang Saya Tawarkan</CardTitle>
                  <Button size="sm" className="gradient-primary">
                    <Plus className="h-4 w-4 mr-2" />
                    Tambah
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {trendingServices.slice(0, 2).map((service) => (
                    <div key={service.id} className="flex gap-4 p-4 border rounded-lg hover:bg-accent/5 transition-smooth">
                      <img src={service.image} alt={service.title} className="w-24 h-24 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h3 className="font-semibold">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.category} • {service.reviewCount} reviews</p>
                        <p className="font-bold text-primary mt-2">Rp {service.price.toLocaleString()} / {service.priceUnit}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button size="sm" variant="outline">Edit</Button>
                        <Button size="sm" variant="outline">Statistik</Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="chats" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Percakapan dengan Client</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "Sarah Wijaya", message: "Kapan bisa mulai projectnya?", time: "5 menit lalu", unread: true },
                    { name: "Budi Santoso", message: "Terima kasih untuk revisinya!", time: "2 jam lalu", unread: false },
                    { name: "Ani Kusuma", message: "File sudah saya kirim ya", time: "1 hari lalu", unread: false },
                  ].map((chat, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-accent/5 transition-smooth cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold">{chat.name[0]}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{chat.name}</h3>
                          <span className="text-xs text-muted-foreground">{chat.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{chat.message}</p>
                      </div>
                      {chat.unread && (
                        <div className="w-2 h-2 rounded-full bg-destructive"></div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>

        <BottomNav />
      </div>
    );
  }

  // Client Dashboard Content (default)
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <TopNav />
      
      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-40 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-primary">
                CAMPUSWORK
              </h1>
              <p className="text-sm text-muted-foreground">Welcome back, {userName}!</p>
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

      {/* Desktop Header */}
      <header className="hidden md:block sticky top-0 z-40 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold text-primary">
                CAMPUSWORK
              </h1>
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Cari jasa atau freelancer..."
                  className="pl-10 transition-smooth"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground">Welcome back, {userName}!</p>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full"></span>
              </Button>
            </div>
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
