import React from "react";
import { BookOpen, Sparkles, BarChart2 } from "lucide-react";

export default function SplashScreen() {
  return (
    <div className="min-h-screen w-full bg-slate-50 relative overflow-hidden flex items-center justify-center px-6 py-10">
      {/* Background Glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 70%, rgba(173,216,230,0.18), transparent 60%),
            radial-gradient(circle at 70% 30%, rgba(255,182,193,0.18), transparent 60%)
          `,
        }}
      />

      {/* main container */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
        {/* logo */}
        <div className="mb-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-100">
            <BookOpen className="w-7 h-7 text-white stroke-[2.3]" />
          </div>
        </div>

        {/* hero section */}
        <div className="text-center max-w-2xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 leading-tight">
            Smart English
          </h1>

          <p className="text-slate-500 text-[15px] md:text-lg leading-relaxed font-normal">
            Học từ vựng, luyện quiz và trò chuyện cùng AI để cải thiện kỹ năng
            tiếng Anh mỗi ngày.
          </p>
        </div>

        {/* buttons */}
        <div className="flex items-center gap-4 mb-14">
          <a href="/register">
            <button
              className="
                  flex items-center gap-2
                  px-6 py-3
                  rounded-2xl
                  text-sm
                  font-semibold
                  text-white
                  bg-linear-to-r
                  from-blue-500
                  to-purple-600
                  shadow-md shadow-purple-200
                  hover:scale-[1.02]
                  transition-all
                "
            >
              <Sparkles className="w-4 h-4" />
              Get Started
            </button>
          </a>

          <a href="/login">
            <button
              className="
                  px-6 py-3
                  rounded-2xl
                  text-sm
                  font-medium
                  text-slate-700
                  bg-white
                  border border-slate-200
                  shadow-sm
                  hover:bg-slate-50
                  transition-all
                "
            >
              Sign In
            </button>
          </a>
        </div>

        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {/* card 1 */}
          <div className="bg-white/85 backdrop-blur-sm border border-slate-100 rounded-3xl p-7 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
              <BookOpen className="w-5 h-5 text-blue-600 stroke-[2]" />
            </div>

            <h3 className="text-slate-800 font-semibold text-lg mb-2">
              Từ vựng phong phú
            </h3>

            <p className="text-slate-500 text-sm leading-relaxed">
              Học từ vựng theo chủ đề với phát âm và ví dụ trực quan.
            </p>
          </div>

          {/* c 2 */}
          <div className="bg-white/85 backdrop-blur-sm border border-slate-100 rounded-3xl p-7 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5 text-purple-600 stroke-[2]" />
            </div>

            <h3 className="text-slate-800 font-semibold text-lg mb-2">
              Quiz tương tác
            </h3>

            <p className="text-slate-500 text-sm leading-relaxed">
              Luyện tập bằng các câu hỏi thú vị và nhận XP mỗi ngày.
            </p>
          </div>

          {/* card 3 */}
          <div className="bg-white/85 backdrop-blur-sm border border-slate-100 rounded-3xl p-7 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
              <BarChart2 className="w-5 h-5 text-blue-500 stroke-[2]" />
            </div>

            <h3 className="text-slate-800 font-semibold text-lg mb-2">
              Theo dõi tiến độ
            </h3>

            <p className="text-slate-500 text-sm leading-relaxed">
              Theo dõi quá trình học tập với thống kê trực quan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
