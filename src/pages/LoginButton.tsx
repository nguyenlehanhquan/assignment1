// src/components/LoginButton.tsx
import React from 'react';
import { useAuth } from '../contexts/AuthContext'; // Import useAuth hook

const LoginButton: React.FC = () => {
    const { isAuthenticated, login, logout } = useAuth();

    const handleLogin = () => {
        // Giả lập dữ liệu người dùng sau khi đăng nhập thành công
        const userData = {
            id: '123',
            username: 'john_doe',
            email: 'john.doe@example.com',
        };
        login(userData);
    };

    return (
        <div>
            {isAuthenticated ? (
                <>
                    <p>Bạn đã đăng nhập!</p>
                    <button onClick={logout}>Đăng xuất</button>
                </>
            ) : (
                <button onClick={handleLogin}>Đăng nhập</button>
            )}
        </div>
    );
};

export default LoginButton;