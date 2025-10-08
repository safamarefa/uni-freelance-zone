import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Password tidak cocok",
        variant: "destructive",
      });
      return;
    }
    
    // Save user data to localStorage
    const userData = {
      name,
      email,
      id: Date.now().toString(), // Temporary ID for demo
    };
    localStorage.setItem("user", JSON.stringify(userData));
    
    toast({
      title: "Pendaftaran Berhasil!",
      description: "Silakan cek email untuk verifikasi akun",
    });
    
    navigate("/role-selection");
  };

  return (
    <div className="min-h-screen bg-gradient-primary flex flex-col items-center justify-center p-6">
      <Link to="/welcome" className="absolute top-6 left-6 text-white hover:text-white/80 transition-smooth">
        <ArrowLeft className="h-6 w-6" />
      </Link>

      <Card className="w-full max-w-md shadow-hover">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Daftar di CampusWork</CardTitle>
          <CardDescription className="text-center">
            Buat akun baru untuk memulai
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Lengkap</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Mahasiswa</Label>
              <Input
                id="email"
                type="email"
                placeholder="nama@university.ac.id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Min. 8 karakter"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Ulangi password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full gradient-primary font-semibold">
              Daftar
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Sudah punya akun? </span>
            <Link to="/login" className="text-primary hover:underline font-medium">
              Masuk
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
