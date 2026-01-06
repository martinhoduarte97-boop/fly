import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import businessClass from "@/assets/business-class.jpg";
import { CreditCard, TrendingUp } from "lucide-react";

export const MilesAdvisory = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 bg-primary text-primary-foreground">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
            Que tal viajar até 90% mais em<br className="hidden md:block" />
            <span className="md:hidden"> </span>conta com seus próprios gastos?
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-primary-foreground/90 max-w-2xl mx-auto px-4">
            Se você gasta acima de R$ 10 mil por mês e viaja pelo menos 2 vezes por ano. 
            A Assessoria de Milhas é para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center max-w-4xl mx-auto">
          {/* Info Card */}
          <Card className="bg-primary-dark border-2 border-primary-foreground/20 p-6 md:p-8 rounded-xl md:rounded-2xl">
            <div className="space-y-3 md:space-y-4">
              <CreditCard className="w-10 h-10 md:w-12 md:h-12 text-accent" />
              <h3 className="text-lg md:text-xl font-display font-bold text-primary-foreground">
                Executiva com preço de econômica agora é possível.
              </h3>
              <p className="text-primary-foreground/80 text-xs md:text-sm">
                Transforme seus gastos mensais em viagens de luxo.
              </p>
            </div>
          </Card>

          {/* Image Card */}
          <Card className="overflow-hidden rounded-xl md:rounded-2xl border-0 shadow-2xl h-48 md:h-64">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${businessClass})` }}
            />
          </Card>
        </div>
      </div>
    </section>
  );
};
