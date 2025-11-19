import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, User, Mail, Phone, Calendar, DollarSign, MessageSquare, Check, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const OrderDetail = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleMessageClient = () => {
    navigate("/chat/1");
  };

  const handleApproveOrder = () => {
    toast({
      title: "Order Disetujui",
      description: "Order telah berhasil disetujui dan akan dimulai",
    });
  };

  const handleRejectOrder = () => {
    toast({
      title: "Order Ditolak",
      description: "Order telah ditolak. Client akan diberitahu",
      variant: "destructive",
    });
  };

  const order = {
    id: "ORD-001",
    title: "Website Development untuk Startup",
    client: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+62 812-3456-7890",
      avatar: "",
    },
    price: 500000,
    status: "In Progress",
    deadline: "2025-11-10",
    description:
      "Saya membutuhkan website company profile untuk startup saya. Website harus responsive dan modern dengan fitur-fitur dasar seperti about, services, dan contact form.",
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">Order Details</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-2xl">
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{order.title}</CardTitle>
              <Badge variant="outline">{order.status}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">Order ID: {order.id}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">{order.description}</p>
            </div>

            <div className="flex items-center justify-between py-3 border-t">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-success" />
                <span className="font-medium">Price</span>
              </div>
              <span className="text-xl font-bold text-success">
                Rp {order.price.toLocaleString()}
              </span>
            </div>

            <div className="flex items-center justify-between py-3 border-t">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-medium">Deadline</span>
              </div>
              <span className="font-semibold">{order.deadline}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Client Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={order.client.avatar} />
                <AvatarFallback className="text-lg bg-primary text-primary-foreground">
                  {order.client.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg">{order.client.name}</h3>
                <p className="text-sm text-muted-foreground">Client</p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">{order.client.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">{order.client.phone}</span>
              </div>
            </div>

            <Button
              className="w-full mt-4 gradient-primary"
              onClick={handleMessageClient}
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Message Client
            </Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Button 
            className="gradient-primary"
            onClick={handleApproveOrder}
          >
            <Check className="h-4 w-4 mr-2" />
            Approve Order
          </Button>
          <Button 
            variant="destructive"
            onClick={handleRejectOrder}
          >
            <X className="h-4 w-4 mr-2" />
            Reject Order
          </Button>
        </div>
      </main>
    </div>
  );
};

export default OrderDetail;
