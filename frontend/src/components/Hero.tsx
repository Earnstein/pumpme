import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Animation from "@/components/animation";


const Hero = () => {
  return (
    <div className="container w-full h-full md:pt-16 pt-28">
            <div>
              <div className="flex flex-1 flex-col justify-center md:flex-row md:justify-between items-center gap-4 md:gap-8">
                {/* HERO TEXTS */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="flex flex-[0.6] flex-col gap-y-4 text-center md:text-start"
                >
                  <h1 className="text-3xl sm:text-5xl leading-tight tracking-tighter md:text-7xl lg:leading-[1.1] font-playfair text-foreground font-black">
                    Pump me: Launch Your <span>Web3</span> Journey
                  </h1>
                  <p className="max-w-2xl font-palanquin text-sm sm:text-xl text-muted-foreground tracking-tight">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa, nulla?
                  </p>
                  <div className="flex gap-x-2 items-center justify-center md:justify-start">
                    <Link to="/signup">
                      <Button
                        variant="outline"
                        className="font-palanquin sm:text-lg p-4 sm:px-20 sm:py-6 bg-background"
                      >
                        Quick Demo
                      </Button>
                    </Link>

                    <Link to="/signup">
                      <Button className="font-palanquin sm:text-lg p-4 sm:px-20 sm:py-6">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </motion.div>
                {/*"IMAGE COMPONENT"*/}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="relative flex-[0.4] h-80 w-80 xs:h-[450px] xs:w-[450px] sm:h-[420px] sm:w-[600px] md:h-full md:w-full"
                >
                  <Animation />
                </motion.div>
              </div>
            </div>
    </div>
  )
}

export default Hero