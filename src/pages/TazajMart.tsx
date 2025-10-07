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
        <div className="bg-white flex flex-col">
            {/* Top promo bar - full bleed */}
            <div className="w-full bg-green-900 text-white font-medium text-center py-2 px-3">
                Get
                <span className="text-yellow-300"> 30% OFF </span>
                your first order --- Order now and get it delivered within
                <span className="text-yellow-300"> 20 minutes </span>
                across the UAE
            </div>

            {/* Page container - fluid with max width */}
            <div className="w-full max-w-[1200px] lg:max-w-[1400px] mx-auto px-4 sm:px-6">
                {/* Header row */}
                <div className="flex flex-wrap items-center gap-4 md:gap-6 my-5">
                    {/* Logo */}
                    <div className="shrink-0">
                        <img
                            src="tazajmart_logo.png"
                            alt="tazajmart_logo"
                            className="w-[clamp(120px,12vw,220px)] h-auto"
                        />
                    </div>

                    {/* Location (hide on very small screens) */}
                    <div className="hidden sm:flex items-center gap-3 text-green-900">
                        <GrLocation size={28} />
                        <div className="leading-tight">
                            <div className="opacity-80">Delivery to</div>
                            <h1 className="font-bold text-[clamp(16px,2.4vw,20px)]">Abu Dhabi</h1>
                        </div>
                    </div>

                    {/* Search - fluid, grows in the row */}
                    <div className="relative order-3 w-full md:order-none md:flex-1 md:min-w-[360px] md:max-w-[820px]">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="search"
                            placeholder="Search your products, Categories or Brands"
                            className="w-full h-[clamp(42px,5.2vw,50px)] rounded-3xl pl-10 pr-3 bg-gray-100 text-[clamp(14px,1.4vw,16px)]"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 md:gap-4 md:ml-auto">
                        <RiShoppingBasket2Line size={44} className="text-white bg-green-900 rounded-full p-2" />
                        <RxAvatar size={46} className="text-green-900" />
                    </div>
                </div>

                <hr className="border-1 border-gray-300 my-2" />

                {/* Top nav - wraps nicely */}
                <div className="flex flex-col sm:flex-row sm:justify-between gap-3 text-green-900 font-medium text-sm md:text-base">
                    <div className="flex flex-wrap gap-4 md:gap-8">
                        <NavLink to="/">Products</NavLink>
                        <NavLink to="/">Whats new</NavLink>
                        <NavLink to="/">Delivery</NavLink>
                        <NavLink to="/">Deals & Offers</NavLink>
                        <NavLink to="/">Help & Support</NavLink>
                    </div>
                    <div className="flex flex-wrap gap-4 md:gap-8">
                        <NavLink to="/">Returns</NavLink>
                        <NavLink to="/">FAQs</NavLink>
                        <NavLink to="/">Email support</NavLink>
                    </div>
                </div>

                {/* Hero banner */}
                <div className="bg-green-900 text-white my-5 rounded-[12px] px-5 py-8 md:px-10 md:py-12 gap-4 md:gap-6 flex flex-col relative overflow-hidden">
                    <h1 className="font-medium leading-tight md:w-2/3 text-[clamp(28px,5vw,56px)]">
                        Get <span className="text-yellow-300">free delivery</span> on <br /> shopping $200
                    </h1>
                    <p className="opacity-90 text-[clamp(14px,1.8vw,18px)]">
                        Get the freshest groceries delivered right to your home. Save time, skip <br />
                        the lines, and enjoy the convenience of quick, efficient delivery.
                    </p>
                    <button className="self-start bg-yellow-300 text-green-900 font-bold px-6 py-2 rounded-[6px] text-[clamp(14px,1.6vw,18px)]">
                        Learn More
                    </button>
                    <div className="absolute right-4 sm:right-12 bottom-0 sm:bottom-4">
                        <img
                            src={vegetableBasket}
                            alt="vegetable_basket"
                            className="object-contain h-[clamp(160px,28vw,340px)] w-auto"
                        />
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col gap-4 my-7">
                    <h1 className="text-green-900 font-bold text-[clamp(18px,2.2vw,24px)]">All products</h1>
                    <div className="flex flex-col md:flex-row md:justify-between gap-3 text-green-900 font-medium">
                        <div className="flex flex-wrap gap-3 md:gap-5">
                            {[
                                "All Categories",
                                "Price",
                                "Review",
                                "Color",
                                "Offer",
                                "Brands",
                            ].map((label) => (
                                <button
                                    key={label}
                                    className="text-green-900 bg-gray-100 px-4 py-1 rounded-[7px] hover:text-white hover:bg-green-900"
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                        <button className="border-2 border-green-900 px-4 py-1 rounded-[7px] hover:text-white hover:bg-green-900 self-start md:self-auto">
                            Sort by
                        </button>
                    </div>
                </div>

                {/* Product grid - fluid columns */}
                <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 md:gap-8">
                    {/* Card component helper to DRY would be ideal, but inline to keep it simple */}
                    {/* 1 */}
                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8">
                            <div className="font-medium text-white bg-red-900 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">Best Sale</div>
                            <div className="font-medium text-white bg-gradient-to-r from-yellow-300 to-orange-400 rounded-tr-[12px] rounded-bl-[12px] px-3 py-1 flex items-center gap-2">
                                <FaRegSnowflake /> Frozen
                            </div>
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="flex items-center justify-center h-[clamp(180px,28vw,300px)]">
                                <img src={greenPepper} alt="tazajmart_product1" className="object-contain h-full w-auto" />
                            </div>
                            <h1 className="font-bold text-green-900 text-[clamp(16px,2.2vw,20px)]">
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
                                    <h1 className="font-bold text-green-900 text-[clamp(18px,3vw,24px)]">$24.00</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 text-2xl text-white leading-none flex items-center justify-center">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8"></div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="flex items-center justify-center h-[clamp(180px,28vw,300px)]">
                                <img src={instantNoodle} alt="tazajmart_product2" className="object-contain h-full w-auto" />
                            </div>
                            <h1 className="font-bold text-green-900 text-[clamp(16px,2.2vw,20px)]">Seoul Yopokki Spicy 4 flavors of Korean Topokki</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">1pack</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-green-900 text-[clamp(18px,3vw,24px)]">$0.40</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 text-2xl text-white leading-none flex items-center justify-center">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8"></div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="flex items-center justify-center h-[clamp(180px,28vw,300px)]">
                                <img src={banana} alt="tazajmart_product2" className="object-contain h-full w-auto" />
                            </div>
                            <h1 className="font-bold text-green-900 text-[clamp(16px,2.2vw,20px)]">The banana cavendish fruit is very popular in Malaysia</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">4pc</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-green-900 text-[clamp(18px,3vw,24px)]">$0.40</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 text-2xl text-white leading-none flex items-center justify-center">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8">
                            <div className="font-medium text-white bg-orange-500 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">20% OFF</div>
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="flex items-center justify-center h-[clamp(180px,28vw,300px)]">
                                <img src={avocado} alt="tazajmart_product2" className="object-contain h-full w-auto" />
                            </div>
                            <h1 className="font-bold text-green-900 text-[clamp(16px,2.2vw,20px)]">Organic 100% Italian hass 100% natural Avocado</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">1000gm</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-green-900 text-[clamp(18px,3vw,24px)]">$12.35</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 text-2xl text-white leading-none flex items-center justify-center">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5 */}
                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8">
                            <div className="font-medium text-white bg-orange-500 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">15% OFF</div>
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="flex items-center justify-center h-[clamp(180px,28vw,300px)]">
                                <img src={ricePack} alt="tazajmart_product2" className="object-contain h-full w-auto" />
                            </div>
                            <h1 className="font-bold text-green-900 text-[clamp(16px,2.2vw,20px)]">Mahin Brand, Extra Long Grain Basmati Rice</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">4pack</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-green-900 text-[clamp(18px,3vw,24px)]">$13.25</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 text-2xl text-white leading-none flex items-center justify-center">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 6 */}
                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8"></div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="flex items-center justify-center h-[clamp(180px,28vw,300px)]">
                                <img src={lemon} alt="tazajmart_product2" className="object-contain h-full w-auto" />
                            </div>
                            <h1 className="font-bold text-green-900 text-[clamp(16px,2.2vw,20px)]">Lemon Big imported from South Africa</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">4pc</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-green-900 text-[clamp(18px,3vw,24px)]">$4.40</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 text-2xl text-white leading-none flex items-center justify-center">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 7 */}
                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8">
                            <div className="font-medium text-white bg-orange-500 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">20% OFF</div>
                            <div className="font-medium text-white bg-gradient-to-r from-green-500 to-green-300 rounded-tr-[12px] rounded-bl-[12px] px-3 py-1 flex items-center gap-2">
                                <ImLeaf /> ORGANIC
                            </div>
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="flex items-center justify-center h-[clamp(180px,28vw,300px)]">
                                <img src={greenTea} alt="tazajmart_product2" className="object-contain h-full w-auto" />
                            </div>
                            <h1 className="font-bold text-green-900 text-[clamp(16px,2.2vw,20px)]">Lipton Lemon Green Tea Imported From China</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">200gm</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-green-900 text-[clamp(18px,3vw,24px)]">$2.35</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 text-2xl text-white leading-none flex items-center justify-center">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 8 */}
                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8"></div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="flex items-center justify-center h-[clamp(180px,28vw,300px)]">
                                <img src={chips} alt="tazajmart_product2" className="object-contain h-full w-auto" />
                            </div>
                            <h1 className="font-bold text-green-900 text-[clamp(16px,2.2vw,20px)]">Lay's Tomato Ketchup Chips 12 pack Family Size</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">4pc</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-green-900 text-[clamp(18px,3vw,24px)]">$4.40</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 text-2xl text-white leading-none flex items-center justify-center">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 9 */}
                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8">
                            <div className="font-medium text-white bg-red-900 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">Best Sale</div>
                            <div className="font-medium text-white bg-gradient-to-r from-yellow-300 to-orange-400 rounded-tr-[12px] rounded-bl-[12px] px-3 py-1 flex items-center gap-2">
                                <FaRegSnowflake /> Frozen
                            </div>
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="flex items-center justify-center h-[clamp(180px,28vw,300px)]">
                                <img src={beef} alt="tazajmart_product1" className="object-contain h-full w-auto" />
                            </div>
                            <h1 className="font-bold text-green-900 text-[clamp(16px,2.2vw,20px)]">Arabian best Beef Meat Kirkland Signature Roast</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">1.5kg</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-green-900 text-[clamp(18px,3vw,24px)]">$24.00</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 text-2xl text-white leading-none flex items-center justify-center">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 10 */}
                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8"></div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="flex items-center justify-center h-[clamp(180px,28vw,300px)]">
                                <img src={honey} alt="tazajmart_product1" className="object-contain h-full w-auto" />
                            </div>
                            <h1 className="font-bold text-green-900 text-[clamp(16px,2.2vw,20px)]">APILIFE - Flavorful & Nutritious! Black Seed Honey</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">500g</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-green-900 text-[clamp(18px,3vw,24px)]">$30.25</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 text-2xl text-white leading-none flex items-center justify-center">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 11 */}
                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8"></div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="flex items-center justify-center h-[clamp(180px,28vw,300px)]">
                                <img src={instantNoodle} alt="tazajmart_product2" className="object-contain h-full w-auto" />
                            </div>
                            <h1 className="font-bold text-green-900 text-[clamp(16px,2.2vw,20px)]">Seoul Yopokki Spicy 4 flavors of Korean Topokki</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">1pack</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-green-900 text-[clamp(18px,3vw,24px)]">$0.40</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 text-2xl text-white leading-none flex items-center justify-center">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 12 */}
                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8">
                            <div className="font-medium text-white bg-red-900 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">Best Sales</div>
                            <div className="font-medium text-white bg-gradient-to-r from-green-500 to-green-300 rounded-tr-[12px] rounded-bl-[12px] px-3 py-1 flex items-center gap-2">
                                <ImLeaf /> ORGANIC
                            </div>
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="flex items-center justify-center h-[clamp(180px,28vw,300px)]">
                                <img src={lemon} alt="tazajmart_product2" className="object-contain h-full w-auto" />
                            </div>
                            <h1 className="font-bold text-green-900 text-[clamp(16px,2.2vw,20px)]">Lemon Big imported from South Africa</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">4pc</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-green-900 text-[clamp(18px,3vw,24px)]">$4.40</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 text-2xl text-white leading-none flex items-center justify-center">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 13 */}
                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8">
                            <div className="font-medium text-white bg-orange-500 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">15% OFF</div>
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="flex items-center justify-center h-[clamp(180px,28vw,300px)]">
                                <img src={ricePack} alt="tazajmart_product2" className="object-contain h-full w-auto" />
                            </div>
                            <h1 className="font-bold text-green-900 text-[clamp(16px,2.2vw,20px)]">Mahin Brand, Extra Long Grain Basmati Rice</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">4pack</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-green-900 text-[clamp(18px,3vw,24px)]">$13.25</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 text-2xl text-white leading-none flex items-center justify-center">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 14 */}
                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8">
                            <div className="font-medium text-white bg-orange-500 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">20% OFF</div>
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="flex items-center justify-center h-[clamp(180px,28vw,300px)]">
                                <img src={milk} alt="tazajmart_product2" className="object-contain h-full w-auto" />
                            </div>
                            <h1 className="font-bold text-green-900 text-[clamp(16px,2.2vw,20px)]">Tazaj Mart Full Cream Fresh Australian Milk</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">4pc</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-green-900 text-[clamp(18px,3vw,24px)]">$24.00</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 text-2xl text-white leading-none flex items-center justify-center">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 15 */}
                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8"></div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="flex items-center justify-center h-[clamp(180px,28vw,300px)]">
                                <img src={oil} alt="tazajmart_product2" className="object-contain h-full w-auto" />
                            </div>
                            <h1 className="font-bold text-green-900 text-[clamp(16px,2.2vw,20px)]">Noor Sunflower 100% Fresh Oil 1.5 Litres</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">1.5Litr</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-green-900 text-[clamp(18px,3vw,24px)]">$15.25</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 text-2xl text-white leading-none flex items-center justify-center">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 16 */}
                    <div className="rounded-[12px] bg-gray-100 shadow">
                        <div className="flex justify-between h-8">
                            <div className="font-medium text-white bg-orange-500 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">20% OFF</div>
                            <div className="font-medium text-white bg-gradient-to-r from-yellow-300 to-orange-400 rounded-tr-[12px] rounded-bl-[12px] px-3 py-1 flex items-center gap-2">
                                <FaRegSnowflake /> Frozen
                            </div>
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                            <div className="flex items-center justify-center h-[clamp(180px,28vw,300px)]">
                                <img src={chicken} alt="tazajmart_product1" className="object-contain h-full w-auto" />
                            </div>
                            <h1 className="font-bold text-green-900 text-[clamp(16px,2.2vw,20px)]">Garden Frozen Chicken Leg Cuts Skinless</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-gray-400 font-medium">4pc</p>
                                    <p className="text-green-900 font-medium flex items-center gap-2">
                                        <FaStar size={16} className="text-orange-500" /> (4.8/5)
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-green-900 text-[clamp(18px,3vw,24px)]">$12.35</h1>
                                    <button className="bg-green-900 font-medium rounded-full w-10 h-10 text-2xl text-white leading-none flex items-center justify-center">+</button>
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
