"use client";

import { doc, updateDoc } from "firebase/firestore";

import { db } from "@/lib/firebase";

type Props = {
  user: any;
  userData: any;
  setUserData: any;
};

export default function AddXPButton({ user, userData, setUserData }: Props) {
  const handleAddXP = async () => {
    if (!userData || !user) return;

    // xp mới
    const newXP = userData.xp + 10;

    // level mới
    const newLevel = Math.floor(newXP / 100) + 1;

    // update firestore
    await updateDoc(doc(db, "users", user.uid), {
      xp: newXP,
      level: newLevel,
    });

    // update local state
    setUserData({
      ...userData,
      xp: newXP,
      level: newLevel,
    });
  };

  return (
    <button
      onClick={handleAddXP}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg"
    >
      Add XP
    </button>
  );
}
