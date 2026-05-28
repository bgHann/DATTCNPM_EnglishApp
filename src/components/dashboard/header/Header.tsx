import { useUserData } from "@/hooks/useUserData";
import React from "react";

export default function Header() {
  const { userData, loading } = useUserData();
  return (
    <div className="w-full p-8 rounded-2xl flex flex-col justify-center bg-linear-to-r from-pink-300 via-rose-300 to-blue-100 text-white shadow-sm min-h-35">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        Welcome back, {userData?.name || "Demo User"}!
        <span className="animate-bounce">👋</span>
      </h1>
      <p className="text-rose-50/90 text-sm mt-2 font-medium">
        Ready to continue your English learning journey?
      </p>
    </div>
  );
}
