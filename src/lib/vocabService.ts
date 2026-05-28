import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

//định nghĩa kiểu dữ liệu cho Vocabulary
export interface Topic {
  id: string;
  title: string;
  wordCount: number;

  iconBgColor: string; // màu nền cho icon
}
// hàm lấy toàn bộ chủ đề
export const getAllTopics = async (): Promise<Topic[]> => {
  try {
    const categoriesRef = collection(db, "categories");
    const snapshot = await getDocs(categoriesRef);

    // Gom dữ liệu từ Firebase trả về mảng object sạch
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Topic[];
  } catch (error) {
    console.error("Lỗi khi lấy danh mục từ Firebase:", error);
    return [];
  }
};
