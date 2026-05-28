"use client";

import React, { useEffect, useState } from "react";
import TopicCard from "./TopicCard"; // Đường dẫn đến file TopicCard của bạn
import { getAllTopics, Topic } from "@/lib/vocabService";
import {
  Plane,
  Utensils,
  Laptop,
  Briefcase,
  MessageSquare,
} from "lucide-react";

// Ánh xạ title từ Firebase sang đúng Icon của Lucide để hiển thị sinh động
const iconMap: Record<string, any> = {
  Travel: Plane,
  Food: Utensils,
  Technology: Laptop,
  Business: Briefcase,
};

export default function LearningCategories() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await getAllTopics();
      setTopics(data);
      setLoading(false);
    };
    fetchTopics();
  }, []);

  if (loading) {
    return (
      <div className="text-sm text-gray-400 animate-pulse">
        Đang tải dữ liệu từ Firebase...
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Learning Categories</h2>
        <p className="text-gray-400 text-sm">
          Chọn một chủ đề để bắt đầu học từ vựng
        </p>
      </div>

      {/* Lưới hiển thị danh sách các thẻ Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {topics.map((topic) => {
          // Lấy đúng icon theo title, nếu không khớp thì dùng MessageSquare làm mặc định
          const IconComponent = iconMap[topic.title] || MessageSquare;

          return (
            <div
              key={topic.id}
              onClick={() =>
                console.log(`Bạn vừa click vào danh mục: ${topic.id}`)
              }
              className="cursor-pointer"
            >
              <TopicCard
                title={topic.title}
                wordCount={topic.wordCount}
                iconBgColor={topic.iconBgColor}
                icon={IconComponent}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
