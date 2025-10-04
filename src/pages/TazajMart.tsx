import {NavLink} from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";

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
            <div className="flex flex-col w-[1800px] gap-2">
                <div className="flex gap-10 justify-between items-center h-14 my-5">
                    <div className="w-[220px]">
                        <img src="tazajmart_logo.png" alt="tazajmart_logo" />
                    </div>
                    <div className="flex items-center gap-5 text-green-900">
                        <GrLocation size={30}/>
                        <div>
                            Delivery to
                            <h1 className="font-bold text-2xl">Abu Dhabi</h1>
                        </div>
                    </div>
                    <div className="relative">
                        <FiSearch className="absolute top-[13px] left-[13px] text-gray-400 " size={22}/>
                        <input type="search" placeholder="Search your products, Categories or Brands" className="w-[1150px] h-[50px] rounded-3xl pl-12 bg-gray-100"/>
                    </div>
                    <div className="flex gap-4 items-center">
                        <RiShoppingBasket2Line size={50} className="text-white bg-green-900 rounded-full p-2"/>
                        <RxAvatar size={52} className="text-green-900"/>
                    </div>
                </div>
                <hr className="border-1 border-gray-300 my-2"/>
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
                <div className="bg-green-900 text-white p-2 my-5 rounded-[12px] px-10 py-12 gap-6 flex flex-col">
                    <h1 className="text-5xl w-1/3 font-medium">Get <span className="text-yellow-300">free delivery</span> on <br/> shopping $200</h1>
                    <p>Get the freshest groceries delivered right to your home. Save time, skip <br/>
                        the lines, and enjoy the convenience of quick, efficient delivery.</p>
                    <button className="self-start bg-yellow-300 text-green-900 font-bold px-6 py-2 rounded-[6px]">Learn More</button>
                </div>
                <div className="flex flex-col gap-5 my-7">
                    <h1 className="text-green-900 font-bold text-2xl">All products</h1>
                    <div className="flex justify-between text-green-900 font-medium">
                        <div className="flex gap-8">
                            <button className="text-green-900 bg-gray-100 px-4 py-1 rounded-[7px]">All Categories</button>
                            <button className="text-green-900 bg-gray-100 px-4 py-1 rounded-[7px]">Price</button>
                            <button className="text-green-900 bg-gray-100 px-4 py-1 rounded-[7px]">Review</button>
                            <button className="text-green-900 bg-gray-100 px-4 py-1 rounded-[7px]">Color</button>
                            <button className="text-green-900 bg-gray-100 px-4 py-1 rounded-[7px]">Offer</button>
                            <button className="text-green-900 bg-gray-100 px-4 py-1 rounded-[7px]">Brands</button>
                        </div>
                        <button className="border-2 border-green-900 px-4 py-1 rounded-[7px]">Sort by</button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-7">
                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between">
                            <div className="font-medium text-white bg-red-900 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">Best Sale</div>
                            <div className="font-medium text-white bg-gradient-to-r from-yellow-300 to-orange-400 rounded-tr-[12px] rounded-bl-[12px] px-3 py-1">* Frozen</div>
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                            <div>
                                <img src="tazajmart_logo.png" alt="tazajmart_product1" />
                            </div>
                            <h1 className="font-bold text-green-900">Organic Green Big Sweet Pepper Seeds - Capsicum</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-500 font-medium">1000gm</p>
                                    <p className="text-green-900 font-medium">(4.8/5)</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-3xl text-green-900">$24.00</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 pb-2 text-3xl text-white">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between">
                            <div className="font-medium text-white bg-red-900 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">Best Sale</div>
                            <div className="font-medium text-white bg-gradient-to-r from-yellow-300 to-orange-400 rounded-tr-[12px] rounded-bl-[12px] px-3 py-1">* Frozen</div>
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                            <div>
                                <img src="tazajmart_logo.png" alt="tazajmart_product1" />
                            </div>
                            <h1 className="font-bold text-green-900">Organic Green Big Sweet Pepper Seeds - Capsicum</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-500 font-medium">1000gm</p>
                                    <p className="text-green-900 font-medium">(4.8/5)</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-3xl text-green-900">$24.00</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 pb-2 text-3xl text-white">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between">
                            <div className="font-medium text-white bg-red-900 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">Best Sale</div>
                            <div className="font-medium text-white bg-gradient-to-r from-yellow-300 to-orange-400 rounded-tr-[12px] rounded-bl-[12px] px-3 py-1">* Frozen</div>
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                            <div>
                                <img src="tazajmart_logo.png" alt="tazajmart_product1" />
                            </div>
                            <h1 className="font-bold text-green-900">Organic Green Big Sweet Pepper Seeds - Capsicum</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-500 font-medium">1000gm</p>
                                    <p className="text-green-900 font-medium">(4.8/5)</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-3xl text-green-900">$24.00</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 pb-2 text-3xl text-white">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between">
                            <div className="font-medium text-white bg-red-900 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">Best Sale</div>
                            <div className="font-medium text-white bg-gradient-to-r from-yellow-300 to-orange-400 rounded-tr-[12px] rounded-bl-[12px] px-3 py-1">* Frozen</div>
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                            <div>
                                <img src="tazajmart_logo.png" alt="tazajmart_product1" />
                            </div>
                            <h1 className="font-bold text-green-900">Organic Green Big Sweet Pepper Seeds - Capsicum</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-500 font-medium">1000gm</p>
                                    <p className="text-green-900 font-medium">(4.8/5)</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-3xl text-green-900">$24.00</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 pb-2 text-3xl text-white">+</button>
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