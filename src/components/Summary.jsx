import SummaryChart from "./charts/SummryChart";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ClipboardCheck } from "lucide-react";
import Details from "../components/config/details.json";
export default function Summary() {
  return (
    <section className="relative my-3 border pt-5 h-full bg-white/50 backdrop-blur-sm  rounded-2xl shadow-lg   sm:p-2 ">
      <div>
        <h3 className="text-2xl p-5  w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)]  leading-snug ">
          جمع‌بندی
          <ClipboardCheck size={28} />
        </h3>
        <p className="lg:leading-loose  font-modam px-5  text-justify text-base mb-6  ">
          این محله از نظر کالبدی، بافتی قدیمی، ارگانیک و کم تراکم دارد. دسترسی
          مناسب به معابر اصلی خصوصا در راستای خیابان قیام و وجود فعالیت های
          تجاری در اطراف محله، فرصت های مناسبی برای توسعه و سرمایه گذاری ایجاد
          کرده است. این محله با وجود چالش های کالبدی و عملکردی، دارای پتانسیل
          قابل توجهی برای نوسازی است. برنامه ریزی مناسب و توسعه فضا های عمومی،
          فضای سبز و پارک و بازآفرینی بافت فرسوده از جمله اقدامات مثبت در این
          محله است.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="col-span-2 md:col-span-1"
      >
        <SummaryChart />
      </motion.div>
    </section>
  );
}
