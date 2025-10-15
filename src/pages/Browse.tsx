import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ServiceCard from "@/components/ServiceCard";
import BottomNav from "@/components/BottomNav";
import { Search, SlidersHorizontal, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Browse = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    "Semua", "Tutor", "Design", "Writing", "Programming", 
    "Photography", "Cleaning", "Delivery", "Translation"
  ];

  const services = [
    {
      id: "1",
      title: "Les Privat Kalkulus & Matematika",
      category: "Tutor",
      price: 75000,
      priceUnit: "jam",
      rating: 4.9,
      reviewCount: 28,
      freelancerName: "Andi Pratama",
      location: "UI Depok",
      availability: "Senin-Jumat",
    },
    {
      id: "2",
      title: "Jasa Design Logo & Brand Identity",
      category: "Design",
      price: 150000,
      priceUnit: "project",
      rating: 5.0,
      reviewCount: 42,
      freelancerName: "Sarah Wijaya",
      location: "ITB Bandung",
      availability: "Flexible",
    },
    {
      id: "3",
      title: "Website Development React & Node.js",
      category: "Programming",
      price: 500000,
      priceUnit: "project",
      rating: 4.8,
      reviewCount: 35,
      freelancerName: "Budi Santoso",
      location: "ITS Surabaya",
      availability: "Minggu-Jumat",
    },
    {
      id: "4",
      title: "Jasa Fotografi Event & Portrait",
      category: "Photography",
      price: 300000,
      priceUnit: "sesi",
      rating: 4.7,
      reviewCount: 19,
      freelancerName: "Dina Marlina",
      location: "UGM Yogyakarta",
      availability: "Weekend",
    },
    {
      id: "5",
      title: "Content Writing SEO Optimized",
      category: "Writing",
      price: 100000,
      priceUnit: "artikel",
      rating: 4.9,
      reviewCount: 31,
      freelancerName: "Rina Kusuma",
      location: "Unair Surabaya",
      availability: "Setiap Hari",
    },
    {
      id: "6",
      title: "Jasa Cleaning & Organizing Kos",
      category: "Cleaning",
      price: 50000,
      priceUnit: "jam",
      rating: 4.6,
      reviewCount: 24,
      freelancerName: "Yuni Astuti",
      location: "Undip Semarang",
      availability: "Flexible",
    },
  ];

  const filteredServices = selectedCategory && selectedCategory !== "Semua"
    ? services.filter(s => s.category === selectedCategory)
    : services;

  return (
    <div className="min-h-screen pb-20 md:pb-8">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold">Jelajahi Layanan</h1>
          </div>

          {/* Search Bar */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Cari layanan..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="cursor-pointer transition-smooth whitespace-nowrap"
                onClick={() => setSelectedCategory(category === "Semua" ? null : category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Menampilkan {filteredServices.length} layanan
            {selectedCategory && selectedCategory !== "Semua" && ` untuk kategori "${selectedCategory}"`}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Tidak ada layanan ditemukan</p>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default Browse;
