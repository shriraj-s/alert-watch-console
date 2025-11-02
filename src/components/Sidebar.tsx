import { MapPin, Activity, Shield, History } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const quickActions = [
    { icon: MapPin, label: "Live Location", variant: "default" as const },
    { icon: Activity, label: "Health Data", variant: "outline" as const },
    { icon: Shield, label: "Safe Zone", variant: "outline" as const },
    { icon: History, label: "Alert History", variant: "outline" as const },
  ];

  return (
    <aside className="hidden lg:flex lg:w-64 lg:flex-col border-r bg-card">
      <div className="p-6">
        <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
        <div className="space-y-2">
          {quickActions.map((action) => (
            <Button
              key={action.label}
              variant={action.variant}
              className="w-full justify-start gap-2"
            >
              <action.icon className="h-4 w-4" />
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
