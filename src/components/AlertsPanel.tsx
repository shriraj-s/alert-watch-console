import { Bell, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Alert {
  id: string;
  type: "SOS" | "Fall" | "Heart Rate";
  timestamp: string;
  location: string;
  status: "Active" | "Resolved";
}

const mockAlerts: Alert[] = [
  {
    id: "1",
    type: "SOS",
    timestamp: "2024-01-15 14:32:00",
    location: "37.7749° N, 122.4194° W",
    status: "Active",
  },
  {
    id: "2",
    type: "Fall",
    timestamp: "2024-01-15 12:15:00",
    location: "37.7750° N, 122.4195° W",
    status: "Resolved",
  },
  {
    id: "3",
    type: "Heart Rate",
    timestamp: "2024-01-15 10:45:00",
    location: "37.7748° N, 122.4193° W",
    status: "Resolved",
  },
];

const AlertsPanel = () => {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          Alert History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Timestamp</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockAlerts.map((alert) => (
              <TableRow key={alert.id}>
                <TableCell className="font-medium">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      alert.type === "SOS"
                        ? "bg-destructive/10 text-destructive"
                        : alert.type === "Fall"
                        ? "bg-warning/10 text-warning"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {alert.type}
                  </span>
                </TableCell>
                <TableCell className="text-sm">{alert.timestamp}</TableCell>
                <TableCell className="text-sm">{alert.location}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      alert.status === "Active"
                        ? "bg-destructive/10 text-destructive"
                        : "bg-success/10 text-success"
                    }`}
                  >
                    {alert.status}
                  </span>
                </TableCell>
                <TableCell>
                  {alert.status === "Active" && (
                    <Button size="sm" variant="outline" className="gap-2">
                      <CheckCircle className="h-3 w-3" />
                      Resolve
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AlertsPanel;
