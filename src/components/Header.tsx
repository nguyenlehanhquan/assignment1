import {FiBell} from "react-icons/fi";
import {Link} from "react-router-dom";
import {GoPerson} from "react-icons/go";
import {FaArrowRightFromBracket} from "react-icons/fa6";


function Header() {
    return (
        <div className="border-2 flex items-center justify-between pr-[400px] pl-[400px] bg-white">
            <div className="flex items-center">
                <Link to="/dashboard">
                    <FiBell className="m-3 text-white bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-[4px] text-[40px] p-2"/>
                </Link>
                <div>
                    <h1 className="font-bold">Rung Chuông Vàng BTEC</h1>
                    <p className="text-gray-500">Admin Dashboard</p>
                </div>
            </div>
            <div className="mr-3 ml-3 flex items-center gap-16">
                <p className="flex items-center gap-3">
                    <GoPerson className="text-[1.4rem] font-bold"/>
                    admin@gmail.com
                    <span className="text-yellow-600 font-bold -ml-1">(Admin)</span>
                </p>
                <Link to="/">
                    <button className="flex items-center gap-2">
                        <FaArrowRightFromBracket />
                        Đăng xuất
                    </button>
                </Link>
            </div>
        </div>

    );
}

export default Header;