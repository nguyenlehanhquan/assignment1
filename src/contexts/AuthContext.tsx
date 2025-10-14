// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Định nghĩa kiểu dữ liệu cho người dùng
interface User {
    id: string;
    username: string;
    email: string;
    // Thêm các thuộc tính khác của người dùng nếu cần
}

// Định nghĩa kiểu dữ liệu cho AuthContext
interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (userData: User) => void;
    logout: () => void;
}

// Tạo AuthContext với giá trị mặc định
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Định nghĩa props cho AuthProvider
interface AuthProviderProps {
    children: ReactNode;
}

// Tạo AuthProvider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const isAuthenticated = !!user; // Kiểm tra xem người dùng có tồn tại không

    const login = (userData: User) => {
        // Thường thì bạn sẽ lưu token hoặc thông tin người dùng vào localStorage/sessionStorage ở đây
        setUser(userData);
    };

    const logout = () => {
        // Xóa token hoặc thông tin người dùng khỏi localStorage/sessionStorage
        setUser(null);
    };

    const contextValue: AuthContextType = {
        user,
        isAuthenticated,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook để sử dụng AuthContext một cách dễ dàng hơn
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};