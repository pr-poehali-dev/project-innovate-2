export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Западная</h3>
                <a href="https://ru.wikipedia.org/wiki/%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B2%D0%B5%D1%89%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_(%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C)" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Благовещенский собор</a>
                <a href="https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%B3%D0%BE%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_(%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C)" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Богоявленский собор</a>
                <a href="https://ru.wikipedia.org/wiki/%D0%94%D0%BE%D0%BC_%D0%A3%D1%88%D0%BA%D0%BE%D0%B2%D0%BE%D0%B9" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Дом Ушковой</a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Восточная</h3>
                <a href="https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D0%BB-%D0%A8%D0%B0%D1%80%D0%B8%D1%84_(%D0%BC%D0%B5%D1%87%D0%B5%D1%82%D1%8C)" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Мечеть Кул-Шариф</a>
                <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%87%D0%B5%D1%82%D1%8C_%D0%9C%D0%B0%D1%80%D0%B4%D0%B6%D0%B0%D0%BD%D0%B8" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Мечеть Марджани</a>
                <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D1%80%D0%B5%D0%BC%D0%BB%D1%8C" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base">Казанский Кремль</a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                КАЗАНЬ
              </h1>
              <p className="text-white text-sm sm:text-base">{new Date().getFullYear()} · Город двух культур</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}