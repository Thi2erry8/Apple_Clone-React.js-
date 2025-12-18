import iphone from "../assets/images/hero_pic.webp";
import video from "../assets/videos/hero_vid.mp4";
import { motion } from "framer-motion";

export default function hero() {
  return (
    <>
      <section className="h-screen w-full flex flex-col justify-end items-center bg-black relative overflow-hidden">
        <div className="h-5/6 w-4/6  relative ">
          <video autoPlay muted className="w-full h-auto object-cover">
            <source src={video} type="video/mp4" />
          </video>
          <div className="absolute z-2 top-50 left-0 w-full h-full flex flex-col justify-center items-center gap-2 text-xl">
            <button className="bg-sky-600 px-6 py-2 rounded-full text-white  font-semibold hover:bg-sky-700 transition cursor-pointer">
              BUY
            </button>
            <p className="text-white  font-medium">
              From $1099 or $45.79/mo. for 24 mo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
