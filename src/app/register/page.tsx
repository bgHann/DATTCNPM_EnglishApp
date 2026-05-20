"use client";
import { useState } from "react";
import { auth, db, googleProvider } from "@/lib/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { BookOpen, CheckCircle, XCircle } from "lucide-react";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    // Kiểm tra mật khẩu khớp nhau
    if (password !== confirmPassword) {
      setMessage({ text: "Mật khẩu không khớp!", type: "error" });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(userCredential.user, { displayName: name });
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name,
        email,
        level: 1,
        xp: 0,
        streak: 1,
        avatar: "",
        createdAt: new Date(),
      });
      setMessage({ text: "Tài khoản đăng ký thành công!", type: "success" });
      setTimeout(() => router.push("/dashboard"), 2000);
    } catch (err: any) {
      setMessage({ text: "Đăng ký thất bại: " + err.message, type: "error" });
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/dashboard");
    } catch (err: any) {
      setMessage({ text: "Lỗi Google: " + err.message, type: "error" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fefcff] p-4">
      <div className="w-full max-w-105 bg-white border border-slate-100 p-8 rounded-[2rem] shadow-xl">
        {/* */}
        <div className="flex justify-center mb-2">
          <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-2">Create Account</h2>
        <p className="text-center text-slate-500 text-sm mb-6">
          Start your English learning journey today
        </p>

        {message && (
          <div
            className={`mb-4 p-4 rounded-xl flex items-center gap-3 ${message.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
          >
            {message.type === "success" ? (
              <CheckCircle size={20} />
            ) : (
              <XCircle size={20} />
            )}
            <p className="text-sm font-medium">{message.text}</p>
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-2">
          <input
            className="w-full p-4 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-100"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full p-4 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-100"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full p-4 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-100"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="w-full p-4 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-100"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:opacity-90 transition-all"
          >
            Create Account
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center text-[10px] tracking-widest font-bold uppercase">
            <span className="bg-white px-2 text-slate-400">
              OR CONTINUE WITH
            </span>
          </div>
        </div>

        <button
          onClick={handleGoogle}
          className="w-full py-3.5 border border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
        >
          <img
            src="https://www.google.com/favicon.ico"
            className="w-5 h-5"
            alt="Google"
          />
          Google
        </button>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
