"use client";

import { use, useEffect, useState } from "react";

import { useAuth } from "@/context/AuthContext";

import { doc, getDoc } from "firebase/firestore";

import { db } from "@/lib/firebase";
import AddXPButton from "@/components/ui/AddButton";
import { Card } from "@/components/ui/card";
import StatCard from "@/components/home/startcard";
import { Flame, Target, Trophy } from "lucide-react";
import { u } from "framer-motion/client";

export default function Dashboard() {
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
    <div>
      {/* <h1>Welcome {userData?.name}</h1>
      <p>Level: {userData?.level}</p>
      <p>XP: {userData?.xp}</p>
      <p>Streak: {userData?.streak}</p>
      <AddXPButton user={user} userData={userData} setUserData={setUserData} /> */}
      {/* header home */}
      <div className="flex flex-col justify-center gap-8 mx-8">
        <div className="w-full p-8 rounded-2xl flex flex-col justify-center bg-linear-to-r from-pink-300 via-rose-300 to-blue-100 text-white shadow-sm min-h-35">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            Welcome back, {userData?.name || "Demo User"}!
            <span className="animate-bounce">👋</span>
          </h1>
          <p className="text-rose-50/90 text-sm mt-2 font-medium">
            Ready to continue your English learning journey?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            title="Total XP"
            value={userData?.xp || 0}
            subtext={`Level ${userData?.level || 1}`}
            icon={Trophy}
            progress={
              userData?.xp ? Math.min((userData.xp / 1000) * 100, 100) : 0
            }
          />
          <StatCard
            title="Learning Streak"
            value={userData?.streak ? `${userData.streak} days` : "0 days"}
            subtext="Keep it up!"
            icon={Flame}
            iconColor="text-orange-500"
          />
          <StatCard
            title="Daily Challenge"
            value={userData?.dailyChallenge || "0/0"}
            subtext="Tasks completed"
            icon={Target}
            progress={
              userData?.dailyChallenge
                ? Math.min(
                    (parseInt(userData.dailyChallenge.split("/")[0]) /
                      parseInt(userData.dailyChallenge.split("/")[1])) *
                      100,
                    100,
                  )
                : 0
            }
          />
        </div>
      </div>
    </div>
  );
}
