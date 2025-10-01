import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 gradient-primary text-white px-6 py-12 flex flex-col items-center justify-center">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            CampusWork
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-2">
            Marketplace Freelance Mahasiswa
          </p>
          <p className="text-base md:text-lg text-white/80 max-w-md mx-auto">
            Tawarkan jasamu atau temukan freelancer mahasiswa terbaik di kampusmu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
          <Card className="bg-white/10 backdrop-blur border-white/20 text-white shadow-card">
            <CardContent className="p-6 text-center">
              <Briefcase className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Cari Pekerjaan</h3>
              <p className="text-sm text-white/80">
                Temukan peluang freelance yang sesuai dengan skillmu
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20 text-white shadow-card">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Tawarkan Jasa</h3>
              <p className="text-sm text-white/80">
                Bagikan keahlianmu dan dapatkan penghasilan tambahan
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20 text-white shadow-card">
            <CardContent className="p-6 text-center">
              <Zap className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Aman & Cepat</h3>
              <p className="text-sm text-white/80">
                Sistem escrow untuk transaksi yang aman dan terpercaya
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Button
            asChild
            size="lg"
            className="flex-1 bg-white text-primary hover:bg-white/90 font-semibold shadow-lg"
          >
            <Link to="/login">Masuk</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="flex-1 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold"
          >
            <Link to="/register">Daftar Sekarang</Link>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6 text-center text-sm text-muted-foreground">
        <p>&copy; 2025 CampusWork. Platform freelance terpercaya untuk mahasiswa.</p>
      </footer>
    </div>
  );
};

export default Welcome;
