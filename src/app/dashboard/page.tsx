"use client";

import React from "react";
import StatCard from "@/components/dashboard/overviewStats/StartCard";
import LearningCategories from "@/components/dashboard/categories/learningCategories";
import { useUserData } from "@/hooks/useUserData";
import OverviewStats from "@/components/dashboard/overviewStats/OverviewStats";
import Header from "@/components/dashboard/header/Header";

export default function Dashboard() {
  // Chỉ cần gọi đúng 1 dòng này là có đầy đủ dữ liệu
  const { userData, loading } = useUserData();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div>
      {/* header home */}
      <div className="flex flex-col justify-center gap-8 mx-8">
        {/* Phần chào mừng người dùng */}
        <Header />
        {/* Cụm Stat Cards */}
        <OverviewStats />

        {/* Categories */}
        <LearningCategories />
      </div>
    </div>
  );
}
