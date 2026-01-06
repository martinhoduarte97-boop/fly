import { SaveButton } from "@/components/ui/save-button";
import heroImage from "@/assets/hero-travel.jpg";
import { Plane } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-12 md:py-16 lg:py-24">
        <motion.div 
          className="max-w-3xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="flex items-center justify-center gap-2 mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Plane className="w-6 h-6 md:w-8 md:h-8 text-accent" />
            <span className="text-accent font-display font-bold text-base md:text-lg">FlyViagensPB</span>
          </motion.div>
          
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-tight px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Passagens aéreas com até{" "}
            <span className="text-accent">70% off</span>
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            ou Assessoria de Milhas para transformar seus Gastos em Viagens
          </motion.p>

          <motion.div 
            className="pt-4 md:pt-6 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <SaveButton
              text={{
                idle: "FAZER ORÇAMENTO!",
                saving: "Processando...",
                saved: "Enviado!"
              }}
              className="shadow-lg hover:shadow-xl"
            />
          </motion.div>

          <motion.p 
            className="text-xs md:text-sm text-white/80 pt-3 md:pt-4 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            É só escolher o destino que buscamos a melhor condição para você
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};
