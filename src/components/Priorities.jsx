import React from "react";
import { TrendingUp } from "lucide-react";
import Details from "../components/config/details.json";
import {FaMoneyBillWave} from "react-icons/fa"
export default function Priorities() {
  return (
    // main component
    <div className="flex flex-col overflow-hidden w-full items-center justify-center pt-3 my-3 border bg-white/50 backdrop-blur-md shadow-md p-4 py-5 rounded-2xl">
      <h3 className="text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2 mt-2 font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug ">
        اولویت های سرمایه گذاری محله {Details.alley.name}
        <TrendingUp size={28} />
      </h3>
      {/* itmes container */}
      <div className="w-full   flex flex-col lg:flex-row gap-[10px] justify-evenly xl:justify-center items-center">
        {/* Box 1 */}
        <div className="rounded-xl shadow p-4 flex flex-col items-center justify-between w-full max-w-xs md:h-[200px] h-[190px]   bg-gradient-to-t  from-purple-100  to-purple-200 ">
          <h2 className="text-lg   font-bold mb-2 text-gray-800">
         	مشارکت در ساخت:
          </h2>
         
          <p className="text-gray-600 text-center md:mt-5  text-base">
          وسعت بالای بافت فرسوده، بستر مناسبی برای <strong className="text-blue-800">نوسازی و مشارکت با مالکین محلی</strong> فراهم کرده است.
          </p>
        </div>
        {/* Box 2 */}
        <div  className="rounded-xl shadow p-4 flex flex-col   items-center justify-between w-full max-w-xs md:h-[200px] h-[190px]    bg-gradient-to-t from-purple-900 via-purple-800 to-purple-700">
          <h2 className="text-lg  font-bold mb-2 text-white">
            {" "}
           	خرید زمین خام:
          </h2>
          <p className="text-white text-center md:mt-5  text-base">
          زمین‌ های بایر محله فرصتی سریع و مناسب برای <strong className="text-green-300">شروع ساخت ‌و ساز جدید</strong> ارائه می‌دهند.
          </p>
        </div>
        
     
      </div>
        <div className=" bg-white/40 mt-2 w-full flex border-r-4 border-green-800 shadow-md mb-1 pt-1 p-2 ">
      
         <p >



          <strong className="text-green-900 w-full flex gap-2">
            <span className="flex gap-2">

          <FaMoneyBillWave size={20} />
             ریسک سرمایه‌گذاری :
            </span>
             </strong>
             به‌دلیل فرسودگی بافت، سطح<strong className="text-red-800"> ریسک نسبتاً بالا</strong> ارزیابی می‌شود.

  
         </p>
      
      </div>
    </div>
  );
}
