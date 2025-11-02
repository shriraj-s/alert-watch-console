import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import AlertsPanel from "@/components/AlertsPanel";

const Alerts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Alert History</h1>
            <p className="text-muted-foreground">Review and manage all emergency alerts</p>
          </div>

          <AlertsPanel />
        </main>
      </div>
    </div>
  );
};

export default Alerts;
