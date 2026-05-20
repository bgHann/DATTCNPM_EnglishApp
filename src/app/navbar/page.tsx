"use client";

import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthContext";

import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import AddXPButton from "@/components/ui/AddButton";
import { Avatar } from "radix-ui";

//list nav và icon tương ứng của home Vocabulary Quiz AI Chat Pavorites Progress  tương ứng với từng màn hình
import {
  Home,
  BookOpen,
  MessageSquare,
  Star,
  BarChart2,
  User,
} from "lucide-react";
import router from "next/router";

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
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen">
      {/* SIDEBAR */}
      <div className="w-64 bg-white border-r border-gray-300 p-4">
        {/* Avatar + Name */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-pink-300 flex items-center justify-center text-white font-bold">
            {userData?.name?.charAt(0)}
          </div>

          <div>
            <p className="font-bold">{userData?.name}</p>
            <div className="    flex items-center gap-2">
              <div className="text-sm border px-1  rounded bg-linear-to-r from-blue-300 to-pink-400 text-white font-bold">
                {" "}
                LV {userData?.level}
              </div>
              <p className="text-sm text-gray-500">XP {userData?.xp}</p>
            </div>
          </div>
        </div>

        {/* Menu */}
        {listNav.map((item, index) => (
          <div
            key={index}
            className="p-2 rounded-2xl hover:bg-pink-200 cursor-pointer"
            onClick={() => router.push(item.path)}
          >
            <div className="flex items-center gap-5 py-1 text-gray-500">
              {item.icon}
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
