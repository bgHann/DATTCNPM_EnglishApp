// app/dashboard/layout.tsx
import Navbar from "@/app/navbar/page";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* BÊN TRÁI: Cố định Thanh điều hướng (Navbar) */}
      <Navbar />

      {/* BÊN PHẢI: Nội dung thay đổi linh hoạt theo từng trang */}
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
