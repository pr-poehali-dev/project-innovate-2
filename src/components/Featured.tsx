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

  const westBuildings = ["Благовещенский собор", "Богоявленский собор", "Дом Ушковой", "Дом печати", "Гостиный двор"];
  const eastBuildings = ["Мечеть Кул-Шариф", "Мечеть Марджани", "Апанаевская мечеть", "Бурнаевская мечеть", "Нурулла-мечеть"];

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
                <li key={b} className="text-neutral-800 text-sm border-b border-neutral-100 pb-2">{b}</li>
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
                <li key={b} className="text-neutral-300 text-sm border-b border-neutral-800 pb-2">{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
