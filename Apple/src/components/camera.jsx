import pic from "../assets/images/camera.png";
import { motion } from "framer-motion";
export default function Camera() {
  return (
    <>
      <section className="h-screen w-full flex flex-col">
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
            <img src={pic} alt="" />
          </div>
          <div className="">
            <motion.div></motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
