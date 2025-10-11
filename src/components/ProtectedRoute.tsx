// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth.ts'; // Import hàm isAuthenticated

interface ProtectedRouteProps {
    children?: React.ReactNode; // Cho phép component con
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    if (!isAuthenticated()) {
        // Nếu chưa đăng nhập, chuyển hướng về trang login
        return <Navigate to="/login2" replace />;
    }

    // Nếu đã đăng nhập, hiển thị component con (hoặc outlet nếu dùng layout)
    return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;