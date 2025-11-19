import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Moon, Sun, Globe, Lock, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  const [notifications, setNotifications] = useState(true);
  const [publicProfile, setPublicProfile] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

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
            <h1 className="text-xl font-bold">Settings</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-2xl">
        <Card className="mb-4">
          <CardContent className="p-0 divide-y divide-border">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                {darkMode ? (
                  <Moon className="h-5 w-5 text-primary" />
                ) : (
                  <Sun className="h-5 w-5 text-primary" />
                )}
                <div>
                  <Label htmlFor="dark-mode" className="cursor-pointer">
                    Dark Mode
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Toggle dark theme
                  </p>
                </div>
              </div>
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-primary" />
                <div>
                  <Label htmlFor="notifications" className="cursor-pointer">
                    Push Notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications
                  </p>
                </div>
              </div>
              <Switch
                id="notifications"
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-primary" />
                <div>
                  <Label htmlFor="public-profile" className="cursor-pointer">
                    Public Profile
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Make profile visible to others
                  </p>
                </div>
              </div>
              <Switch
                id="public-profile"
                checked={publicProfile}
                onCheckedChange={setPublicProfile}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <Link
              to="/settings/privacy"
              className="flex items-center justify-between p-4 hover:bg-muted/50 transition-smooth"
            >
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Privacy & Security</p>
                  <p className="text-sm text-muted-foreground">
                    Manage your privacy settings
                  </p>
                </div>
              </div>
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Settings;
