import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import heroImage from "@/assets/hero-freelancer.jpg";

const Welcome = () => {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchKeyword) params.append("q", searchKeyword);
    if (category) params.append("category", category);
    if (location) params.append("location", location);
    navigate(`/browse?${params.toString()}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">UPWORK</h1>
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link to="/browse">Jelajahi Layanan</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/login">Masuk</Link>
              </Button>
              <Button className="bg-accent hover:bg-accent/90" asChild>
                <Link to="/register">Untuk Perusahaan</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-hero text-white relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 circle-decoration"></div>
        <div className="absolute top-10 left-1/4 w-16 h-16 circle-decoration"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 circle-decoration"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 circle-decoration"></div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Pekerjaan apa?
            </h2>
            <p className="text-lg text-white/90 mb-8 text-center">
              Di mana?
            </p>

            {/* Search Form */}
            <div className="bg-white rounded-lg p-2 shadow-2xl">
              <div className="grid md:grid-cols-12 gap-2">
                <div className="md:col-span-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Masukkan kata kunci"
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      className="pl-10 h-12 border-0 focus-visible:ring-0"
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                  </div>
                </div>
                <div className="md:col-span-3">
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="h-12 border-0 focus:ring-0">
                      <SelectValue placeholder="Semua klasifikasi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Semua Kategori</SelectItem>
                      <SelectItem value="tutor">Tutor</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="programming">Programming</SelectItem>
                      <SelectItem value="writing">Writing</SelectItem>
                      <SelectItem value="photography">Photography</SelectItem>
                      <SelectItem value="cleaning">Cleaning</SelectItem>
                      <SelectItem value="delivery">Delivery</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-3">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Masukkan kota atau wilayah"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="pl-10 h-12 border-0 focus-visible:ring-0"
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <Button 
                    onClick={handleSearch}
                    className="w-full h-12 bg-accent hover:bg-accent/90 font-semibold text-lg"
                  >
                    Cari
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link to="/browse" className="text-white/80 hover:text-white underline text-sm">
                Atau lihat semua layanan →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Temukan pekerjaan yang tepat untuk Anda di UPWORK
              </h2>
              <p className="text-lg text-muted-foreground">
                Masuk ke profil Anda untuk mendapatkan pekerjaan yang lebih cocok
              </p>

              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full h-12 justify-start gap-3"
                  asChild
                >
                  <Link to="/register">
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Lanjutkan dengan Google
                  </Link>
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">atau</span>
                  </div>
                </div>

                <Button 
                  className="w-full h-12 bg-primary hover:bg-primary/90 font-semibold"
                  asChild
                >
                  <Link to="/login">Masuk</Link>
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Belum punya akun?{" "}
                  <Link to="/register" className="text-primary hover:underline font-medium">
                    Daftar
                  </Link>
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Professional freelancer" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-12">
            Temukan perusahaan Anda berikutnya
          </h3>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">500+ Freelancer</h4>
              <p className="text-sm text-muted-foreground">Talenta terbaik di kampus</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Terverifikasi</h4>
              <p className="text-sm text-muted-foreground">Freelancer mahasiswa aktif</p>
            </div>
            <div className="text-center">
              <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Harga Terjangkau</h4>
              <p className="text-sm text-muted-foreground">Sesuai budget mahasiswa</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Komunitas Aktif</h4>
              <p className="text-sm text-muted-foreground">Support antar mahasiswa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 UPWORK. Platform freelance terpercaya untuk mahasiswa.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;
