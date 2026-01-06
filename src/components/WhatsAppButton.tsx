import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const WhatsAppButton = () => {
  return (
    <motion.div
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        size="lg"
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl transition-all p-0"
        aria-label="Contato WhatsApp"
        onClick={() => window.open('https://api.whatsapp.com/send/?phone=5546991055481&text=Ol%C3%A1%2C+vim+pelo+site%21&type=phone_number&app_absent=0', '_blank')}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
        </motion.div>
      </Button>
    </motion.div>
  );
};
