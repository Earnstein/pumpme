import { motion } from "framer-motion";


const Product = () => {
  return (
    <div className="container px-4 py-8 sm:px-6 sm:py-24 lg:px-8">
    <motion.div className="max-w-3xl"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 1 }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
    >
    <h2 className="text-3xl font-bold sm:text-5xl font-playfair text-foreground">
        Get <span className="text-green-500">Familiar</span> or Cope
    </h2>
    </motion.div>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16"
    
    >
      <motion.div className="relative h-64 order-2 md:order-1 overflow-hidden sm:h-80 lg:h-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      >
        <img
          alt=""
          src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </motion.div>

      <motion.div className="lg:py-16 order-1 md:order-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
      >
        <article className="space-y-4 font-palaquin text-[16px] font-palanquin text-sm sm:text-xl text-muted-foreground tracking-tight">
          <p>
            Ready to dive into the exciting universe of blockchain, decentralised finance(DeFi), and web3 programming?
             Pumpme helps you unlock the power crytocurrency. Master web3 development, get the inside scope on the best airdrops, and 
             navigate DeFi with confidence.
          </p>

          <p>
            Pumpme is your one-stop-community for crypto success. Join us now or continue to shout "dev do something"🧐
          </p>
        </article>
      </motion.div>
    </div>
  </div>
  )
}

export default Product