import FunctionalPieChart from "./charts/FunctionalPieChart";
import MapFunctionalAnalysis from "./MapFunctionalAnalysis";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { ShieldQuestion } from "lucide-react";

export default function FunctionalAnalysis() {
  return (
    <motion.div
      className="grid w-full lg:grid-cols-5 mt-3  lg:mb-5 gap-3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* ستون 1: متن و نمودار */}
      <div className="lg:col-span-3 col-span-3  text-justify border bg-white/40 backdrop-blur-md  rounded-2xl shadow-sm p-5   text-xl w-full">
        <h3 className="text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug ">
          ویژگی ها عملکردی
          <span>
            <Layers size={28} />
          </span>
        </h3>
        <p className="md:leading-loose  whitespace-pre-line lg:leading-loose font-modam  text-justify text-base  ">
          بررسی ویژگی های عملکردی محله چمران نشان می دهد که، محله چمران با بافتی
          عمدتاً مسکونی در بخش مرکزی شکل گرفته، در حالی که اطراف آن با کاربری
          ‌های تجاری و مختلط پر شده است. این کاربری ها بیشتر در راستای خیابان
          امام خمینی و چمران حضور دارند. این محله از نظر پراکندگی عملکرد های
          شهری در وضعیت متوسطی قرار دارد.
        </p>
        <div className="bg-white/40 border-r-4 border-[var(--sidebar)] shadow-md mb-2 mt-2 p-2">
          <p className="font-modam text-base md:leading-loose lg:leading-loose text-gray-800   ">
            <span className="font-bold flex gap-1 text-base text-[var(--sidebar)]">
              <ShieldQuestion size={22} className="text-[var(--sidebar)]" />

              <strong>چالش های عملکردی محله چمران</strong>
            </span>{" "}
            <strong className="text-green-800">
              {" "}
              نکته قابل تامل نبود فضای سبز
            </strong>{" "}
            در کل محله است. این محله از داشتن پارک یا فضای باز عمومی بی ‌بهره
            است؛ مسئله ‌ای که بر کیفیت زندگی تاثیر منفی می‌گذارد. همچنین، کاربری
            ‌های خاص از جمله
            <strong className="text-purple-800"> فرهنگی یا درمانی</strong> در
            این محله دیده نمی‌شود؛ این موضوع باعث شده است، عملکرد محله، بیشتر در{" "}
            <strong className="text-red-800"> سطح محلی </strong>باقی بماند و{" "}
            <strong className="text-orange-800"> پتانسیل فرا‌ محلی</strong>{" "}
            نداشته باشد.
          </p>
        </div>
      </div>
      <div className="col-span-3 lg:col-span-2 border bg-white/40 backdrop-blur-md  rounded-2xl shadow-sm pl-5 pr-5 pt-5   text-xl w-full">
        <FunctionalPieChart />
      </div>

      {/* ستون 2 و 3: نقشه */}
      <motion.div
        className="col-span-5 shadow-md rounded-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <MapFunctionalAnalysis />
      </motion.div>
    </motion.div>
  );
}
