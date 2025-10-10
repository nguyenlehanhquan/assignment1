import { CgFileDocument } from 'react-icons/cg';
import { MdOutlineMonitorHeart } from 'react-icons/md';
import { GoPeople } from 'react-icons/go';
import { PiMedal } from 'react-icons/pi';
import { Link } from 'react-router-dom';

function DashboardOverview() {
  return (
    <div>
      <div className="flex justify-between gap-2 w-[1760px]">
        <div className="flex items-center border-2 bg-white rounded-[12px] w-[420px] shadow-2xl p-6 relative">
          <div>
            <p className="font-medium">Tổng số đề thi</p>
            <h1 className="font-bold text-3xl text-blue-600">3</h1>
          </div>
          <div>
            <CgFileDocument className="text-3xl rounded-[6px] text-blue-600 bg-blue-200 w-14 h-14 p-3 absolute right-6 bottom-[1.6rem]" />
          </div>
        </div>
        <div className="flex items-center border-2 bg-white rounded-[12px] w-[420px] shadow-2xl p-6 relative">
          <div>
            <p className="font-medium">Đề thi đang hoạt động</p>
            <h1 className="font-bold text-3xl text-green-600">3</h1>
          </div>
          <div>
            <MdOutlineMonitorHeart className="text-3xl rounded-[6px] text-green-600 bg-green-200 w-14 h-14 p-3 absolute right-6 bottom-[1.6rem]" />
          </div>
        </div>
        <div className="flex items-center border-2 bg-white rounded-[12px] w-[420px] shadow-2xl p-6 relative">
          <div>
            <p className="font-medium">Tổng thí sinh</p>
            <h1 className="font-bold text-3xl text-purple-600">4</h1>
          </div>
          <div>
            <GoPeople className="text-3xl rounded-[6px] text-purple-600 bg-purple-200 w-14 h-14 p-3 absolute right-6 bottom-[1.6rem]" />
          </div>
        </div>
        <div className="flex items-center border-2 bg-white rounded-[12px] w-[420px] shadow-2xl p-6 relative">
          <div>
            <p className="font-medium">Đã tham gia thi</p>
            <h1 className="font-bold text-3xl text-yellow-600">2</h1>
          </div>
          <div>
            <PiMedal className="text-3xl rounded-[6px] text-yellow-600 bg-yellow-200 w-14 h-14 p-3 absolute right-6 bottom-[1.6rem]" />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-7 rounded-[12px] mt-6 w-[420px] flex items-center gap-16">
        <div className="w-[200px]">
          <h1 className="font-bold text-white text-[35px]">Chào mừng đến với Admin Dashboard</h1>
          <p className="text-white text-[18px]">Quản lý cuộc thi Rung Chuông Vàng BTEC một cách hiệu quả</p>
        </div>
        <Link to="/dashboard/testmanage/create">
          <div className="bg-white text-orange-500 font-bold rounded-[12px] items-center flex justify-center w-[100px] h-[120px] hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-green-600">
            <div className="w-1/4 justify-center justify-self-center">Tạo đề thi mới</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DashboardOverview;
