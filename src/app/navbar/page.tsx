"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link"; // Dùng Link thay vì router.push
import { usePathname } from "next/navigation"; // Để lấy URL hiện tại nhằm tô màu menu active

import {
  Home,
  BookOpen,
  MessageSquare,
  Star,
  BarChart2,
  User,
} from "lucide-react";

const listNav = [
  { name: "Home", icon: <Home />, path: "/dashboard" },
  { name: "Vocabulary", icon: <BookOpen />, path: "/dashboard/vocabulary" },
  { name: "Quiz", icon: <MessageSquare />, path: "/dashboard/quiz" },
  { name: "AI Chat", icon: <MessageSquare />, path: "/dashboard/ai-chat" },
  { name: "Favorites", icon: <Star />, path: "/dashboard/favorites" },
  { name: "Progress", icon: <BarChart2 />, path: "/dashboard/progress" },
  { name: "Profile", icon: <User />, path: "/dashboard/profile" },
];

export default function Navbar() {
  const { user } = useAuth();
  const pathname = usePathname(); // Lấy đường dẫn hiện tại (Ví dụ: /dashboard/quiz)
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!user) return;
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  if (loading) {
    return (
      <div className="w-64 p-4 border-r border-gray-300">
        Loading sidebar...
      </div>
    );
  }

  return (
    // Bỏ h-screen ở bọc ngoài cùng này để tránh lỗi layout lồng nhau
    <div className="w-64 bg-white border-r border-gray-300 p-4 flex flex-col h-screen sticky top-0">
      {/* Avatar + Name */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-pink-300 flex items-center justify-center text-white font-bold">
          {userData?.name?.charAt(0)}
        </div>

        <div>
          <p className="font-bold text-gray-800">{userData?.name}</p>
          <div className="flex items-center gap-2">
            <div className="text-xs border px-1 rounded bg-gradient-to-r from-blue-300 to-pink-400 text-white font-bold">
              LV {userData?.level}
            </div>
            <p className="text-sm text-gray-500">XP {userData?.xp}</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-1">
        {listNav.map((item, index) => {
          // Kiểm tra xem menu này có đang được kích hoạt hay không
          const isActive = pathname === item.path;

          return (
            <Link
              key={index}
              href={item.path}
              className={`flex items-center gap-5 p-3 rounded-2xl transition-all duration-200 ${
                isActive
                  ? "bg-pink-200 text-pink-700 font-medium" // Style khi đang chọn
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-700" // Style mặc định
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
