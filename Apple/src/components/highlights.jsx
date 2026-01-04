import { useEffect, useRef, useState } from "react";
import video1 from "../assets/videos/highlight1.mp4";
import video2 from "../assets/videos/highlight2.mp4";
import video3 from "../assets/videos/highlight3.mp4";
import video4 from "../assets/videos/highlight4.mp4";
import { motion } from "framer-motion";

const videos = [video1, video2, video3, video4];

export default function Highlights() {
  const videoRefs = useRef([]);
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

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

  return (
    <>
      <section className="relative w-full overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {videos.map((src, i) => (
            <video
              key={i}
              ref={(el) => (videoRefs.current[i] = el)}
              src={src}
              muted
              playsInline
              className="w-full shrink-0"
              onTimeUpdate={() => handleTimeUpdate(i)}
              onEnded={handleEnded}
            />
          ))}
        </motion.div>

        {/* Controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6">
          {/* Dots */}
          <div className="flex gap-2">
            {videos.map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gray-500 rounded-full overflow-hidden"
              >
                <motion.div
                  className="h-full bg-white"
                  animate={{
                    scaleX: i < index ? 1 : i === index ? progress : 0,
                    width: 10,
                  }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            ))}
          </div>

          {/* Play / Pause */}
          <button
            onClick={() => setIsPlaying((p) => !p)}
            className="text-white text-lg"
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>
        </div>
      </section>
    </>
  );
}
