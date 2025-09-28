import {CgFileDocument} from "react-icons/cg";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { PiMedal } from "react-icons/pi";

function DashboardOverview() {
    return (
        <div className="flex justify-between gap-2 w-[1760px]">
            <div className="flex items-center border-2 bg-white rounded-[12px] gap-48 shadow-2xl p-6">
                <div>
                    <p className="font-medium">Tổng số đề thi</p>
                    <h1 className="font-bold text-3xl text-blue-600">3</h1>
                </div>
                <div>
                    <CgFileDocument className="text-3xl rounded-[6px] text-blue-600 bg-blue-200 w-14 h-14 p-3"/>
                </div>
            </div>
            <div className="flex items-center border-2 bg-white rounded-[12px] gap-48 shadow-2xl p-6">
                <div>
                    <p className="font-medium">Đề thi đang hoạt động</p>
                    <h1 className="font-bold text-3xl text-green-600">3</h1>
                </div>
                <div>
                    <MdOutlineMonitorHeart className="text-3xl rounded-[6px] text-green-600 bg-green-200 w-14 h-14 p-3"/>
                </div>
            </div>
            <div className="flex items-center border-2 bg-white rounded-[12px] gap-48 shadow-2xl p-6">
                <div>
                    <p className="font-medium">Tổng thí sinh</p>
                    <h1 className="font-bold text-3xl text-purple-600">4</h1>
                </div>
                <div>
                    <GoPeople className="text-3xl rounded-[6px] text-purple-600 bg-purple-200 w-14 h-14 p-3"/>
                </div>
            </div>
            <div className="flex items-center border-2 bg-white rounded-[12px] gap-48 shadow-2xl p-6">
                <div>
                    <p className="font-medium">Đã tham gia thi</p>
                    <h1 className="font-bold text-3xl text-yellow-600">2</h1>
                </div>
                <div>
                    <PiMedal className="text-3xl rounded-[6px] text-yellow-600 bg-yellow-200 w-14 h-14 p-3"/>
                </div>
            </div>
        </div>
    );
}

export default DashboardOverview;