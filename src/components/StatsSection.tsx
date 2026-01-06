import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Calendar, X } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
const CountingNumber = ({
  end,
  prefix = "",
  suffix = ""
}: {
  end: number;
  prefix?: string;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, end]);
  return <span ref={ref}>
      {prefix}{count.toLocaleString('pt-BR')}{suffix}
    </span>;
};
export const StatsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return <>
      <section className="py-8 md:py-12 lg:py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
          {/* Left Card */}
          <Card className="bg-gradient-to-br from-secondary to-white p-6 md:p-8 rounded-2xl md:rounded-3xl border-0 shadow-lg">
            <div className="space-y-3 md:space-y-4">
              <p className="text-primary font-display text-xs md:text-sm font-semibold uppercase tracking-wide">
                VIAJE COM A FLYVIAGENSPB
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground">
                Por que viajar com a gente?
              </h2>
              <motion.div whileHover={{
                scale: 1.05,
                y: -2
              }} whileTap={{
                scale: 0.95
              }} transition={{
                type: "spring",
                stiffness: 400,
                damping: 17
              }}>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full" onClick={() => setIsModalOpen(true)}>
                  FAZER ORÇAMENTO!
                </Button>
              </motion.div>
            </div>
          </Card>

          {/* Right Card */}
          <Card className="bg-primary text-primary-foreground p-6 md:p-8 rounded-2xl md:rounded-3xl border-0 shadow-xl">
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-3 md:gap-4">
                <Users className="w-10 h-10 md:w-12 md:h-12 text-accent flex-shrink-0" />
                <div>
                  <p className="text-3xl md:text-4xl font-display font-bold">
                    <CountingNumber end={3000} prefix="+ de " />
                  </p>
                  <p className="text-sm md:text-base text-primary-foreground/80">Embarques realizados</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 md:gap-4">
                <Calendar className="w-10 h-10 md:w-12 md:h-12 text-accent flex-shrink-0" />
                <div>
                  <p className="text-3xl md:text-4xl font-display font-bold">
                    Desde <CountingNumber end={2017} />
                  </p>
                  <p className="text-sm md:text-base text-primary-foreground/80">No mercado de Milhas e Viagens</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl w-full h-[90vh] p-0">
          
          <div className="flex-1 w-full h-full p-4 pt-2">
            <iframe src="https://flycontroller.lovable.app/cotacao-embed" className="w-full h-full border-0 rounded-lg" title="Formulário de Orçamento" />
          </div>
        </DialogContent>
      </Dialog>
    </>;
};