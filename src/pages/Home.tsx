import { IoNotificationsOutline } from 'react-icons/io5';
import { FaCalendar, FaKey, FaPlayCircle, FaTrophy } from 'react-icons/fa';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.tsx';
import LoginButton from "./LoginButton.tsx";

function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-gradient-to-r from-yellow-400 to-orange-500 ">
      <div className="w-14 mt-[100px] h-14 bg-yellow-200 text-white flex items-center justify-center rounded-full ">
        <div className="animate-bounce-slow">
          <IoNotificationsOutline fontSize={2} color="#FFF" size={30} />
        </div>
      </div>

      <p className="mt-5 font-bold text-[50px] text-white">Rung Chuông Vàng</p>
      <p className="mt-1 font-bold text-[50px] text-yellow-200">BTEC</p>
      <div className="w-[600px] ">
        <p className="mt-1 font-bold text-[20px] text-center text-white">
          Cuộc thi kiến thức trực tuyến dành cho sinh viên BTEC. Thể hiện tài năng và giành những phần thưởng hấp dẫn!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Link to="/studentregister">
          <button className="px-6 py-3 bg-white text-yellow-600 font-semibold rounded-lg shadow flex md:items-center">
            <FaPlayCircle className="mr-2 relative top-1" />
            Tham gia thi ngay
          </button>
        </Link>

        <Link to="/login">
          <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow flex md:items-center">
            <FaKey className="mr-2 relative top-1" />
            Đăng nhập Admin
          </button>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 mt-10">
        <div className="flex-1 bg-yellow-200 bg-opacity-30 p-6 rounded-lg w-60 text-center text-white flex flex-col items-center">
          <FaTrophy fontSize={2} color="#FFF" size={30} className="mb-3" />
          <p className="font-bold mb-2">Giải thưởng hấp dẫn</p>
          <p className="text-sm">Cơ hội nhận những phần thưởng giá trị từ cuộc thi</p>
        </div>

        <div className="flex-1 bg-yellow-200 bg-opacity-30 p-6 rounded-lg w-60 text-center text-white flex flex-col items-center">
          <MdOutlinePeopleAlt fontSize={2} color="#FFF" size={30} className="mb-3" />
          <p className="font-bold mb-2">Cộng đồng sinh viên</p>
          <p className="text-sm">Kết nối và giao lưu với các bạn sinh viên khác</p>
        </div>

        <div className="flex-1 bg-yellow-200 bg-opacity-30 p-6 rounded-lg w-60 text-center text-white flex flex-col items-center">
          <FaCalendar fontSize={2} color="#FFF" size={30} className="mb-3" />
          <p className="font-bold mb-2">Thi trực tuyến</p>
          <p className="text-sm">Tham gia thi mọi lúc, mọi nơi với giao diện thân thiện</p>
        </div>
      </div>
        <LoginButton/>
      <Footer />
    </div>
  );
}

export default Home;
