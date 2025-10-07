import {FaRegSnowflake, FaStar} from "react-icons/fa";
import capsicum from "../images/capsicum.png";

function ProductCell() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <div className="rounded-[12px] bg-gray-100 shadow relative">
                <div className="absolute font-medium text-xs sm:text-sm md:text-base text-white bg-red-900 rounded-tl-[12px] rounded-br-[12px] px-3 py-1">
                    Best Sale
                </div>
                <div className="absolute top-0 right-0 font-medium text-xs sm:text-sm md:text-base  text-white bg-gradient-to-r from-yellow-300 to-orange-400 rounded-tr-[12px] rounded-bl-[12px] px-3 py-1 flex items-center gap-2">
                    <FaRegSnowflake /> Frozen
                </div>
                <div className="p-3 sm:p-4 flex flex-col gap-3">
                    <div className="h-[250px] sm:h-[300px]  flex items-center justify-center">
                        <img src={capsicum}  alt="tazajmart_product1" className="object-contain h-[300px] w-auto"/>
                    </div>
                    <h1 className="font-bold text-green-900 text-lg sm:text-xl">Organic Green Big Sweet Pepper Seeds - Capsicum</h1>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between text-sm sm:text-base">
                            <p className="text-gray-400 font-medium">1000gm</p>
                            <p className="text-green-900 font-medium flex items-center gap-2">
                                <FaStar size={16} className="text-orange-500"/> (4.8/5)
                            </p>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold text-2xl sm:text-3xl text-green-900">$24.00</h1>
                            <button className="bg-green-900 font-medium rounded-full w-8 sm:w-10 h-8 sm:h-10 pb-2 text-2xl sm:text-3xl text-white">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCell;