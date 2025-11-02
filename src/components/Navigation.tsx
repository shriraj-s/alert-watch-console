import { Link, useLocation } from "react-router-dom";
import { Shield, Home, Bell, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">EPRD</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive("/dashboard") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/alerts"
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive("/alerts") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Bell className="h-4 w-4" />
              Alerts
            </Link>
            <Link
              to="/settings"
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive("/settings") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </div>
          
          <Button variant="ghost" size="sm" className="gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
