import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import rioView from "@/assets/rio-view.jpg";
import { motion } from "framer-motion";

export const CostCalculator = () => {
  const [spending, setSpending] = useState([25000]);

  const calculateBenefits = (value: number) => {
    if (value < 15000) {
      return {
        title: "2 passagens econômicas para América do Sul",
        benefits: ["2 passagens para qualquer lugar do Brasil", "3 a 5 noites em hotéis 4 ou 5 estrelas no Brasil"]
      };
    } else if (value < 25000) {
      return {
        title: "3 passagens econômicas internacionais",
        benefits: ["3 passagens domésticas", "5 a 7 noites em hotéis de luxo"]
      };
    } else {
      return {
        title: "2 passagens executivas internacionais",
        benefits: ["Acesso a salas VIP", "7 a 10 noites em hotéis 5 estrelas", "Upgrade automático de categoria"]
      };
    }
  };

  const benefits = calculateBenefits(spending[0]);

  return (
    <section className="py-8 md:py-12 lg:py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3 md:mb-4 px-4">
            Descubra as vantagens que os seus<br className="hidden md:block" />
            <span className="md:hidden"> </span>gastos e cartão podem oferecer:
          </h2>
          <p className="text-sm md:text-base text-muted-foreground px-4">
            Selecione o seu gasto mensal no cartão de crédito e veja o que está perdendo...
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border-0 shadow-xl bg-gradient-to-br from-white to-secondary">
          <div className="space-y-6 md:space-y-8">
            {/* Slider */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs md:text-sm font-medium text-muted-foreground">Gasto Mensal</span>
                <span className="text-xl md:text-2xl font-display font-bold text-primary">
                  R$ {spending[0].toLocaleString('pt-BR')}
                </span>
              </div>
              <Slider 
                value={spending}
                onValueChange={setSpending}
                min={10000}
                max={50000}
                step={5000}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>R$ 10.000</span>
                <span>R$ 50.000</span>
              </div>
            </div>

            {/* Benefits Display */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-display font-bold text-primary">
                {benefits.title}
              </h3>
              <ul className="space-y-2">
                {benefits.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs md:text-sm text-foreground">
                    <span className="text-accent font-bold">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="rounded-xl md:rounded-2xl overflow-hidden h-48 md:h-64">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${rioView})` }}
              />
            </div>

            {/* CTA */}
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold rounded-full px-8"
                  onClick={() => window.open('https://api.whatsapp.com/send/?phone=5546991055481&text=Ol%C3%A1%2C+vim+pelo+site%21&type=phone_number&app_absent=0', '_blank')}
                >
                  QUERO A ASSESSORIA!
                </Button>
              </motion.div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
