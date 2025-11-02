import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  status?: "normal" | "warning" | "danger";
  subtitle?: string;
}

const DashboardCard = ({ title, value, icon: Icon, status = "normal", subtitle }: DashboardCardProps) => {
  const statusColors = {
    normal: "text-success",
    warning: "text-warning",
    danger: "text-destructive",
  };

  return (
    <Card className="animate-fade-in hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={`h-5 w-5 ${statusColors[status]}`} />
      </CardHeader>
      <CardContent>
        <div className={`text-3xl font-bold ${statusColors[status]}`}>{value}</div>
        {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
