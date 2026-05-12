export function ArtSpaces() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">Искусство в Саратове</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Культурные пространства города, где живёт и рождается саратовское искусство
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/modern-contemporary-art-gallery-white-walls.jpg"
                alt="Современная галерея"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Выставочный зал</h3>
              <p className="text-muted-foreground leading-relaxed">
                Главная площадка выставки — светлое просторное пространство в центре Саратова с работами более 40 художников
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/classical-museum-grand-architecture-paintings.jpg"
                alt="Саратовский художественный музей"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Художественный музей им. Радищева</h3>
              <p className="text-muted-foreground leading-relaxed">
                Один из старейших художественных музеев России — наш постоянный партнёр и источник вдохновения
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/artist-studio-workspace-with-paintings-easel.jpg"
                alt="Мастерская художника"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Мастерские участников</h3>
              <p className="text-muted-foreground leading-relaxed">
                В дни выставки художники открывают двери своих мастерских — уникальная возможность увидеть творческий процесс изнутри
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/outdoor-sculpture-garden-with-modern-art.jpg"
                alt="Набережная Саратова"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Набережная Космонавтов</h3>
              <p className="text-muted-foreground leading-relaxed">
                Уличная часть экспозиции — скульптуры и инсталляции под открытым небом с видом на Волгу
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/luxury-private-art-collection-room.jpg"
                alt="Коллекции участников"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Работы для приобретения</h3>
              <p className="text-muted-foreground leading-relaxed">
                Все представленные работы можно приобрести — пополните коллекцию саратовским искусством
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/contemporary-exhibition-space-art-show.jpg"
                alt="Встречи с художниками"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-2xl font-light mb-2">Встречи и лекции</h3>
              <p className="text-muted-foreground leading-relaxed">
                В рамках выставки проходят открытые встречи с художниками, мастер-классы и арт-беседы для всех желающих
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}