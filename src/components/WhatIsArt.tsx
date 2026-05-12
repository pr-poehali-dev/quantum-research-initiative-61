export function WhatIsArt() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src="/classical-art-museum-painting.jpg"
                alt="Классическое искусство в музее"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light text-balance">
                Саратов и искусство — нерасторжимая связь
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Саратов — один из старейших культурных центров России. Здесь работали великие художники,
                  здесь открывались первые провинциальные музеи, и именно отсюда черпают вдохновение
                  многие современные мастера живописи.
                </p>

                <p>
                  Волга, её широкие просторы и неповторимый свет — вечный источник вдохновения для художников
                  Поволжья. Именно этот дух живёт в каждой работе участников нашей выставки.
                </p>

                <p>
                  Выставка «Волга в красках» — это место встречи художников и зрителей, где можно
                  пообщаться с авторами, понять замысел работы и унести домой частичку саратовского искусства.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              В своей основе искусство — это связь: между художником и его средством выражения, между
              произведением и зрителем, между людьми через время и пространство. Саратовская школа живописи
              бережно хранит эту традицию, передавая её из поколения в поколение на берегах Волги.
            </p>

            <div className="pt-8 border-t border-border mt-8">
              <h3 className="font-serif text-2xl font-light mb-4 text-foreground">О выставке</h3>
              <p>
                «Волга в красках» — ежегодная открытая выставка в Саратове, объединяющая десятки
                художников Поволжья. Мы создаём пространство, где искусство доступно каждому:
                без пафоса и закрытых дверей. Приходите, смотрите, общайтесь с художниками и
                находите работы, которые отзовутся в вашем сердце.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}