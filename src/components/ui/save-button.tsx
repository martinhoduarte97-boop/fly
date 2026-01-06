import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, Check, Sparkles, X } from "lucide-react"
import confetti from "canvas-confetti"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface SaveButtonProps {
  text?: {
    idle?: string
    saving?: string
    saved?: string
  }
  className?: string
  onSave?: () => Promise<void> | void
}

export function SaveButton({ 
  text = {
    idle: "Save",
    saving: "Saving...",
    saved: "Saved!"
  },
  className,
  onSave
}: SaveButtonProps) {
  const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle")
  const [bounce, setBounce] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSave = async () => {
    if (status === "idle") {
      setIsModalOpen(true)
    }
  }

  const buttonVariants = {
    idle: {
      backgroundColor: "hsl(var(--accent))",
      color: "hsl(var(--accent-foreground))",
      scale: 1,
    },
    saving: {
      backgroundColor: "rgb(59, 130, 246)",
      color: "white",
      scale: 1,
    },
    saved: {
      backgroundColor: "rgb(34, 197, 94)",
      color: "white",
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.2,
        times: [0, 0.5, 1],
      },
    },
  }

  const sparkleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
  }

  return (
    <>
      <div className="relative">
        <motion.button
          onClick={handleSave}
          animate={status}
          variants={buttonVariants}
          className={cn(
            "group relative grid overflow-hidden rounded-full px-6 py-5 md:px-8 md:py-6 transition-all duration-200",
            status === "idle"
              ? "shadow-[0_1000px_0_0_hsl(var(--accent))_inset]"
              : "",
            "hover:shadow-lg",
            className
          )}
          style={{ minWidth: "150px" }}
          whileHover={status === "idle" ? { scale: 1.05, y: -2 } : {}}
          whileTap={status === "idle" ? { scale: 0.95 } : {}}
        >
          {status === "idle" && (
            <span>
              <span
                className={cn(
                  "spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full",
                  "[mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%]",
                  "before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)]",
                  "before:rotate-[-90deg] before:animate-rotate",
                  "before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]",
                )}
              />
            </span>
          )}
          <span
            className={cn(
              "backdrop absolute inset-px rounded-full transition-colors duration-200",
              status === "idle"
                ? "bg-accent group-hover:bg-accent/90"
                : "",
            )}
          />
          <span className="z-10 flex items-center justify-center gap-2 text-base md:text-lg font-semibold">
            <AnimatePresence mode="wait">
              {status === "saving" && (
                <motion.span
                  key="saving"
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 1, rotate: 360 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    rotate: { repeat: Infinity, duration: 1, ease: "linear" },
                  }}
                >
                  <Loader2 className="w-4 h-4" />
                </motion.span>
              )}
              {status === "saved" && (
                <motion.span
                  key="saved"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Check className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>
            <motion.span
              key={status}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {status === "idle" ? text.idle : status === "saving" ? text.saving : text.saved}
            </motion.span>
          </span>
        </motion.button>
        <AnimatePresence>
          {bounce && (
            <motion.div
              className="absolute top-0 right-0 -mr-1 -mt-1"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={sparkleVariants}
            >
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>Cotação</DialogTitle>
          </DialogHeader>
          <iframe
            src="https://flycontroller.lovable.app/cotacao-embed"
            className="w-full h-full border-0 rounded-lg"
            title="Formulário de Cotação"
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
