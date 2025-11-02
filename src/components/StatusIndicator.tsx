interface StatusIndicatorProps {
  status: "safe" | "alert" | "warning";
  label: string;
}

const StatusIndicator = ({ status, label }: StatusIndicatorProps) => {
  const statusConfig = {
    safe: {
      color: "bg-success",
      text: "text-success-foreground",
      animation: "",
    },
    alert: {
      color: "bg-destructive",
      text: "text-destructive-foreground",
      animation: "animate-pulse-soft",
    },
    warning: {
      color: "bg-warning",
      text: "text-warning-foreground",
      animation: "animate-pulse-soft",
    },
  };

  const config = statusConfig[status];

  return (
    <div className="flex items-center gap-2">
      <div className={`h-3 w-3 rounded-full ${config.color} ${config.animation}`} />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

export default StatusIndicator;
