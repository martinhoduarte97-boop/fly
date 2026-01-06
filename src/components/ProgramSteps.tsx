import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, FileText, Star } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico Completo",
    description: "Analisamos seus hábitos de consumo e cartões de crédito para maximizar seus pontos e benefícios."
  },
  {
    icon: FileText,
    title: "Plano Personalizado",
    description: "Transformamos seus gastos em viagens incríveis com um planejamento feito sob medida."
  },
  {
    icon: Star,
    title: "Suporte Premium",
    description: "Oferecemos acompanhamento diário com oportunidades exclusivas e suporte total para emissões e dúvidas."
  }
];

export const ProgramSteps = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-center mb-8 md:mb-12 text-primary">
          Etapas do Programa
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
            <Card 
              key={step.title}
              className="p-6 md:p-8 rounded-xl md:rounded-2xl border-0 shadow-md hover-lift text-center bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 mb-4 md:mb-6">
                <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold mb-3 md:mb-4 text-foreground">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </Card>
            );
          })}
        </div>

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
    </section>
  );
};
