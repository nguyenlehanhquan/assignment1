// src/auth.ts

export const setAuthToken = (token: string) => {
    localStorage.setItem('authToken', token);
};

export const getAuthToken = (): string | null => {
    return localStorage.getItem('authToken');
};

export const removeAuthToken = () => {
    localStorage.removeItem('authToken');
};

export const isAuthenticated = (): boolean => {
    const token = getAuthToken();
    // Ở đây bạn có thể thêm logic để kiểm tra token có hợp lệ không (ví dụ: hết hạn)
    // Đơn giản nhất là chỉ kiểm tra sự tồn tại của token
    return !!token;
};