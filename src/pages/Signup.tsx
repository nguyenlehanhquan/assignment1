import React, { useState } from 'react';
import logo from '../images/tazajmart_logo.png';

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Mật khẩu và xác nhận mật khẩu không khớp!');
      return;
    }
    // Xử lý logic đăng ký tại đây
    console.log('Email:', email);
    console.log('Password:', password);
    alert('Đăng ký thành công (hoặc xử lý lỗi)!');
  };

  return (
    <div className="min-h-screen bg-green-900 flex flex-col items-center justify-center p-4">
      {/* Header tối giản hoặc có thể bỏ nếu chỉ muốn form */}
      <div className="w-full max-w-md flex justify-center mb-8">
        {/* Thay thế bằng logo thực tế của bạn */}
        <img src={logo} alt="Tazajmart Logo" className="h-10" />
      </div>

      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Đăng ký tài khoản mới</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="sr-only">
              Mật khẩu
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Mật khẩu"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent pr-12 transition duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-green-600 focus:outline-none"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M3.707 2.293a1 1 0 00-1.414 1.414L5.586 7.5a1 1 0 010 1.414l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293a1 1 0 011.414 0l3.293 3.293a1 1 0 001.414-1.414l-3.293-3.293a1 1 0 010-1.414l3.293-3.293a1 1 0 10-1.414-1.414L8.414 6.5A1 1 0 017 6.086L3.707 2.293zM10 12a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="relative">
            <label htmlFor="confirmPassword" className="sr-only">
              Xác nhận Mật khẩu
            </label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              placeholder="Xác nhận Mật khẩu"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent pr-12 transition duration-200"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-green-600 focus:outline-none"
            >
              {showConfirmPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M3.707 2.293a1 1 0 00-1.414 1.414L5.586 7.5a1 1 0 010 1.414l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293a1 1 0 011.414 0l3.293 3.293a1 1 0 001.414-1.414l-3.293-3.293a1 1 0 010-1.414l3.293-3.293a1 1 0 10-1.414-1.414L8.414 6.5A1 1 0 017 6.086L3.707 2.293zM10 12a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-green-900 font-bold py-3 px-4 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 transition duration-200"
          >
            Đăng ký
          </button>
        </form>

        <p className="mt-8 text-center text-gray-600 text-sm">
          Bạn đã có tài khoản?{' '}
          <a href="/login2" className="text-green-700 hover:underline font-semibold">
            Đăng nhập ngay
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
