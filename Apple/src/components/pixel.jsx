import React from "react";
import pic1 from "../assets/images/pixel_1.jpg";
import pic2 from "../assets/images/pixel_2.jpg";
import pic3 from "../assets/images/pixel_3.jpg";
import pic4 from "../assets/images/pixel_4.jpg";
import pic5 from "../assets/images/pixel_6.jpg";

const images = [
  {
    src: pic1,
    text_1: "Low-light photography and Night mode",
    text_2:
      "Capture sharp, detailed, bright images with natural colors, even when it’s dark.",
  },
  {
    src: pic2,
    text_1: "All 48MP rear cameras.",
    text_2:
      "Pro Fusion cameras capture more detailed images at every zoom range and light level.",
  },
  {
    src: pic3,
    text_1: "Ultra Wide camera.",
    text_2:
      "Capture powerful perspectives with mesmerizing macro photos and dramatic wide-angle shots.",
  },
  {
    src: pic4,
    text_1: "Ultra Wide camera .",
    text_2:
      "Capture powerful perspectives with mesmerizing macro photos and dramatic wide-angle shots.",
  },
  {
    src: pic5,
    text_1: "Clean Up.",
    text_2:
      " Remove unwanted objects, people, and background distractions from your photos.",
  },
];
export default function pixel() {
  return (
    <section className="h-screen w-full">
      {images.map((image) => (
        <div>
          <img src={image.src} alt="" />
          <p>
            {image.text_1} {image.text_2}
          </p>
        </div>
      ))}
    </section>
  );
}
