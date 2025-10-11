import TopBanner from '../images/top_banner.jpg';
import logo from '../images/logo.png';
import { FaSearch } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { IoNotifications } from 'react-icons/io5';
import { FaShoppingBag } from 'react-icons/fa';
import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

function OrganicFood() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-screen h-auto">
      <div className="w-full h-auto bg-lime-400 self-center">
        <img src={TopBanner} alt="top_banner" className=" w-full h-auto object-cover" />
      </div>
      <div className="bg-[#5bbb46] w-full flex justify-center items-center">
        <div className=" flex items-center w-[45%] py-3 ">
          <div className="w-auto h-auto mr-20">
            <a href="/organicfood">
              <img src={logo} alt="logo" className="h-auto w-[110px] object-contain" />
            </a>
          </div>
          <div className="flex items-center w-[33%] h-[40px]">
            <input
              type="search"
              placeholder="Search product..."
              className="text-md w-[80%] h-full rounded-tl-[4px] rounded-bl-[4px] px-3 text-gray-500"
            />
            <button className="text-white hover:bg-lime-500 w-[60px] h-full flex justify-center items-center rounded-tr-[4px] rounded-br-[4px]">
              <FaSearch size={20} />
            </button>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="bg-white rounded-full text-[#5bbb46] text-[28px] p-1.5 " />
              <div className="text-white">
                <p className="font-medium">Customer support</p>
                <p className="font-bold hover:text-[#5bbb46] ">02873071088</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <IoPersonCircleSharp className="text-white text-[32px]" />
              <div className="text-white">
                <p className="font-medium hover:text-[#5bbb46] cursor-pointer">Account</p>
                <p className="text-sm hover:text-[#5bbb46] cursor-pointer">Login</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="hover:bg-white hover:text-[#5bbb46] text-white flex items-center gap-2 border-2 border-white px-2 py-1.5 rounded-[8px]">
                <FaShoppingBag size={28} className="" />
                <span className="font-medium">Cart</span>
                <span className="font-medium bg-[#5bbb46] text-white px-1.5 rounded-[3px]">0</span>
              </button>
              <div className="flex" onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 60 30"
                  width="40"
                  height="30"
                  role="img"
                  aria-label="Flag of the United Kingdom"
                >
                  <defs>
                    <clipPath id="clip-uk">
                      <path d="M0 0H60V30H0z" />
                    </clipPath>
                  </defs>
                  <g clip-path="url(#clip-uk)">
                    <rect width="60" height="30" fill="#012169" />
                    <path d="M0 0L60 30M60 0L0 30" stroke="#FFFFFF" stroke-width="6" />
                    <path d="M0 0L60 30M60 0L0 30" stroke="#C8102E" stroke-width="4" />
                    <path d="M30 0V30M0 15H60" stroke="#FFFFFF" stroke-width="10" />
                    <path d="M30 0V30M0 15H60" stroke="#C8102E" stroke-width="6" />
                  </g>
                </svg>
                <div className="relative">
                  <button className="rounded-lg bg-[#5bbb46] text-white h-full">
                    <MdKeyboardArrowDown size={20} />
                  </button>
                  {open && (
                    <div className="absolute right-0 w-36 top-7 rounded-xl border bg-white shadow">
                      <button className="w-full px-3 py-2 text-left hover:bg-gray-100 hover:rounded-xl">
                        Tiếng Việt
                      </button>
                      <button className="w-full px-3 py-2 text-left hover:bg-gray-100 hover:rounded-xl">English</button>
                    </div>
                  )}
                </div>
              </div>
              <div className="relative cursor-pointer">
                <IoNotifications className="text-white" size={25} />
                <div className="bg-red-500 rounded-full w-4 h-4 border border-white absolute -top-1 -right-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganicFood;
