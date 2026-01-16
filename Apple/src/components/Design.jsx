import { easeInOut, motion } from "framer-motion";
import design1 from "../assets/images/design_17promax.jpg";
import design2 from "../assets/images/design_17air.jpg";
import design3 from "../assets/images/design_17.jpg";

export default function Design() {
  const designs = [
    {
      pic: design1,
      text: "Innovative design with breakthrough pro performance.",
    },
    {
      pic: design2,
      text: "Super thin. Strikingly light. Shockingly strong.",
    },
    {
      pic: design3,
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
        <div className="h-full w-3/10 bg-neutral-50 rounded-2xl text-neutral-900 font-semibold px-3">
          <div className="h-2/10 flex flex-row items-center justify-between ">
            <h1 className="text-3xl font-semibold w-7/10">
              Compare latest iPhone models.
            </h1>
            <button className="text-3xl text-neutral-100 bg-neutral-900 rounded-full px-1">
              <i class="ri-close-line"></i>
            </button>
          </div>

          <div
            className="relative h-7/10 overflow-x-scroll [&::-webkit-scrollbar]:hidden
  [-ms-overflow-style:none]
  [scrollbar-width:none]"
          >
            <div className=" absolute z-15 pt-1.5  h-full flex flex-col items-start justify-start text-lg gap-26.5">
              <p>iphone 17 pro</p>
              <p>iphone air</p>
              <p>iphone 17</p>
            </div>
            <div
              className="relative w-full h-full
            "
            >
              {/* DESIGN */}
              <div
                className="absolute z-14 w-full h-full flex flex-col justify-between pt-7 overflow-y-scroll [&::-webkit-scrollbar]:hidden
                   [-ms-overflow-style:none]
                  [scrollbar-width:none]"
              >
                {designs.map((design, index) => (
                  <div
                    key={index}
                    className=" flex flex-row w-9/10 h-3/10 rounded-2xl overflow-hidden bg-neutral-200/45"
                  >
                    <div className="w-2/5 h-full overflow-hidden">
                      <img
                        className="w-full h-full"
                        src={design.pic}
                        alt="designPic"
                      />
                    </div>
                    <div className="w-1/2 py-4 px-4">
                      <p className="text-start">{design.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-1/10">
            <button>
              <i className="ri-device-line"></i>
            </button>
            <button>
              <i className="ri-camera-3-line"></i>
            </button>
            <button>
              <i className="ri-cpu-line"></i>
            </button>
            <button>
              <i className="ri-battery-line"></i>
            </button>
            <button>
              <i className="ri-money-dollar-circle-line"></i>
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
