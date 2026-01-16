import { easeInOut, motion } from "framer-motion";

export default function Design() {
  const design = [
    {
      pic: "",
      text: "Innovative design with breakthrough pro performance.",
    },
    {
      pic: "",
      text: "Super thin. Strikingly light. Shockingly strong.",
    },
    {
      pic: "",
      text: "Even more delightful.Even more durable.",
    },
  ];
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-black gap-8">
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
      {/* design info */}
      <motion.div className="absolute flex flex-col items-center justify-center z-10 h-full w-full backdrop-blur-sm bg-neutral-900/50 ">
        <div className="h-full w-3/10 bg-neutral-200 rounded-2xl text-neutral-900 px-3">
          <div className="h-2/10 flex flex-row items-center justify-between ">
            <h1 className="text-3xl font-semibold w-7/10">
              Compare latest iPhone models.
            </h1>
            <button className="text-3xl text-neutral-100 bg-neutral-900 rounded-full px-1">
              <i class="ri-close-line"></i>
            </button>
          </div>
          <div className="h-6/10">
            <p>iphone 17 pro</p>
            <p>iphone air</p>
            <p>iphone 17</p>
          </div>
          <div className="h-2/10">
            <button>
              <i class="ri-device-line"></i>
            </button>
            <button>
              <i class="ri-camera-3-line"></i>
            </button>
            <button>
              <i class="ri-cpu-line"></i>
            </button>
            <button>
              <i class="ri-battery-line"></i>
            </button>
            <button>
              <i class="ri-money-dollar-circle-line"></i>
            </button>
          </div>
        </div>
      </motion.div>

      <motion.button className="flex text-xl font-semibold flex-row border bg-neutral-500/40 backdrop-blur-sm gap-2 border-neutral-800 px-3 py-2 rounded-full">
        <p>Compare iPhone design</p>
        <i className="ri-add-line bg-blue-500 rounded-full px-1"></i>
      </motion.button>
    </section>
  );
}
