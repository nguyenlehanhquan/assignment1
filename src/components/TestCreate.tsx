import { FaArrowLeft } from "react-icons/fa";
import {useNavigate} from "react-router-dom";

function TestCreate() {

    const returnPreviousPage = useNavigate();

    return (
        <form className="w-[1760px]">
            <div className="flex items-center gap-5">
                <FaArrowLeft onClick={() => returnPreviousPage(-1)} fontSize={20} className=" cursor-pointer"/>
                <h1 className="text-2xl font-bold">Tạo đề thi mới</h1>
            </div>
            <div className="bg-white rounded-[12px] p-6 shadow-xl mt-6">
                <h1 className="font-bold text-xl mb-3">Thông tin cơ bản</h1>
                <div className="flex justify-between gap-6">
                    <div className="w-1/2 flex flex-col gap-2">
                        <label>Tiêu đề đề thi</label>
                        <input placeholder="Nhập tiêu đề đề thi" className="border border-gray-300 rounded-md w-full px-4 py-2" />
                    </div>
                    <div className="w-1/2 flex flex-col gap-2">
                        <label>Thời gain làm bài (phút)</label>
                        <input placeholder="Nhập thời gian làm bài (phút)" className="border border-gray-300 rounded-md w-full px-4 py-2" />
                    </div>
                </div>



            </div>

        </form>
    );
}

export default TestCreate;