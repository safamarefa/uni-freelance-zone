import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BottomNav from "@/components/BottomNav";
import { Clock, CheckCircle, XCircle, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Activity = () => {
  const activities = [
    {
      id: "1",
      type: "booking_created",
      title: "Booking Created",
      description: "Les Privat Kalkulus dengan Andi Pratama",
      date: "2025-10-01 14:30",
      status: "pending",
    },
    {
      id: "2",
      type: "booking_confirmed",
      title: "Booking Confirmed",
      description: "Jasa Design Logo dengan Sarah Wijaya",
      date: "2025-09-28 10:15",
      status: "confirmed",
    },
    {
      id: "3",
      type: "service_completed",
      title: "Service Completed",
      description: "Website Development dengan Budi Santoso",
      date: "2025-09-25 16:45",
      status: "completed",
    },
    {
      id: "4",
      type: "booking_cancelled",
      title: "Booking Cancelled",
      description: "Jasa Cleaning Room",
      date: "2025-09-20 09:00",
      status: "cancelled",
    },
    {
      id: "5",
      type: "review_submitted",
      title: "Review Submitted",
      description: "You rated Andi Pratama 5 stars",
      date: "2025-09-18 13:20",
      status: "completed",
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "booking_created":
      case "booking_confirmed":
        return <Calendar className="h-5 w-5 text-primary" />;
      case "service_completed":
      case "review_submitted":
        return <CheckCircle className="h-5 w-5 text-success" />;
      case "booking_cancelled":
        return <XCircle className="h-5 w-5 text-destructive" />;
      default:
        return <Clock className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success/10 text-success border-success/20";
      case "confirmed":
        return "bg-primary/10 text-primary border-primary/20";
      case "pending":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "cancelled":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-secondary";
    }
  };

  return (
    <div className="min-h-screen pb-20 md:pb-8 bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/home">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold">Activity History</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="space-y-4">
          {activities.map((activity) => (
            <Card key={activity.id} className="shadow-card hover:shadow-hover transition-smooth">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-base mb-1">
                          {activity.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {activity.description}
                        </p>
                      </div>
                      <Badge variant="outline" className={getStatusColor(activity.status)}>
                        {activity.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{activity.date}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Activity;
