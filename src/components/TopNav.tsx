import { Home, Search, Calendar, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const TopNav = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Search, label: "Browse", path: "/browse" },
    { icon: Calendar, label: "Bookings", path: "/bookings" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <nav className="hidden md:flex fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 gap-12">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 transition-smooth min-w-[80px]",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon 
                  className={cn(
                    "h-6 w-6",
                    isActive ? "stroke-primary stroke-[2.5px]" : "stroke-muted-foreground"
                  )} 
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
