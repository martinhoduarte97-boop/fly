import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import centralAmerica from "@/assets/central-america.jpg";
import southAmerica from "@/assets/south-america-cristo.jpg";
import northAmerica from "@/assets/north-america.jpg";
import europe from "@/assets/europe.jpg";
import oceania from "@/assets/oceania.jpg";
import asia from "@/assets/asia.jpg";
import africa from "@/assets/africa.jpg";
import { motion } from "framer-motion";

const destinations = [
  {
    name: "América do Sul",
    image: southAmerica,
    gradient: "from-emerald-500/80 to-teal-600/80",
    description: "Cristo Redentor"
  },
  {
    name: "América do Norte",
    image: northAmerica,
    gradient: "from-blue-500/80 to-indigo-600/80",
    description: "Estátua da Liberdade"
  },
  {
    name: "América Central",
    image: centralAmerica,
    gradient: "from-cyan-500/80 to-blue-500/80",
    description: "Praias Paradisíacas"
  },
  {
    name: "Europa",
    image: europe,
    gradient: "from-indigo-600/80 to-purple-700/80",
    description: "História e Cultura"
  },
  {
    name: "Oceania",
    image: oceania,
    gradient: "from-orange-500/80 to-pink-600/80",
    description: "Sydney Opera House"
  },
  {
    name: "Ásia",
    image: asia,
    gradient: "from-red-500/80 to-orange-600/80",
    description: "Grande Muralha da China"
  },
  {
    name: "África",
    image: africa,
    gradient: "from-amber-600/80 to-yellow-700/80",
    description: "Safáris Inesquecíveis"
  }
];

export const DestinationCards = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 px-4">
      <div className="container max-w-7xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {destinations.map((destination, index) => (
              <CarouselItem key={destination.name} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card 
                    className="group relative overflow-hidden rounded-2xl border-0 h-64 md:h-80 cursor-pointer hover-lift"
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${destination.image})` }}
                    />
                    
                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-end p-4 md:p-6 bg-gradient-to-t from-black/60 to-transparent">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                        {destination.name}
                      </h3>
                      <p className="text-sm md:text-base text-white/90 font-medium">
                        {destination.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-12" />
          <CarouselNext className="right-2 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};
