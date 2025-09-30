import {Link} from "react-router-dom";
import {FiLock} from "react-icons/fi";
import {MdOutlineMailOutline} from "react-icons/md";
import {FaArrowLeft} from "react-icons/fa";

function Login() {
    return (
        <div className="w-full h-screen flex flex-col items-center bg-gradient-to-r from-yellow-400 to-orange-500 ">

            <form className="bg-white h-[500px] w-[450px] rounded-2xl mt-72 flex flex-col items-center justify-center">
                <div className="mb-8 flex flex-col items-center justify-center">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full h-14 w-14 flex items-center justify-center mb-3">
                        <FiLock className="text-white text-3xl"/>
                    </div>
                    <h1 className="font-bold text-3xl mb-2">Admin Login</h1>
                    <p>Đăng nhập với quyền quản trị</p>
                </div>

                <div className="w-5/6 flex flex-col items-center justify-center">

                    <label className="block mb-1 font-bold self-start">Email</label>
                    <div className="relative w-full mb-4">
                        <MdOutlineMailOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="email" placeholder="admin@gmail.com" className="border border-gray-300 rounded-md w-full p-2 pl-9" />
                    </div>

                    <label className="block mb-1 font-bold self-start">Mật khẩu</label>
                    <div className="relative w-full mb-4">
                        <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                        <input type="password" placeholder="A123456a@" className="border border-gray-300 rounded-md w-full p-2 pl-9" />
                    </div>

                    <Link to="/dashboard">
                        <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-amber-50 font-bold w-full rounded-md m-3 h-10">Đăng nhập</button>
                    </Link>
                    <Link to="/">
                        <button className="font-bold mt-2 flex "><FaArrowLeft className="m-1"/>Quay lại trang chủ</button>
                    </Link>
                </div>
            </form>

        </div>
    );
}

export default Login;