import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const About = () => {
  const historyImages = [
    "https://placehold.co/800x600/333333/fff?text=Fundacion",
    "https://placehold.co/800x600/444444/fff?text=Primer+Local",
    "https://placehold.co/800x600/555555/fff?text=Expansion",
    "https://placehold.co/800x600/666666/fff?text=Equipo",
  ];

  return (
    <div className="container py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Sobre Nosotros</h1>
        <p className="mt-4 text-lg text-muted-foreground">Conoce nuestra historia y cómo traemos los mejores productos a tu mesa.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>
          <p className="text-muted-foreground mb-4">
            Fundada en el corazón de Urabá, nuestra empresa nació de la pasión por la agricultura y el deseo de conectar a los productores locales con un mercado más amplio. Desde nuestros humildes comienzos con un pequeño puesto de mercado, hemos crecido hasta convertirnos en un distribuidor líder, sin perder nunca de vista nuestros valores fundamentales de calidad, frescura y comunidad.
          </p>
          <p className="text-muted-foreground">
            A lo largo de los años, hemos construido relaciones sólidas y de confianza con los agricultores de la región, garantizando que cada producto que llega a tu negocio o a tu hogar cumpla con los más altos estándares.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://placehold.co/600x400/eeeeee/999999?text=Nuestra+Finca"
            alt="Nuestra Finca"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Nuestros Procesos</h2>
          <p className="mt-2 text-muted-foreground">De la granja a tu mesa, con el máximo cuidado.</p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {historyImages.map((src, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="rounded-lg overflow-hidden aspect-square bg-muted">
                    <img
                      src={src}
                      alt={`Proceso ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default About;
