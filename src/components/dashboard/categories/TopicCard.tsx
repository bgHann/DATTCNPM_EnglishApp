import React from "react";
import { Card } from "../../ui/card";
import { LucideIcon, ArrowRight } from "lucide-react";

interface TopicCardProps {
  title: string;
  wordCount: number;
  iconBgColor: string;
  icon: LucideIcon;
}

export default function TopicCard({
  title,
  wordCount,
  iconBgColor,
  icon,
}: TopicCardProps) {
  return (
    // 'group' ở đây là bắt buộc để các thành phần con bên trong nhận biết được sự kiện hover của Card
    <Card className="group relative flex flex-col items-center justify-end p-6  pt-24 cursor-pointer hover:shadow-md hover:border-blue-200 transition-all rounded-2xl border border-gray-100 w-full min-h-40">
      {/* Icon chủ đề ở góc trên bên trái */}
      <div
        className={`absolute top-5 left-5 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${iconBgColor}`}
      >
        {React.createElement(icon, { className: "w-6 h-6 text-white" })}
      </div>

      {/* Nút mũi tên Next: Mặc định ẩn (opacity-0), khi hover mới hiện (group-hover:opacity-100) */}
      <div className="absolute top-6 right-6 text-gray-400 transition-all duration-300 ease-out opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-gray-600 shrink-0">
        <ArrowRight className="w-4 h-4" />
      </div>

      {/* title */}
      <div className="flex flex-col items-center text-center gap-1 w-full">
        <h3 className="text-gray-900 font-semibold text-lg leading-tight">
          {title}
        </h3>
        <p className="text-gray-400 text-xs font-medium">{wordCount} words</p>
      </div>
    </Card>
  );
}
