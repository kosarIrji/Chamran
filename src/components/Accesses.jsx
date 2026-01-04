/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import AccsessesArzeMabar from "../components/charts/AccessesArzeMabar";
import AccsessesKyfiatMabar from "../components/charts/AccsessesKyfiatMabar";
import MapStreet from "./MapStreet";
import { Map ,Route} from "lucide-react";
import { Button } from "../components/ui/Button";
import Details from "../components/config/details.json";
import { useState } from "react";


export default function Accesses() {
  const [selectedComponent, setSelectedComponent] = useState("key");

  return (
    <section className="w-full mt-3">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-3">
        {/* باکس توضیحات */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className=" rounded-2xl shadow-sm p-5 border lg:col-span-3 bg-white/50 backdrop-blur-md "
        >
          <h3 className="text-2xl    w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug">
            تحلیل کیفیت معابر و دسترسی در محله چمران
            <span>
              <Map size={28} />
            </span>
          </h3>
          <p className="md:leading-loose lg:leading-loose font-modam  text-justify text-base  ">
            محله چمران{" "}
            <strong className="text-orange-800">بافتی قدیمی و ارگانیک</strong>{" "}
            دارد که در شبکه معابر آن به‌ وضوح نمایان است؛ کوچه ‌های باریک و بن
            ‌بست ‌های متعدد با عرض ۶ تا ۱۰ متر بخش عمده ‌ای از ساختار عبوری محله
            را تشکیل می‌دهند.{" "}
            <strong className="text-green-800">کیفیت معابر</strong> با امتیازی
            بین ۳۰ تا ۴۰ از ۵۰، <strong className="text-blue-800"></strong>{" "}
            ارزیابی می‌شود.
          </p>
          <div className="bg-white/40 border-r-4 border-[var(--sidebar)] shadow-md mb-2 mt-2 p-2">
          <p className="font-modam text-base md:leading-loose lg:leading-loose text-gray-800   ">
            <span className="font-bold flex gap-1 text-base text-[var(--sidebar)]">
              <Route size={22} className="text-[var(--sidebar)] " />
              <strong>
              نقش خیابان های پیرامونی در تردد شهری 

              </strong>
            </span>{" "}
        
            هرچند که در داخل محله بیشتر رفت و آمد ها، محلی هستند، ولی وجود خیابان جمهوری باعث ایجاد تردد و گره های ترافیکی در این محله است. در اطراف محله به خصوص در اطراف چهار راه قیام و میدان کارگر ترافیک شهری در ساعات اوج، بالا و قابل توجه است.
          </p>
        </div>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" rounded-2xl shadow-sm p-5 border lg:col-span-3 lg:leading-loose bg-white/50 backdrop-blur-md "
        >
          <div className="flex flex-wrap justify-center gap-3 mb-2">
            {[
              { label: "عرض معبر", value: "arze" },
              { label: "کیفیت معبر", value: "key" },
            ].map((btn) => (
              <Button
                key={btn.value}
                onClick={() => setSelectedComponent(btn.value)}
                variant={
                  selectedComponent === btn.value ? "default" : "outline"
                }
                className="w-28 text-sm"
              >
                {btn.label}
              </Button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {selectedComponent === "arze" && (
              <motion.div
                key="arze"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AccsessesArzeMabar />
              </motion.div>
            )}

            {selectedComponent === "key" && (
              <motion.div
                key="key"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AccsessesKyfiatMabar />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* نقشه - کل عرض پایین */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 rounded-xl shadow-sm min-h-[600px] lg:h-full"
        >
          <MapStreet />
        </motion.div>
      </div>
    </section>
  );
}
