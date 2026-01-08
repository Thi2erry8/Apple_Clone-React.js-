import { easeInOut, motion } from "framer-motion";

export default function Design() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-black gap-8">
      <motion.p
        className="text-2xl font-semibold text-orange-400"
        initial={{ opacity: 0, translateY: 10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.7, ease: easeInOut }}
      >
        Design
      </motion.p>
      <motion.h1
        className="text-7xl text-center font-semibold w-3/5 "
        initial={{ opacity: 0, translateY: 10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.7, ease: easeInOut, delay: 0.3 }}
      >
        Unibody enclosure. Makes a strong case for itself.
      </motion.h1>
      <motion.p
        className="text-2xl text-neutral-400 w-3/5 text-center"
        initial={{ opacity: 0, translateY: 10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.7, ease: easeInOut, delay: 0.6 }}
      >
        Introducing iPhone 17 Pro and iPhone 17 Pro Max, designed from the
        inside out to be the most powerful iPhone models ever made. At the core
        of the new design is a heat-forged aluminum unibody enclosure that
        maximizes performance, battery capacity, and durability.
      </motion.p>
    </section>
  );
}
