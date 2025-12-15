import Header from "../components/header";
import iphone from "../assets/images/iphone_hero.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Header />
      <section className="h-screen w-full flex flex-col justify-center items-center ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className=""
        >
          <p>Iphone 17 pro</p>
        </motion.div>
        <div className="">
          <img src={iphone} width="500px" alt="" />
        </div>
      </section>
    </>
  );
}
