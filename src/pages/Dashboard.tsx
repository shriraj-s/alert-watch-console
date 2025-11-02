import { useState, useEffect } from "react";
import { Activity, AlertCircle, Shield, Battery } from "lucide-react";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import DashboardCard from "@/components/DashboardCard";
import StatusIndicator from "@/components/StatusIndicator";
import MapView from "@/components/MapView";
import AlertsPanel from "@/components/AlertsPanel";

const Dashboard = () => {
  const [heartRate, setHeartRate] = useState(72);
  const [sosStatus, setSosStatus] = useState<"safe" | "alert">("safe");
  const [geofenceStatus, setGeofenceStatus] = useState<"safe" | "warning">("safe");
  
  // Simulate real-time heart rate updates
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate((prev) => Math.max(60, Math.min(100, prev + Math.floor(Math.random() * 7) - 3)));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Real-time monitoring and alerts</p>
            </div>
            <div className="flex flex-col gap-2">
              <StatusIndicator 
                status={sosStatus} 
                label={sosStatus === "safe" ? "System Normal" : "SOS Alert Active"} 
              />
              <StatusIndicator 
                status={geofenceStatus} 
                label={geofenceStatus === "safe" ? "Inside Safe Zone" : "Outside Safe Zone"} 
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <DashboardCard
              title="Live Heart Rate"
              value={`${heartRate} BPM`}
              icon={Activity}
              status={heartRate > 90 ? "warning" : "normal"}
              subtitle="Updated 2 seconds ago"
            />
            
            <DashboardCard
              title="SOS Status"
              value={sosStatus === "safe" ? "Normal" : "ALERT"}
              icon={AlertCircle}
              status={sosStatus === "safe" ? "normal" : "danger"}
              subtitle="No active alerts"
            />
            
            <DashboardCard
              title="Geofencing"
              value={geofenceStatus === "safe" ? "Inside" : "Outside"}
              icon={Shield}
              status={geofenceStatus === "safe" ? "normal" : "warning"}
              subtitle="Safe zone active"
            />
            
            <DashboardCard
              title="Battery Level"
              value="87%"
              icon={Battery}
              status="normal"
              subtitle="Est. 12 hours remaining"
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <MapView latitude={37.7749} longitude={-122.4194} />
            
            <div className="space-y-6">
              <AlertsPanel />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
