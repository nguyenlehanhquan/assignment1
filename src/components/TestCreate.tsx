import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function TestCreate() {
  const returnPreviousPage = useNavigate();

  return (
    <form className="w-[1760px]">
      <div className="flex items-center gap-5">
        <FaArrowLeft onClick={() => returnPreviousPage(-1)} fontSize={20} className=" cursor-pointer" />
        <h1 className="text-2xl font-bold">Tạo đề thi mới</h1>
      </div>
      <div className="bg-white rounded-[12px] p-6 shadow-xl mt-6">
        <h1 className="font-bold text-xl mb-4">Thông tin cơ bản</h1>
        <div className="flex justify-between gap-6">
          <div className="w-1/2 flex flex-col gap-2">
            <label className="font-medium">Tiêu đề đề thi</label>
            <input placeholder="Nhập tiêu đề đề thi" className="border border-gray-300 rounded-md w-full px-4 py-2" />
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <label className="font-medium">Thời gain làm bài (phút)</label>
            <input
              placeholder="Nhập thời gian làm bài (phút)"
              className="border border-gray-300 rounded-md w-full px-4 py-2"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="font-medium">Mô tả đề thi</label>
          <textarea
            placeholder="Mô tả về đề thi này"
            rows={3}
            className="border border-gray-300 rounded-md w-full px-4 py-3"
          />
        </div>
        <div className="flex justify-between gap-6 mt-5">
          <div className="w-1/2 flex flex-col gap-2">
            <label className="font-medium">Thời gian bắt đầu</label>
            <input type="datetime-local" className="border border-gray-300 rounded-md w-full px-4 py-2" />
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <label className="font-medium">Thời gian kết thúc</label>
            <input type="datetime-local" className="border border-gray-300 rounded-md w-full px-4 py-2" />
          </div>
        </div>
        <div className="flex items-center gap-3 mt-5">
          <input type="checkbox" className="w-4 h-4" />
          <label>Kích hoạt đề thi (cho phép sinh viên tham gia)</label>
        </div>
      </div>
    </form>
  );
}

export default TestCreate;
