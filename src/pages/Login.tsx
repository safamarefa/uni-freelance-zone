import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if user exists in registration
    const registeredUser = localStorage.getItem("registeredUser");
    
    if (registeredUser) {
      const userData = JSON.parse(registeredUser);
      
      // Simple validation (in production, this would be server-side)
      if (userData.email === email && userData.password === password) {
        // Store logged in user without role yet
        localStorage.setItem("user", JSON.stringify({ 
          id: userData.id,
          name: userData.name,
          email: userData.email 
        }));
        
        toast({
          title: "Login Berhasil!",
          description: "Silakan pilih role Anda",
        });
        
        // Redirect to role selection
        navigate("/role-selection");
      } else {
        toast({
          title: "Login Gagal",
          description: "Email atau password salah",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Akun Tidak Ditemukan",
        description: "Silakan daftar terlebih dahulu",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-primary flex flex-col items-center justify-center p-6">
      <Link to="/welcome" className="absolute top-6 left-6 text-white hover:text-white/80 transition-smooth">
        <ArrowLeft className="h-6 w-6" />
      </Link>

      <Card className="w-full max-w-md shadow-hover">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Masuk ke CampusWork</CardTitle>
          <CardDescription className="text-center">
            Masukkan email dan password untuk melanjutkan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Mahasiswa</Label>
              <Input
                id="email"
                type="email"
                placeholder="nama@university.ac.id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="transition-smooth"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="transition-smooth"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <Link to="/forgot-password" className="text-primary hover:underline">
                Lupa password?
              </Link>
            </div>

            <Button type="submit" className="w-full gradient-primary font-semibold">
              Masuk
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Belum punya akun? </span>
            <Link to="/register" className="text-primary hover:underline font-medium">
              Daftar sekarang
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
