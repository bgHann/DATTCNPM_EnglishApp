import React from "react";
import StatCard from "./StartCard";
import { Flame, Target, Trophy } from "lucide-react";
import { useUserData } from "@/hooks/useUserData";

export default function OverviewStats() {
  const { userData, loading } = useUserData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard
        title="Total XP"
        value={userData?.xp || 0}
        subtext={`Level ${userData?.level || 1}`}
        icon={Trophy}
        progress={userData?.xp ? Math.min((userData.xp / 1000) * 100, 100) : 0}
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
  );
}
