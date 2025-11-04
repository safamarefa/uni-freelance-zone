import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Bell, MessageSquare, DollarSign, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: "message",
      icon: MessageSquare,
      title: "New message from Sarah Wijaya",
      description: "Kapan bisa mulai projectnya?",
      time: "5 minutes ago",
      unread: true,
    },
    {
      id: 2,
      type: "payment",
      icon: DollarSign,
      title: "Payment received",
      description: "Rp 500.000 has been credited to your account",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 3,
      type: "review",
      icon: Star,
      title: "New review received",
      description: "Budi Santoso left a 5-star review",
      time: "1 day ago",
      unread: false,
    },
    {
      id: 4,
      type: "order",
      icon: Bell,
      title: "New order request",
      description: "Someone requested your Web Development service",
      time: "2 days ago",
      unread: false,
    },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Notifications</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-2xl">
        <div className="space-y-3">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <Card
                key={notification.id}
                className={notification.unread ? "border-primary/50" : ""}
              >
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        notification.unread
                          ? "bg-primary/20"
                          : "bg-muted"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          notification.unread
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-semibold">
                          {notification.title}
                        </h3>
                        {notification.unread && (
                          <Badge variant="default" className="ml-2">
                            New
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {notification.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Notifications;
