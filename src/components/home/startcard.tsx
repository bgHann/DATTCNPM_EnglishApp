import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtext: string;
  icon: LucideIcon;
  iconColor?: string;
  progress?: number; // Không bắt buộc, thẻ nào có thì truyền vào
}

export default function StatCard({
  title,
  value,
  subtext,
  icon: Icon,
  iconColor = "text-gray-400",
  progress,
}: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between min-h-[160px]">
      {/* Hàng trên: Tiêu đề và Icon */}
      <div className="flex justify-between items-start">
        <span className="text-gray-700 font-medium text-sm">{title}</span>
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>

      {/* Hàng dưới: Số liệu và Tiến trình */}
      <div className="mt-4 space-y-2">
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        <p className="text-gray-400 text-xs font-medium">{subtext}</p>

        {/* Nếu có truyền progress thì mới hiện thanh bar */}
        {progress !== undefined && (
          <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
            <div
              className="bg-black h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
