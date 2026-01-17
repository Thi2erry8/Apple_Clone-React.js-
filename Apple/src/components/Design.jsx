import { easeInOut, motion } from "framer-motion";
import design1 from "../assets/images/design_17promax.jpg";
import design2 from "../assets/images/design_17air.jpg";
import design3 from "../assets/images/design_17.jpg";
import camera1 from "../assets/images/camera_air.jpg";
import camera2 from "../assets/images/camera_pro.jpg";
import camera3 from "../assets/images/camera.jpg";
import chip1 from "../assets/images/chip_pro.jpg";
import chip2 from "../assets/images/chip_pro.jpg";
import chip3 from "../assets/images/chip.jpg";
import { useState } from "react";

export default function Design() {
  const [show, setShow] = useState(1);
  const [compare, setCompare] = useState(false);
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

  const cameras = [
    {
      pic: camera1,
      text: "Ultimate pro camera system.",
      text2: "48MP Fusion Telephoto",
    },
    {
      pic: camera2,
      text: "Two advanced cameras in one.",
      text2: "48MP Fusion Main",
    },
    {
      pic: camera3,
      text: "Superstunning shots up close or far away.",
      text2: "48MP Fusion Ultra Wide",
    },
  ];

  const chips = [
    {
      pic: chip1,
      text: "Exceptional pro performance.",
      text2: "6-Core GPU with Neural Accelerators",
    },
    {
      pic: chip2,
      text: "Hyperspeed. Hyperefficient.",
      text2: "5-Core GPU with Neural Accelerators",
    },
    {
      pic: chip3,
      text: "Power player. Energy expert.",
      text2: "5-Core GPU with Neural Accelerators",
    },
  ];

  const batterys = [
    {
      title: "39 hours",
      text1: "of video playback",
      text2: "Up to 50% charge in 20 minutes",
    },
    {
      title: "27 hours",
      text1: "of video playback",
      text2: "Up to 50% charge in 30 minutes",
    },
    {
      title: "30 hours",
      text1: "of video playback",
      text2: "Up to 50% charge in 20 minutes",
    },
  ];

  const prices = [
    {
      title: "$1099",
      text1: "or $45.79/mo. for 24 mo.*",
      text2: "Storage up to 2TB on iPhone 17 Pro Max",
    },
    {
      title: "$999",
      text1: "or $41.62/mo. for 24 mo.*",
      text2: "Storage up to 1TB",
    },
    {
      title: "$799",
      text1: "or $33.29/mo. for 24 mo.*",
      text2: "Storage up to 512GB",
    },
  ];
  const buttons = [
    {
      id: 1,
      icon: "ri-device-line",
      text: "design",
    },
    {
      id: 2,
      icon: "ri-camera-3-line",
      text: "camera",
    },
    {
      id: 3,
      icon: "ri-cpu-line",
      text: "chip",
    },
    {
      id: 4,
      icon: "ri-battery-line",
      text: "battery",
    },
    {
      id: 5,
      icon: "ri-money-dollar-circle-line",
      text: "prices",
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
      <motion.div
        initial={false}
        animate={
          compare === true
            ? { opacity: 1, translateY: "0%" }
            : { opacity: 0, translateY: "100%" }
        }
        transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
        className="absolute flex flex-col items-center justify-center z-10 h-full w-full backdrop-blur-sm bg-neutral-900/50 "
      >
        <div className="h-full w-3/10 bg-neutral-50 rounded-2xl text-neutral-900 font-semibold px-3">
          <div className="h-2/10 flex flex-row items-center justify-between ">
            <h1 className="text-3xl font-semibold w-7/10">
              Compare latest iPhone models.
            </h1>
            <button
              onClick={() => setCompare(false)}
              className="text-3xl text-neutral-100 bg-neutral-900 rounded-full px-1 cursor-pointer"
            >
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
              <motion.div
                initial={false}
                animate={
                  show === 1
                    ? { opacity: 1, translateX: "0%" }
                    : { opacity: 0, translateX: "-100%" }
                }
                transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
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
              </motion.div>
              {/* CAMERA */}
              <motion.div
                initial={false}
                animate={
                  show === 2
                    ? { opacity: 1, translateX: "0%" }
                    : { opacity: 0, translateX: "-100%" }
                }
                transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
                className="absolute z-14 w-full h-full flex flex-col justify-between pt-7 overflow-y-scroll [&::-webkit-scrollbar]:hidden
                   [-ms-overflow-style:none]
                  [scrollbar-width:none]"
              >
                {cameras.map((camera, index) => (
                  <div
                    key={index}
                    className=" flex flex-row w-9/10 h-3/10 rounded-2xl overflow-hidden bg-neutral-200/45"
                  >
                    <div className="w-2/5 h-full overflow-hidden">
                      <img
                        className="w-full h-full"
                        src={camera.pic}
                        alt="camerapic"
                      />
                    </div>
                    <div className="w-1/2 py-4 px-4">
                      <p className="text-start">{camera.text}</p>
                      <p className="text-start text-sm text-neutral-500">
                        {camera.text2}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
              {/* CHIP */}
              <motion.div
                initial={false}
                animate={
                  show === 3
                    ? { opacity: 1, translateX: "0%" }
                    : { opacity: 0, translateX: "-100%" }
                }
                transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
                className="absolute z-14 w-full h-full flex flex-col justify-between pt-7 overflow-y-scroll [&::-webkit-scrollbar]:hidden
                   [-ms-overflow-style:none]
                  [scrollbar-width:none]"
              >
                {chips.map((chip, index) => (
                  <div
                    key={index}
                    className=" flex flex-col items-start pl-4 justify-center w-9/10 h-3/10 rounded-2xl overflow-hidden bg-neutral-200/45"
                  >
                    <h1 className="text-start w-6/10 text-neutral-900 font-semibold text-m">
                      {chip.text}
                    </h1>
                    <p className="text-start w-6/10 text-sm text-neutral-500">
                      {chip.text2}
                    </p>
                  </div>
                ))}
              </motion.div>
              {/* BATTERY */}
              <motion.div
                initial={false}
                animate={
                  show === 4
                    ? { opacity: 1, translateX: "0%" }
                    : { opacity: 0, translateX: "-100%" }
                }
                transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
                className="absolute z-14 w-full h-full flex flex-col justify-between pt-7 overflow-y-scroll [&::-webkit-scrollbar]:hidden
                   [-ms-overflow-style:none]
                  [scrollbar-width:none]"
              >
                {batterys.map((battery, index) => (
                  <div
                    key={index}
                    className=" flex flex-col items-start pl-4 justify-center w-9/10 h-3/10 rounded-2xl overflow-hidden bg-neutral-200/45"
                  >
                    <p className="text-start text-sm text-neutral-500">UP TO</p>
                    <h1 className="text-start text-neutral-900 font-semibold text-2xl">
                      {battery.title}
                    </h1>
                    <p className="text-start text-sm text-neutral-500">
                      {battery.text1}
                    </p>
                    <p className="text-start text-sm text-neutral-500">
                      {battery.text2}
                    </p>
                  </div>
                ))}
              </motion.div>
              {/* PRICE */}
              <motion.div
                initial={false}
                animate={
                  show === 5
                    ? { opacity: 1, translateX: "0%" }
                    : { opacity: 0, translateX: "-100%" }
                }
                transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
                className="absolute z-14 w-full h-full flex flex-col justify-between pt-7 overflow-y-scroll [&::-webkit-scrollbar]:hidden
                   [-ms-overflow-style:none]
                  [scrollbar-width:none]"
              >
                {prices.map((price, index) => (
                  <div
                    key={index}
                    className=" flex flex-col items-start pl-4 justify-center w-9/10 h-3/10 rounded-2xl overflow-hidden bg-neutral-200/45"
                  >
                    <p className="text-start text-sm text-neutral-500">
                      256GB model from
                    </p>
                    <h1 className="text-start text-neutral-900 font-semibold text-2xl">
                      {price.title}
                    </h1>
                    <p className="text-start text-sm text-neutral-500">
                      {price.text1}
                    </p>
                    <p className="text-start text-sm text-neutral-500">
                      {price.text2}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="h-1/10 w-full flex flex-row items-center justify-between text-neutral-500">
            {buttons.map((button) => (
              <motion.button
                className="p-1 rounded-sm w-1/6 cursor-pointer"
                initial={false}
                animate={
                  show === button.id
                    ? { color: "white", backgroundColor: "black" }
                    : { color: "inherit", backgroundColor: "white" }
                }
                key={button.id}
                onClick={() => setShow(button.id)}
              >
                <i className={`${button.icon} text-lg `}></i>
                <p className="text-sm ">{button.text}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.button
        onClick={() => setCompare(true)}
        className="flex text-xl font-semibold flex-row border bgneutral-500/40 backdrop-blur-sm gap-2 border-neutral-800 px-3 py-2 rounded-full cursor-pointer"
      >
        <p>Compare iPhone design</p>
        <i className="ri-add-line bg-blue-500 rounded-full px-1"></i>
      </motion.button>
    </section>
  );
}
