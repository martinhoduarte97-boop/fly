import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 md:py-10 lg:py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 md:space-y-6">
          <div>
            <h3 className="text-lg md:text-xl font-display font-bold mb-2">
              Precisa de atendimento?
            </h3>
            <p className="text-sm md:text-base text-primary-foreground/80">
              Fale com a nossa equipe:
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button 
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full px-8"
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=5546991055481&text=Ol%C3%A1%2C+vim+pelo+site%21&type=phone_number&app_absent=0', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Entrar em contato
            </Button>
          </motion.div>

          <div className="pt-6 md:pt-8 border-t border-primary-foreground/20">
            <p className="text-xs md:text-sm text-primary-foreground/60">
              Fly PB Viagens © Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
