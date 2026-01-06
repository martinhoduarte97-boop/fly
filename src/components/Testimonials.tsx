import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import marianaAvatar from "@/assets/avatar-mariana.jpg";
import andreAvatar from "@/assets/avatar-andre.jpg";
import fernandaAvatar from "@/assets/avatar-fernanda.jpg";

const testimonials = [
  {
    name: "Mariana L.",
    initials: "ML",
    image: marianaAvatar,
    text: "A melhor decisão que tomei foi viajar com essa agência! Tudo foi pensado nos mínimos detalhes. Me senti segura, acolhida e tive uma experiência que superou todas as minhas expectativas. Com certeza voltarei a viajar com vocês!"
  },
  {
    name: "André C.",
    initials: "AC",
    image: andreAvatar,
    text: "Fiz minha primeira viagem internacional e fiquei impressionado com a organização e suporte que recebi. Me senti seguro do início ao fim. Foi, sem dúvidas, a melhor experiência de viagem que já tive."
  },
  {
    name: "Fernanda S.",
    initials: "FS",
    image: fernandaAvatar,
    text: "Viajar é uma das minhas paixões, e dessa vez foi ainda mais especial. A agência cuidou de tudo: desde voos confortáveis até hospedagens incríveis. Eu só precisei aproveitar cada momento. Recomendo de olhos fechados!"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-center mb-8 md:mb-12 text-primary">
          Pessoas que já viajaram conosco:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="p-5 md:p-6 rounded-xl md:rounded-2xl border-0 shadow-md hover-lift bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary/20 mb-3 md:mb-4" />
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 md:mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-2 md:gap-3">
                <Avatar className="bg-primary text-primary-foreground w-10 h-10 md:w-12 md:h-12">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <p className="font-semibold text-sm md:text-base text-foreground">{testimonial.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
