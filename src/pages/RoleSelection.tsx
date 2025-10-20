import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, UserCircle, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const RoleSelection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRoleSelect = (role: string) => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const updatedUser = { ...user, role };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    
    toast({
      title: "Role dipilih!",
      description: `Selamat bergabung sebagai ${role === "freelancer" ? "Freelancer" : role === "client" ? "Client" : "Freelancer & Client"}`,
    });
    
    // Small delay to ensure localStorage is updated
    setTimeout(() => {
      navigate("/home", { replace: true });
    }, 100);
  };

  return (
    <div className="min-h-screen gradient-primary flex flex-col items-center justify-center p-6">
      <div className="text-center text-white mb-8">
        <h1 className="text-3xl font-bold mb-2">Pilih Peran Anda</h1>
        <p className="text-white/80">Anda bisa memilih lebih dari satu peran</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
        <Card className="hover:shadow-hover transition-smooth cursor-pointer" onClick={() => handleRoleSelect("freelancer")}>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Freelancer</CardTitle>
            <CardDescription>
              Tawarkan jasa dan dapatkan penghasilan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• Post layanan jasa</li>
              <li>• Terima booking</li>
              <li>• Kelola penghasilan</li>
              <li>• Bangun portofolio</li>
            </ul>
            <Button className="w-full mt-4 gradient-primary">
              Pilih Freelancer
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-hover transition-smooth cursor-pointer" onClick={() => handleRoleSelect("client")}>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
              <UserCircle className="h-8 w-8 text-accent" />
            </div>
            <CardTitle>Client</CardTitle>
            <CardDescription>
              Cari dan booking freelancer terbaik
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• Cari layanan</li>
              <li>• Booking freelancer</li>
              <li>• Berikan review</li>
              <li>• Kelola booking</li>
            </ul>
            <Button className="w-full mt-4 bg-accent hover:bg-accent/90">
              Pilih Client
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-hover transition-smooth cursor-pointer border-2 border-primary" onClick={() => handleRoleSelect("both")}>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-success/10 flex items-center justify-center">
              <Users className="h-8 w-8 text-success" />
            </div>
            <CardTitle>Keduanya</CardTitle>
            <CardDescription>
              Maksimalkan pengalaman sebagai freelancer dan client
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• Semua fitur Freelancer</li>
              <li>• Semua fitur Client</li>
              <li>• Fleksibilitas penuh</li>
              <li>• Pengalaman lengkap</li>
            </ul>
            <Button className="w-full mt-4 bg-success hover:bg-success/90">
              Pilih Keduanya
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoleSelection;
