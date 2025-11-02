import { Link } from "react-router-dom";
import { Shield, Heart, MapPin, Bell, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary">EPRD</span>
            <br />
            <span className="text-foreground">Emergency Portable</span>
            <br />
            <span className="text-foreground">Response Device</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium">
            Smart Safety. Instant Alerts. Peace of Mind.
          </p>
          
          <div className="max-w-3xl space-y-4 text-left bg-card p-8 rounded-2xl shadow-lg border">
            <p className="text-lg text-foreground leading-relaxed">
              EPRD is an innovative IoT-based wearable safety system designed to protect children, 
              elderly individuals, and vulnerable populations. Our advanced technology provides 
              real-time health monitoring, instant emergency alerts, GPS location tracking, and 
              intelligent fall detection—ensuring help is always just moments away.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-12">
            <div className="flex flex-col items-center space-y-3 p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center">
                <Heart className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-semibold">Health Monitoring</h3>
              <p className="text-sm text-muted-foreground text-center">
                Real-time heart rate tracking and vital signs
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">GPS Tracking</h3>
              <p className="text-sm text-muted-foreground text-center">
                Precise location monitoring and geofencing
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <Bell className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-semibold">Instant Alerts</h3>
              <p className="text-sm text-muted-foreground text-center">
                SOS button and automatic fall detection
              </p>
            </div>
          </div>
          
          <Link to="/dashboard" className="mt-8">
            <Button size="lg" className="gap-2 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
              Go to Dashboard
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
      
      <footer className="border-t mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Built with ❤️ for Safety & Innovation</p>
          <p className="mt-2">© 2024 EPRD Team. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
