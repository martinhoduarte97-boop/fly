import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Plano Inicial: Encontro online para criar um plano personalizado baseado no seu perfil.",
  "Assessoria de Milhas: Transformamos suas milhas em viagens otimizando cada ponto.",
  "O Melhor Cartão: Identificamos o cartão ideal para maximizar seu acúmulo de pontos.",
  "Acesso às Salas VIP: Assessoria para garantir sua entrada em lounges exclusivos.",
  "Concierge Exclusivo: Suporte prioritário em um grupo dedicado para atender todas as suas demandas.",
  "Promoções Diárias: Alertas exclusivos com ofertas de classe executiva e oportunidades de viagem.",
  "Emissões Ilimitadas: Cuidamos de todas as suas passagens nacionais e internacionais por 12 meses."
];

export const Benefits = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 bg-primary text-primary-foreground">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-3 md:mb-4">
            Assessoria Viagens Ilimitadas®
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-primary-foreground/90">
            Transforme seus gastos em viagens incríveis sem esforço! Te auxiliamos em tudo, desde a 
            emissão até a otimização dos benefícios. Sua única preocupação será escolher o próximo 
            destino dos sonhos.
          </p>
        </div>

        <Card className="bg-primary-dark border-2 border-primary-foreground/20 p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl">
          <ul className="space-y-3 md:space-y-4">
            {benefits.map((benefit, index) => (
              <li 
                key={index}
                className="flex items-start gap-2 md:gap-3 text-primary-foreground"
              >
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="text-center mt-8">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8"
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=5546991055481&text=Ol%C3%A1%2C+vim+pelo+site%21&type=phone_number&app_absent=0', '_blank')}
              >
                QUERO A ASSESSORIA!
              </Button>
            </motion.div>
          </div>
        </Card>
      </div>
    </section>
  );
};
