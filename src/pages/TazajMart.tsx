import { NavLink } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import greenPepper from "../images/green_pepper.png";
import instantNoodle from "../images/instant_noodle.png";
import banana from "../images/banana.png";
import avocado from "../images/avocado.png";
import ricePack from "../images/rice_pack.png";
import lemon from "../images/lemon.png";
import greenTea from "../images/green_tea.png";
import chips from "../images/chips.png";
import beef from "../images/beef.png";
import honey from "../images/honey.png";
import milk from "../images/milk.png";
import oil from "../images/oil.png";
import chicken from "../images/chicken.png";
import vegetableBasket from "../images/vegetable_basket.png";
import { ImLeaf } from "react-icons/im";
import { FaStar } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";

function TazajMart() {
    return (
        <div className="bg-white items-center flex flex-col">
            <div className="w-full bg-green-900 text-white font-medium text-center p-2">
                Get
                <span className="text-yellow-300"> 30% OFF </span>
                your first order --- Order now and get it delivered within
                <span className="text-yellow-300"> 20 minutes </span>
                across the UAE
            </div>

            <div className="flex flex-col w-[1600px] gap-2">
                <div className="flex gap-10 justify-between items-center h-14 my-5">
                    <div className="w-[220px]">
                        <img src="tazajmart_logo.png" alt="tazajmart_logo" />
                    </div>

                    <div className="flex items-center gap-5 text-green-900">
                        <GrLocation size={30} />
                        <div>
                            Delivery to
                            <h1 className="font-bold text-2xl">Abu Dhabi</h1>
                        </div>
                    </div>

                    <div className="relative">
                        <FiSearch
                            className="absolute top-[13px] left-[13px] text-gray-400 "
                            size={22}
                        />
                        <input
                            type="search"
                            placeholder="Search your products, Categories or Brands"
                            className="w-[900px] h-[50px] rounded-3xl pl-12 bg-gray-100"
                        />
                    </div>

                    <div className="flex gap-4 items-center">
                        <RiShoppingBasket2Line
                            size={50}
                            className="text-white bg-green-900 rounded-full p-2"
                        />
                        <RxAvatar size={52} className="text-green-900" />
                    </div>
                </div>

                <hr className="border-1 border-gray-300 my-2" />

                <div className="flex justify-between text-green-900 font-medium">
                    <div className="flex gap-8">
                        <NavLink to={"/"}>Products</NavLink>
                        <NavLink to={"/"}>Whats new</NavLink>
                        <NavLink to={"/"}>Delivery</NavLink>
                        <NavLink to={"/"}>Deals & Offers</NavLink>
                        <NavLink to={"/"}>Help & Support</NavLink>
                    </div>
                    <div className="flex gap-8">
                        <NavLink to="/">Returns</NavLink>
                        <NavLink to="/">FAQs</NavLink>
                        <NavLink to="/">Email support</NavLink>
                    </div>
                </div>

                <div className="bg-green-900 text-white p-2 my-5 rounded-[12px] px-10 py-12 gap-6 flex flex-col relative">
                    <h1 className="text-7xl w-2/3 font-medium">
                        Get <span className="text-yellow-300">free delivery</span> on <br />
                        shopping $200
                    </h1>
                    <p className="text-xl">
                        Get the freshest groceries delivered right to your home. Save time,
                        skip <br />
                        the lines, and enjoy the convenience of quick, efficient delivery.
                    </p>
                    <button className="self-start bg-yellow-300 text-green-900 font-bold px-6 py-2 rounded-[6px] text-xl">
                        Learn More
                    </button>
                    <div className="absolute right-24 bottom-4">
                        <img
                            src={vegetableBasket}
                            alt="vegetable_basket"
                            className="object-contain h-[340px] w-auto"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-5 my-7">
                    <h1 className="text-green-900 font-bold text-2xl">All products</h1>
                    <div className="flex justify-between text-green-900 font-medium">
                        <div className="flex gap-5">
                            <button className="text-green-900 bg-gray-100 px-4 py-1 rounded-[7px] hover:text-white hover:bg-green-900">
                                All Categories
                            </button>
                            <button className="text-green-900 bg-gray-100 px-4 py-1 rounded-[7px] hover:text-white hover:bg-green-900">
                                Price
                            </button>
                            <button className="text-green-900 bg-gray-100 px-4 py-1 rounded-[7px] hover:text-white hover:bg-green-900">
                                Review
                            </button>
                            <button className="text-green-900 bg-gray-100 px-4 py-1 rounded-[7px] hover:text-white hover:bg-green-900">
                                Color
                            </button>
                            <button className="text-green-900 bg-gray-100 px-4 py-1 rounded-[7px] hover:text-white hover:bg-green-900">
                                Offer
                            </button>
                            <button className="text-green-900 bg-gray-100 px-4 py-1 rounded-[7px] hover:text-white hover:bg-green-900">
                                Brands
                            </button>
                        </div>
                        <button className="border-2 border-green-900 px-4 py-1 rounded-[7px] hover:text-white hover:bg-green-900">
                            Sort by
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-8">
                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8">
                            <div className="font-medium text-white bg-red-900 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">
                                Best Sale
                            </div>
                            <div className="font-medium text-white bg-gradient-to-r from-yellow-300 to-orange-400 rounded-tr-[12px] rounded-bl-[12px] px-3 py-1 flex items-center gap-2">
                                <FaRegSnowflake /> Frozen
                            </div>
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="h-[300px] flex items-center justify-center">
                                <img
                                    src={greenPepper}
                                    alt="tazajmart_product1"
                                    className="object-contain h-[300px] w-auto"
                                />
                            </div>
                            <h1 className="font-bold text-green-900 text-xl">
                                Organic Green Big Sweet Pepper Seeds - Capsicum
                            </h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">1000gm</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-3xl text-green-900">$24.00</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 pb-2 text-3xl text-white">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8"></div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="h-[300px] flex items-center justify-center">
                                <img
                                    src={instantNoodle}
                                    alt="tazajmart_product2"
                                    className="object-contain h-[300px] w-auto"
                                />
                            </div>
                            <h1 className="font-bold text-green-900 text-xl">
                                Seoul Yopokki Spicy 4 flavors of Korean Topokki
                            </h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">1pack</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-3xl text-green-900">$0.40</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 pb-2 text-3xl text-white">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8"></div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="h-[300px] flex items-center justify-center">
                                <img
                                    src={banana}
                                    alt="tazajmart_product2"
                                    className="object-contain h-[300px] w-auto"
                                />
                            </div>
                            <h1 className="font-bold text-green-900 text-xl">
                                The banana cavendish fruit is very popular in Malaysia
                            </h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">4pc</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-3xl text-green-900">$0.40</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 pb-2 text-3xl text-white">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8">
                            <div className="font-medium text-white bg-orange-500 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">
                                20% OFF
                            </div>
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="h-[300px] flex items-center justify-center">
                                <img
                                    src={avocado}
                                    alt="tazajmart_product2"
                                    className="object-contain h-[300px] w-auto"
                                />
                            </div>
                            <h1 className="font-bold text-green-900 text-xl">
                                Organic 100% Italian hass 100% natural Avocado
                            </h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">1000gm</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-3xl text-green-900">$12.35</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 pb-2 text-3xl text-white">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8">
                            <div className="font-medium text-white bg-orange-500 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">
                                15% OFF
                            </div>
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="h-[300px] flex items-center justify-center">
                                <img
                                    src={ricePack}
                                    alt="tazajmart_product2"
                                    className="object-contain h-[300px] w-auto"
                                />
                            </div>
                            <h1 className="font-bold text-green-900 text-xl">
                                Mahin Brand, Extra Long Grain Basmati Rice
                            </h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">4pack</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-3xl text-green-900">$13.25</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 pb-2 text-3xl text-white">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8"></div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="h-[300px] flex items-center justify-center">
                                <img
                                    src={lemon}
                                    alt="tazajmart_product2"
                                    className="object-contain h-[300px] w-auto"
                                />
                            </div>
                            <h1 className="font-bold text-green-900 text-xl">
                                Lemon Big imported from South Africa
                            </h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">4pc</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-3xl text-green-900">$4.40</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 pb-2 text-3xl text-white">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8">
                            <div className="font-medium text-white bg-orange-500 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">
                                20% OFF
                            </div>
                            <div className="font-medium text-white bg-gradient-to-r from-green-500 to-green-300 rounded-tr-[12px] rounded-bl-[12px] px-3 py-1 flex items-center gap-2">
                                <ImLeaf /> ORGANIC
                            </div>
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="h-[300px] flex items-center justify-center">
                                <img
                                    src={greenTea}
                                    alt="tazajmart_product2"
                                    className="object-contain h-[300px] w-auto"
                                />
                            </div>
                            <h1 className="font-bold text-green-900 text-xl">
                                Lipton Lemon Green Tea Imported From China
                            </h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">200gm</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-3xl text-green-900">$2.35</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 pb-2 text-3xl text-white">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8"></div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="h-[300px] flex items-center justify-center">
                                <img
                                    src={chips}
                                    alt="tazajmart_product2"
                                    className="object-contain h-[300px] w-auto"
                                />
                            </div>
                            <h1 className="font-bold text-green-900 text-xl">
                                Lay's Tomato Ketchup Chips 12 pack Family Size
                            </h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">4pc</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-3xl text-green-900">$4.40</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 pb-2 text-3xl text-white">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8">
                            <div className="font-medium text-white bg-red-900 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">
                                Best Sale
                            </div>
                            <div className="font-medium text-white bg-gradient-to-r from-yellow-300 to-orange-400 rounded-tr-[12px] rounded-bl-[12px] px-3 py-1 flex items-center gap-2">
                                <FaRegSnowflake /> Frozen
                            </div>
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="h-[300px] flex items-center justify-center">
                                <img
                                    src={beef}
                                    alt="tazajmart_product1"
                                    className="object-contain h-[300px] w-auto"
                                />
                            </div>
                            <h1 className="font-bold text-green-900 text-xl">
                                Arabian best Beef Meat Kirkland Signature Roast
                            </h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">1.5kg</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-3xl text-green-900">$24.00</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 pb-2 text-3xl text-white">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8"></div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="h-[300px] flex items-center justify-center">
                                <img
                                    src={honey}
                                    alt="tazajmart_product1"
                                    className="object-contain h-[300px] w-auto"
                                />
                            </div>
                            <h1 className="font-bold text-green-900 text-xl">
                                APILIFE - Flavorful & Nutritious! Black Seed Honey
                            </h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">500g</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-3xl text-green-900">$30.25</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 pb-2 text-3xl text-white">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8"></div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="h-[300px] flex items-center justify-center">
                                <img
                                    src={instantNoodle}
                                    alt="tazajmart_product2"
                                    className="object-contain h-[300px] w-auto"
                                />
                            </div>
                            <h1 className="font-bold text-green-900 text-xl">
                                Seoul Yopokki Spicy 4 flavors of Korean Topokki
                            </h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">1pack</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-3xl text-green-900">$0.40</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 pb-2 text-3xl text-white">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8">
                            <div className="font-medium text-white bg-red-900 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">
                                Best Sales
                            </div>
                            <div className="font-medium text-white bg-gradient-to-r from-green-500 to-green-300 rounded-tr-[12px] rounded-bl-[12px] px-3 py-1 flex items-center gap-2">
                                <ImLeaf /> ORGANIC
                            </div>
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="h-[300px] flex items-center justify-center">
                                <img
                                    src={lemon}
                                    alt="tazajmart_product2"
                                    className="object-contain h-[300px] w-auto"
                                />
                            </div>
                            <h1 className="font-bold text-green-900 text-xl">
                                Lemon Big imported from South Africa
                            </h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">4pc</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-3xl text-green-900">$4.40</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 pb-2 text-3xl text-white">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8">
                            <div className="font-medium text-white bg-orange-500 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">
                                15% OFF
                            </div>
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="h-[300px] flex items-center justify-center">
                                <img
                                    src={ricePack}
                                    alt="tazajmart_product2"
                                    className="object-contain h-[300px] w-auto"
                                />
                            </div>
                            <h1 className="font-bold text-green-900 text-xl">
                                Mahin Brand, Extra Long Grain Basmati Rice
                            </h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">4pack</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-3xl text-green-900">$13.25</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 pb-2 text-3xl text-white">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8">
                            <div className="font-medium text-white bg-orange-500 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">
                                20% OFF
                            </div>
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="h-[300px] flex items-center justify-center">
                                <img
                                    src={milk}
                                    alt="tazajmart_product2"
                                    className="object-contain h-[300px] w-auto"
                                />
                            </div>
                            <h1 className="font-bold text-green-900 text-xl">
                                Tazaj Mart Full Cream Fresh Australian Milk
                            </h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">4pc</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-3xl text-green-900">$24.00</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 pb-2 text-3xl text-white">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8"></div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="h-[300px] flex items-center justify-center">
                                <img
                                    src={oil}
                                    alt="tazajmart_product2"
                                    className="object-contain h-[300px] w-auto"
                                />
                            </div>
                            <h1 className="font-bold text-green-900 text-xl">
                                Noor Sunflower 100% Fresh Oil 1.5 Litres
                            </h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">1.5Litr</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-3xl text-green-900">$15.25</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 pb-2 text-3xl text-white">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8">
                            <div className="font-medium text-white bg-orange-500 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">
                                20% OFF
                            </div>
                            <div className="font-medium text-white bg-gradient-to-r from-yellow-300 to-orange-400 rounded-tr-[12px] rounded-bl-[12px] px-3 py-1 flex items-center gap-2">
                                <FaRegSnowflake /> Frozen
                            </div>
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="h-[300px] flex items-center justify-center">
                                <img
                                    src={chicken}
                                    alt="tazajmart_product1"
                                    className="object-contain h-[300px] w-auto"
                                />
                            </div>
                            <h1 className="font-bold text-green-900 text-xl">
                                Garden Frozen Chicken Leg Cuts Skinless
                            </h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">4pc</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-3xl text-green-900">$12.35</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 pb-2 text-3xl text-white">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TazajMart;
