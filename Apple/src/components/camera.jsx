import pic from "../assets/images/camera.png";
import { easeInOut, motion } from "framer-motion";
export default function Camera() {
  return (
    <>
      <section className="h-screen w-full flex flex-col bg-black items-center justify-center">
        <motion.p
          className="text-2xl font-semibold text-orange-400"
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.7, ease: easeInOut }}
        >
          Cameras
        </motion.p>
        <motion.h1
          className="text-7xl text-center font-semibold w-3/5 "
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.7, ease: easeInOut, delay: 0.3 }}
        >
          A big zoom forward.
        </motion.h1>
        <div className="w-full flex flex-row">
          <div className="w-7/10">
            <motion.img
              initial={{ opacity: 0, translateX: "-100%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.7, ease: easeInOut }}
              src={pic}
              alt="iphone_picture"
            />
          </div>

          <motion.div
            className="flex flex-col items-start justify-center gap-10"
            initial={{ opacity: 0, translateX: "100%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.7, ease: easeInOut }}
          >
            <div className="flex flex-col">
              <p className="text-neutral-400 text-2xl">Up to</p>
              <h2 className="text-orange-400 text-6xl font-semibold">8x</h2>
              <p className="text-neutral-400 text-2xl">optical-quality zoom</p>
            </div>

            <div className="flex flex-col ">
              <p className="text-neutral-400 text-2xl">All</p>
              <h2 className="text-orange-400 text-6xl font-semibold">48MP</h2>
              <p className="text-neutral-400 text-2xl">rear cameras</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
