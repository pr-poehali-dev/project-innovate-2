export default function Featured() {
  const westFeatures = [
    { label: "Симметрия и строгость форм" },
    { label: "Колонны и купола" },
    { label: "Европейская и христианская традиция" },
  ];

  const eastFeatures = [
    { label: "Минареты и арочные своды" },
    { label: "Орнаменты и узоры" },
    { label: "Яркая декоративность" },
  ];

  const westBuildings = [
    { name: "Благовещенский собор", url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B2%D0%B5%D1%89%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_(%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C)" },
    { name: "Богоявленский собор", url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%B3%D0%BE%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_(%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C)" },
    { name: "Дом Ушковой", url: "https://ru.wikipedia.org/wiki/%D0%94%D0%BE%D0%BC_%D0%A3%D1%88%D0%BA%D0%BE%D0%B2%D0%BE%D0%B9" },
    { name: "Дом печати", url: "https://ru.wikipedia.org/wiki/%D0%94%D0%BE%D0%BC_%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D0%B8_(%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C)" },
    { name: "Гостиный двор", url: "https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D1%8B%D0%B9_%D0%B4%D0%B2%D0%BE%D1%80_(%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C)" },
  ];

  const eastBuildings = [
    { name: "Мечеть Кул-Шариф", url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D0%BB-%D0%A8%D0%B0%D1%80%D0%B8%D1%84_(%D0%BC%D0%B5%D1%87%D0%B5%D1%82%D1%8C)" },
    { name: "Мечеть Марджани", url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%87%D0%B5%D1%82%D1%8C_%D0%9C%D0%B0%D1%80%D0%B4%D0%B6%D0%B0%D0%BD%D0%B8" },
    { name: "Апанаевская мечеть", url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BF%D0%B0%D0%BD%D0%B0%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BC%D0%B5%D1%87%D0%B5%D1%82%D1%8C" },
    { name: "Бурнаевская мечеть", url: "https://ru.wikipedia.org/wiki/%D0%91%D1%83%D1%80%D0%BD%D0%B0%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BC%D0%B5%D1%87%D0%B5%D1%82%D1%8C" },
    { name: "Нурулла-мечеть", url: "https://ru.wikipedia.org/wiki/%D0%9D%D1%83%D1%80%D1%83%D0%BB%D0%BB%D0%B0-%D0%BC%D0%B5%D1%87%D0%B5%D1%82%D1%8C" },
  ];

  return (
    <div id="west" className="min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-stretch">
        <div className="flex-1 px-6 py-16 lg:py-24 lg:px-12 flex flex-col justify-center border-r border-neutral-100">
          <h3 className="uppercase mb-4 text-xs tracking-widest text-neutral-400">Западная архитектура</h3>
          <h2 className="text-3xl lg:text-5xl mb-8 text-neutral-900 leading-tight font-bold">
            Европейский дух<br />в сердце Казани
          </h2>
          <p className="text-neutral-600 mb-8 leading-relaxed">
            Связана с христианской и европейской культурой. Отличается симметрией, строгостью форм, величественными куполами и колоннадами.
          </p>
          <ul className="flex flex-col gap-3 mb-10">
            {westFeatures.map((f) => (
              <li key={f.label} className="flex items-center gap-3 text-neutral-700 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 shrink-0" />
                {f.label}
              </li>
            ))}
          </ul>
          <div>
            <h4 className="uppercase text-xs tracking-widest text-neutral-400 mb-3">Примеры зданий</h4>
            <ul className="flex flex-col gap-2">
              {westBuildings.map((b) => (
                <li key={b.name} className="border-b border-neutral-100 pb-2">
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-800 text-sm hover:text-neutral-500 transition-colors duration-200 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-500"
                  >
                    {b.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="east" className="flex-1 px-6 py-16 lg:py-24 lg:px-12 flex flex-col justify-center bg-neutral-950">
          <h3 className="uppercase mb-4 text-xs tracking-widest text-neutral-500">Восточная архитектура</h3>
          <h2 className="text-3xl lg:text-5xl mb-8 text-white leading-tight font-bold">
            Исламская<br />душа Казани
          </h2>
          <p className="text-neutral-400 mb-8 leading-relaxed">
            Связана с исламской и татарской культурой. Минареты, арабские орнаменты, яркие цвета и богатая декоративность создают неповторимый облик.
          </p>
          <ul className="flex flex-col gap-3 mb-10">
            {eastFeatures.map((f) => (
              <li key={f.label} className="flex items-center gap-3 text-neutral-300 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
                {f.label}
              </li>
            ))}
          </ul>
          <div>
            <h4 className="uppercase text-xs tracking-widest text-neutral-500 mb-3">Примеры зданий</h4>
            <ul className="flex flex-col gap-2">
              {eastBuildings.map((b) => (
                <li key={b.name} className="border-b border-neutral-800 pb-2">
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 text-sm hover:text-white transition-colors duration-200 underline underline-offset-2 decoration-neutral-600 hover:decoration-neutral-300"
                  >
                    {b.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
