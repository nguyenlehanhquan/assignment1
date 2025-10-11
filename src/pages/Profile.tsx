// src/pages/Profile.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeAuthToken } from '../utils/auth.ts'; // Import hàm removeAuthToken

const Profile: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        removeAuthToken(); // Xóa token khi đăng xuất
        navigate('/login2'); // Chuyển hướng về trang đăng nhập
    };

    return (
        <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Chào mừng đến với trang cá nhân!</h2>
                <p className="text-gray-600 mb-6">Đây là thông tin mà chỉ người dùng đã đăng nhập mới thấy được.</p>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-200"
                >
                    Đăng xuất
                </button>
            </div>
        </div>
    );
};

export default Profile;