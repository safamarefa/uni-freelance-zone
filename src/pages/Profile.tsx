import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import BottomNav from "@/components/BottomNav";
import {
  User,
  Briefcase,
  Wallet,
  Settings,
  Bell,
  HelpCircle,
  LogOut,
  Star,
  TrendingUp,
  Activity,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, updateUser } = useAuth();
  const [selectedRole, setSelectedRole] = useState(user?.role || "freelancer");
  const [switchRoleOpen, setSwitchRoleOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast({
      title: "Logout Berhasil",
      description: "Sampai jumpa lagi!",
    });
    navigate("/welcome");
  };

  const handleSwitchRole = () => {
    updateUser({ role: selectedRole });
    setSwitchRoleOpen(false);
    toast({
      title: "Role Berubah",
      description: `Anda sekarang masuk sebagai ${selectedRole === "freelancer" ? "Freelancer" : selectedRole === "client" ? "Client" : "Freelancer & Client"}`,
    });
    navigate("/home");
  };

  return (
    <div className="min-h-screen pb-20 md:pb-0 bg-muted/30">
      {/* Header with Profile */}
      <div className="gradient-primary text-white px-4 pt-8 pb-12">
        <div className="container mx-auto">
          <Link to="/home" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-smooth">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm">Back</span>
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="h-20 w-20 border-4 border-white shadow-lg">
              <AvatarImage src={user?.avatar || ""} />
              <AvatarFallback className="text-2xl bg-white text-primary">
                {user?.name?.charAt(0) || "JD"}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{user?.name || "John Doe"}</h1>
              <p className="text-white/80">{user?.email || "john.doe@university.ac.id"}</p>
              <div className="flex gap-2 mt-2">
                {(() => {
                  const userRole = user?.role;
                  
                  if (userRole === "freelancer") {
                    return (
                      <Badge className="bg-white/20 text-white border-white/30">
                        Freelancer
                      </Badge>
                    );
                  } else if (userRole === "client") {
                    return (
                      <Badge className="bg-white/20 text-white border-white/30">
                        Client
                      </Badge>
                    );
                  } else if (userRole === "both") {
                    return (
                      <>
                        <Badge className="bg-white/20 text-white border-white/30">
                          Freelancer
                        </Badge>
                        <Badge className="bg-white/20 text-white border-white/30">
                          Client
                        </Badge>
                      </>
                    );
                  }
                  return null;
                })()}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardContent className="p-4 text-center">
                <Star className="h-6 w-6 mx-auto mb-1 fill-yellow-400 text-yellow-400" />
                <p className="text-2xl font-bold">4.9</p>
                <p className="text-xs text-white/80">Rating</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardContent className="p-4 text-center">
                <Briefcase className="h-6 w-6 mx-auto mb-1" />
                <p className="text-2xl font-bold">24</p>
                <p className="text-xs text-white/80">Projects</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardContent className="p-4 text-center">
                <TrendingUp className="h-6 w-6 mx-auto mb-1" />
                <p className="text-2xl font-bold">92%</p>
                <p className="text-xs text-white/80">Success</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 -mt-6">
        {/* Quick Actions */}
        <Card className="mb-6 shadow-card">
          <CardContent className="p-4">
            <h2 className="font-semibold mb-3">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="justify-start h-auto py-3">
                <Briefcase className="h-5 w-5 mr-2" />
                <span className="text-sm">My Services</span>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-3">
                <Wallet className="h-5 w-5 mr-2" />
                <span className="text-sm">My Wallet</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Menu Items */}
        <Card className="mb-6 shadow-card">
          <CardContent className="p-0 divide-y divide-border">
            <Dialog open={switchRoleOpen} onOpenChange={setSwitchRoleOpen}>
              <DialogTrigger asChild>
                <button className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-smooth w-full text-left">
                  <div className="h-10 w-10 rounded-full bg-success/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-success" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Switch Role</p>
                    <p className="text-sm text-muted-foreground">Change between freelancer and client</p>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Switch Role</DialogTitle>
                  <DialogDescription>
                    Pilih role yang ingin Anda gunakan
                  </DialogDescription>
                </DialogHeader>
                <RadioGroup value={selectedRole} onValueChange={setSelectedRole}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="freelancer" id="freelancer" />
                    <Label htmlFor="freelancer" className="flex-1 cursor-pointer">
                      Freelancer
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="client" id="client" />
                    <Label htmlFor="client" className="flex-1 cursor-pointer">
                      Client
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="both" />
                    <Label htmlFor="both" className="flex-1 cursor-pointer">
                      Keduanya
                    </Label>
                  </div>
                </RadioGroup>
                <Button onClick={handleSwitchRole} className="w-full gradient-primary">
                  Confirm
                </Button>
              </DialogContent>
            </Dialog>

            <Link to="/profile/edit" className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-smooth">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Edit Profile</p>
                <p className="text-sm text-muted-foreground">Update your information</p>
              </div>
            </Link>

            <Link to="/activity" className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-smooth">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Activity className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Activity History</p>
                <p className="text-sm text-muted-foreground">View your recent activities</p>
              </div>
            </Link>

            <Link to="/settings" className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-smooth">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Settings className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Settings</p>
                <p className="text-sm text-muted-foreground">Preferences and privacy</p>
              </div>
            </Link>

            <Link to="/notifications" className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-smooth">
              <div className="h-10 w-10 rounded-full bg-success/10 flex items-center justify-center">
                <Bell className="h-5 w-5 text-success" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Notifications</p>
                <p className="text-sm text-muted-foreground">Manage notifications</p>
              </div>
            </Link>

            <Link to="/help" className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-smooth">
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                <HelpCircle className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Help & Support</p>
                <p className="text-sm text-muted-foreground">FAQs and contact us</p>
              </div>
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center gap-4 p-4 hover:bg-destructive/10 transition-smooth w-full text-left"
            >
              <div className="h-10 w-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <LogOut className="h-5 w-5 text-destructive" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-destructive">Logout</p>
                <p className="text-sm text-muted-foreground">Sign out from your account</p>
              </div>
            </button>
          </CardContent>
        </Card>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;
