import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MapViewProps {
  latitude: number;
  longitude: number;
}

const MapView = ({ latitude, longitude }: MapViewProps) => {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          Live Location Tracking
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-[400px] rounded-lg bg-muted overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-2">
              <MapPin className="h-12 w-12 text-primary mx-auto animate-pulse-soft" />
              <p className="text-sm text-muted-foreground">
                Map Integration Ready
              </p>
              <p className="text-xs text-muted-foreground">
                Coordinates: {latitude.toFixed(6)}, {longitude.toFixed(6)}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapView;
