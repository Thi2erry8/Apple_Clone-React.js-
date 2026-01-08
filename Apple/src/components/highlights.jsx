import { useEffect, useRef, useState } from "react";
import video1 from "../assets/videos/highlight1.mp4";
import video2 from "../assets/videos/highlight2.mp4";
import video3 from "../assets/videos/highlight3.mp4";
import video4 from "../assets/videos/highlight4.mp4";
import trailer from "../assets/videos/trailer.mp4";
import { easeInOut, motion } from "framer-motion";

const videos = [
  {
    video: video1,
    text: "Experience the future of technology with our latest innovations.",
  },
  {
    video: video2,
    text: "Discover the power of our revolutionary design.",
  },
  {
    video: video3,
    text: "See how our products transform everyday life.",
  },
  {
    video: video4,
    text: "Join us on a journey to redefine excellence.",
  },
];

const DOT = 12;
const ACTIVE_DOT = 36;

export default function Highlights() {
  const videoRefs = useRef([]);
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [etat, setEtat] = useState(false);

  useEffect(() => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (isPlaying) video.play();
    else video.pause();
  }, [index, isPlaying]);

  const handleTimeUpdate = (i) => {
    if (i !== index) return;
    const video = videoRefs.current[i];
    setProgress(video.currentTime / video.duration);
  };

  const handleEnded = () => {
    setProgress(0);
    setIndex((prev) => (prev + 1) % videos.length);
  };

  const jumpTo = (i) => {
    if (i === index) return;

    const current = videoRefs.current[index];
    if (current) {
      current.pause();
      current.currentTime = 0;
    }

    setProgress(0);
    setIndex(i);
    setIsPlaying(true);
    <i class="ri-play-circle-line"></i>;
  };

  return (
    <>
      <section className="relative flex flex-col items-center justify-center w-full h-screen  overflow-hidden">
        <div className="w-full flex flex-row items-center justify-between px-8 mb-6">
          <h1 className="text-6xl font-semibold">Get the highlights.</h1>

          <button
            className="text-blue-500 cursor-pointer underline-offset-1 flex flex-row"
            onClick={() => {
              setEtat(!etat);
              setIsPlaying(false);
            }}
          >
            <p className="underline underline-offset-1 ">Watch the film</p>
            <i className="ri-play-circle-line"></i>
          </button>
        </div>
        {/* Trailer Zone */}
        <motion.div
          className="absolute w-full h-full top-0 left-0 bg-black z-10 flex flex-col items-center justify-start"
          animate={{ translateX: etat ? "0%" : "100%" }}
          transition={{ duration: 0.8, ease: easeInOut }}
        >
          <div className="w-full flex flex-row justify-end-safe p-3 mb-16">
            <button
              className="text-3xl bg-gray-700 px-1 rounded-3xl cursor-pointer "
              onClick={() => {
                setEtat(!etat);
                setIsPlaying(true);
              }}
            >
              <i class="ri-close-fill "></i>
            </button>
          </div>
          <div className="">
            <video
              src={trailer}
              width="600"
              height="480"
              controls
              autoPlay
              muted
              playsInline
            ></video>
          </div>
        </motion.div>

        <div className="relative overflow-hidden w-8/10 h-8/10 rounded-2xl">
          <motion.div
            className="flex"
            animate={{ x: `-${index * 100}%` }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {videos.map((item, i) => (
              <div className="relative w-full h-full shrink-0" key={i}>
                {/* Video */}
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={item.video}
                  muted
                  playsInline
                  preload="auto"
                  className="w-full shrink-0"
                  onTimeUpdate={() => handleTimeUpdate(i)}
                  onEnded={handleEnded}
                />
                {/* Text Overlay */}
                <motion.div
                  className="absolute top-5 left-[8%] max-w-xl text-white text-3xl font-semibold"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: i === index ? 1 : 0,
                    y: i === index ? 0 : 30,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <p className="font-medium leading-snug">{item.text}</p>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Controls */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 px-4 py-2 bg-black/40 backdrop-blur-md rounded-3xl">
            {/* Dots */}
            <div className="flex gap-2">
              {videos.map((_, i) => {
                const isActive = i === index;
                const isPast = i < index;

                return (
                  <motion.button
                    key={i}
                    onClick={() => jumpTo(i)}
                    className="h-3 rounded-full overflow-hidden bg-white/30 cursor-pointer focus:outline-none focus-visible:ring-2 ring-white/40"
                    animate={{
                      width: isActive ? ACTIVE_DOT : DOT,
                    }}
                    transition={{
                      width: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                    }}
                  >
                    <motion.div
                      className="h-full bg-white"
                      animate={{
                        scaleX: isPast ? 1 : isActive ? progress : 0,
                      }}
                      style={{ transformOrigin: "left" }}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Play / Pause */}
            <button
              onClick={() => setIsPlaying((p) => !p)}
              className="text-white text-2xl"
            >
              <p>
                {isPlaying ? (
                  <i class="ri-pause-mini-line"></i>
                ) : (
                  <i class="ri-play-fill"></i>
                )}
              </p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
