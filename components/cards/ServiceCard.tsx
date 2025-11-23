interface IProps {
  title?: string;
  value?: string;
  icon?: any;
  trend?: string;
  color?: "emerald" | "blue" | "amber" | "purple";
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  trend,
  color = "emerald",
}: IProps) {
  const colorClasses = {
    emerald: "from-emerald-400 to-emerald-600",
    blue: "from-blue-400 to-blue-600",
    amber: "from-amber-400 to-amber-600",
    purple: "from-purple-400 to-purple-600",
  };

  return (
    <div className=" max-h-45 h-screen w-full bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-600">{title}</p>
          <h3 className="text-3xl font-bold text-slate-900 mt-2">{value}</h3>
          {trend && (
            <p className="text-sm text-emerald-600 mt-2 font-medium">{trend}</p>
          )}
        </div>
        <div
          className={`p-3 rounded-xl bg-gradient-to-br ${colorClasses[color]} shadow-lg`}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
}
