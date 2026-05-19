import React from "react";
import { BookOpen, Sparkles, BarChart2 } from "lucide-react";

export default function SplashScreen() {
  return (
    <div className="min-h-screen w-full bg-slate-50 relative overflow-hidden flex flex-col justify-center py-12">
      {/* Background Glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.25), transparent 60%),
            radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.25), transparent 60%)`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 selection:bg-purple-200">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-100">
            <BookOpen className="w-8 h-8 text-white stroke-[2.2]" />
          </div>
        </div>

        {/* Hero */}
        <div className="text-center max-w-3xl mb-14">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-5">
            Learn English Smartly
          </h1>

          <p className="text-slate-500 text-lg md:text-xl font-normal leading-relaxed px-4">
            Master English vocabulary, ace quizzes, and practice with AI. Your
            journey to fluency starts here.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-row items-center gap-4 mb-16">
          <button
            className="
              flex items-center gap-2
              px-7 py-3.5
              rounded-2xl
              text-white
              font-semibold
              tracking-tight
              bg-gradient-to-r
              from-blue-500
              to-purple-600
              shadow-md shadow-purple-200
              hover:scale-[1.02]
              hover:opacity-95
              transition-all
            "
          >
            <Sparkles className="w-4 h-4" />
            Get Started
          </button>

          <button
            className="
              px-7 py-3.5
              rounded-2xl
              text-slate-700
              font-medium
              bg-white
              border border-slate-200
              hover:bg-slate-50
              transition-all
              shadow-sm
            "
          >
            Sign In
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full px-4">
          {/* Card 1 */}
          <div className="bg-white/80 backdrop-blur-sm border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <BookOpen className="w-6 h-6 text-blue-600 stroke-[2]" />
            </div>

            <h3 className="text-slate-800 font-semibold text-xl mb-2">
              Rich Vocabulary
            </h3>

            <p className="text-slate-500 text-sm leading-relaxed max-w-[240px]">
              Learn words by category with examples and pronunciations
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80 backdrop-blur-sm border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6 text-purple-600 stroke-[2]" />
            </div>

            <h3 className="text-slate-800 font-semibold text-xl mb-2">
              Interactive Quizzes
            </h3>

            <p className="text-slate-500 text-sm leading-relaxed max-w-[240px]">
              Test your knowledge and earn XP with fun challenges
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/80 backdrop-blur-sm border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <BarChart2 className="w-6 h-6 text-blue-500 stroke-[2]" />
            </div>

            <h3 className="text-slate-800 font-semibold text-xl mb-2">
              Track Progress
            </h3>

            <p className="text-slate-500 text-sm leading-relaxed max-w-[240px]">
              Monitor your learning journey with detailed analytics
            </p>
          </div>
        </div>
      </div>

      {/* Help Button */}
      <div className="fixed bottom-4 right-4 z-20">
        <button className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 text-sm font-medium hover:bg-slate-50 hover:text-slate-600 transition-colors">
          ?
        </button>
      </div>
    </div>
  );
}
