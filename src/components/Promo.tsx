import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Abstract spiral circles"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest">
        Интересные факты
      </h3>

      <div className="absolute bottom-12 left-6 right-6 z-10 flex flex-col gap-4 sm:gap-6 max-w-2xl">
        <p className="text-white text-lg sm:text-xl md:text-2xl leading-snug">
          Казанский Кремль — единственное место в мире, где рядом стоят мечеть и православный собор.
        </p>
        <p className="text-white/75 text-base sm:text-lg md:text-xl leading-snug">
          Мечеть Марджани не закрывалась даже в советское время. Старо-Татарская слобода сохранила традиционные татарские дома.
        </p>
        <p className="text-white/60 text-sm sm:text-base leading-snug">
          Казань — город, где Восток и Запад не просто соседствуют, а создают уникальный архитектурный диалог.
        </p>
      </div>
    </div>
  );
}