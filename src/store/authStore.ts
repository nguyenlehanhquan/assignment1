// src/store/authStore.ts
import { create } from 'zustand';

// Định nghĩa kiểu dữ liệu cho người dùng
interface User {
    id: string;
    username: string;
    email: string;
    // Thêm các thuộc tính khác của người dùng nếu cần
}

// Định nghĩa kiểu dữ liệu cho Auth State
interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (userData: User) => void;
    logout: () => void;
}

// Tạo Auth Store
export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false, // Mặc định là chưa đăng nhập

    login: (userData: User) => {
        // Trong thực tế, bạn có thể lưu token vào localStorage ở đây
        set({ user: userData, isAuthenticated: true });
    },

    logout: () => {
        // Trong thực tế, bạn có thể xóa token khỏi localStorage ở đây
        set({ user: null, isAuthenticated: false });
    },
}));