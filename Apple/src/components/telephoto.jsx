import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import pic1 from "../assets/images/200mm.jpg";
import pic2 from "../assets/images/100mm.jpg";
import pic3 from "../assets/images/48mm.jpg";
import pic5 from "../assets/images/35mm.jpg";
import pic6 from "../assets/images/24mm.jpg";
import pic7 from "../assets/images/13mm.jpg";
import pic8 from "../assets/images/Macro.jpg";

const images = [
  { src: pic1, text: "200mm" },
  { src: pic2, text: "100mm" },
  { src: pic3, text: "48mm" },
  { src: pic5, text: "35mm" },
  { src: pic6, text: "24mm" },
  { src: pic7, text: "13mm" },
  { src: pic8, text: "macro" },
];

const items = ["200mm", "100mm", "48mm", "35mm", "24mm", "13mm", "macro"];

export default function Telephoto() {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });
  const [view, setView] = useState("200mm");
  const handleHover = (e) => {
    const { offsetLeft, offsetWidth } = e.currentTarget;

    setPosition({
      left: offsetLeft,
      width: offsetWidth,
      opacity: 1,
    });
  };
  const handleView = {};

  useEffect(() => {
    if (!containerRef.current) return;

    const firstItem = containerRef.current.children[0];

    setPosition({
      left: firstItem.offsetLeft,
      width: firstItem.offsetWidth,
      opacity: 1,
    });
  }, []);
  return (
    <>
      <section className="w-full h-screen flex flex-col items-center justify-center gap-4">
        <div className=" relative w-5/10 h-7/10 bg-black overflow-hidden">
          {images.map((image) => (
            <motion.img
              className="w-full h-full absolute rounded-xl"
              key={image.text}
              initial={{
                visibility: "hidden",
                opacity: 0,
                translateX: "-1000%",
              }}
              animate={
                view === image.text
                  ? { opacity: 1, translateX: "0%", visibility: "visible" }
                  : { visibility: "hidden", opacity: 0, translateX: "-100%" }
              }
              transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
              src={image.src}
              alt={image.text}
            />
          ))}
        </div>

        <div
          ref={containerRef}
          className="relative text-sm flex flex-row  bg-neutral-900  rounded-full px-3.5"
        >
          {items.map((item) => (
            <button
              key={item}
              onClick={(e) => {
                handleHover(e);
                setView(item);
              }}
              className="relative z-10 cursor-pointer mix-blend-difference px-5 py-2 text-neutral-100"
            >
              {item}
            </button>
          ))}

          <motion.span
            animate={position}
            className="absolute z-0 h-full top-0 rounded-full bg-white "
            style={{ left: position.left, width: position.width }}
          />
        </div>
      </section>
    </>
  );
}
