import { AiOutlineEye } from 'react-icons/ai';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { FaHourglassStart } from 'react-icons/fa';
import { FaHourglassEnd } from 'react-icons/fa';
import { LuClock } from 'react-icons/lu';
import { TiDocumentText } from 'react-icons/ti';

function DashboardTestManage() {
  return (
    <div className="w-[1760px] ">
      <div className="flex justify-between">
        <h1 className="text-[30px] font-bold">Quản lý đề thi</h1>
        <Link to="/dashboard/testmanage/create">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-[12px] text-white font-bold py-3 px-5 hover:bg-gradient-to-r hover:from-blue-400 hover:to-green-600">
            + Tạo đề thi mới
          </button>
        </Link>
      </div>
      <div className="flex flex-col bg-white rounded-[12px] p-5 my-5 shadow-xl gap-4">
        <div className="flex items-center gap-3">
          <h1 className="font-bold text-2xl ">Rung chuông vàng lần 3</h1>
          <div className="rounded-[12px] bg-green-200 text-green-700 font-medium px-3 py-0.5">Đang hoạt động</div>
        </div>
        <div className="flex justify-between">
          <h1 className="text-gray-600 font-medium text-[19.5px]">Rung chuông vàng BTEC FPT</h1>
          <div className="flex gap-10 items-center">
            <Link to="/dashboard/testmanage/view">
              <AiOutlineEye className="text-3xl text-blue-600" />
            </Link>
            <Link to="/dashboard/testmanage/edit">
              <HiOutlinePencilAlt className="text-3xl text-yellow-600" />
            </Link>
            <Link to="/dashboard/testmanage/delete">
              <RiDeleteBinLine className="text-3xl text-red-600" />
            </Link>
          </div>
        </div>
        <div className="flex gap-60 text-gray-500 font-medium">
          <h2 className="flex items-center gap-2">
            <FaHourglassStart fontSize={18} />
            Bắt đầu:
            <time dateTime="2025-09-25T14:40:00"> 17:45:00 25/9/2025</time>
          </h2>
          <h2 className="flex items-center gap-2">
            <FaHourglassEnd fontSize={18} />
            Kết thúc:
            <time dateTime="2025-09-25T19:40:00"> 18:00:00 25/9/2025</time>
          </h2>
          <h2 className="flex items-center gap-2">
            <TiDocumentText fontSize={24} />2 câu hỏi
          </h2>
          <h2 className="flex items-center gap-2">
            <LuClock fontSize={20} />
            20 phút
          </h2>
        </div>
      </div>
    </div>
  );
}

export default DashboardTestManage;
