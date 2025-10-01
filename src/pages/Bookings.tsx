import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BottomNav from "@/components/BottomNav";
import { Calendar, MapPin, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Bookings = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const bookings = [
    {
      id: "1",
      title: "Les Privat Kalkulus",
      freelancerName: "Andi Pratama",
      date: "2025-10-05",
      time: "14:00",
      location: "UI Depok",
      status: "confirmed",
      price: 75000,
    },
    {
      id: "2",
      title: "Jasa Design Logo",
      freelancerName: "Sarah Wijaya",
      date: "2025-10-08",
      time: "10:00",
      location: "Online",
      status: "pending",
      price: 150000,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-success">Confirmed</Badge>;
      case "pending":
        return <Badge className="bg-yellow-500">Pending</Badge>;
      case "completed":
        return <Badge className="bg-accent">Completed</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen pb-20 md:pb-8">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold">My Bookings</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {bookings.map((booking) => (
              <Card key={booking.id} className="shadow-card hover:shadow-hover transition-smooth">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{booking.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{booking.freelancerName}</span>
                      </div>
                    </div>
                    {getStatusBadge(booking.status)}
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{new Date(booking.date).toLocaleDateString('id-ID', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-accent" />
                      <span>{booking.time} WIB</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-success" />
                      <span>{booking.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Total</p>
                      <p className="text-lg font-bold text-primary">
                        Rp {booking.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {booking.status === "pending" && (
                        <Button variant="outline" size="sm">
                          Cancel
                        </Button>
                      )}
                      <Button size="sm" className="gradient-primary">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {bookings.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground mb-4">Belum ada booking</p>
                <Button asChild className="gradient-primary">
                  <Link to="/browse">Cari Layanan</Link>
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="completed">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Belum ada booking yang selesai</p>
            </div>
          </TabsContent>

          <TabsContent value="cancelled">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Belum ada booking yang dibatalkan</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <BottomNav />
    </div>
  );
};

export default Bookings;
