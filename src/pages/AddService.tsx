import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const AddService = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [serviceName, setServiceName] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [availability, setAvailability] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save service data (in real app, this would save to database)
    const newService = {
      name: serviceName,
      type: serviceType,
      price: parseInt(price),
      description,
      availability,
    };

    console.log("New service:", newService);

    toast({
      title: "Jasa Berhasil Ditambahkan",
      description: "Jasa Anda telah berhasil dipublikasikan",
    });

    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">Tambah Jasa</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-2xl">
        <form onSubmit={handleSubmit}>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Informasi Jasa</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="serviceName">Nama Jasa *</Label>
                <Input
                  id="serviceName"
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  placeholder="Contoh: Desain Logo Profesional"
                  required
                />
              </div>

              <div>
                <Label htmlFor="serviceType">Jenis Jasa *</Label>
                <Select value={serviceType} onValueChange={setServiceType} required>
                  <SelectTrigger id="serviceType">
                    <SelectValue placeholder="Pilih jenis jasa" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="programming">Programming</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="writing">Writing</SelectItem>
                    <SelectItem value="tutoring">Tutoring</SelectItem>
                    <SelectItem value="photography">Photography</SelectItem>
                    <SelectItem value="video-editing">Video Editing</SelectItem>
                    <SelectItem value="other">Lainnya</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="price">Harga (Rp) *</Label>
                <Input
                  id="price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="50000"
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Informasi Penjual *</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Jelaskan detail jasa Anda, apa yang akan Anda berikan kepada client..."
                  rows={6}
                  required
                />
              </div>

              <div>
                <Label htmlFor="availability">Jam Ketersediaan *</Label>
                <Input
                  id="availability"
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  placeholder="Contoh: Senin-Jumat, 09:00-17:00"
                  required
                />
              </div>
            </CardContent>
          </Card>

          <Button type="submit" className="w-full gradient-primary">
            Publikasikan Jasa
          </Button>
        </form>
      </main>
    </div>
  );
};

export default AddService;
