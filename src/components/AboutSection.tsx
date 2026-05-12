export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-6">
              Искусство Поволжья — живое и настоящее
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Выставка «Волга в красках» проводится в Саратове уже несколько лет подряд и объединяет
                художников со всего Поволжья — от молодых авторов до признанных мастеров с именем.
              </p>
              <p>
                Здесь каждый найдёт что-то своё: мощная реалистическая живопись, нежная акварель,
                смелая абстракция и тонкая графика. Все работы можно увидеть вживую и приобрести прямо
                на выставке.
              </p>
              <p className="text-muted-foreground">
                Мы верим, что великое искусство рождается не только в столицах — Саратов и Волга
                вдохновляют художников уже не одно столетие.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/art-gallery-interior-contemporary.jpg"
              alt="Интерьер галереи"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}