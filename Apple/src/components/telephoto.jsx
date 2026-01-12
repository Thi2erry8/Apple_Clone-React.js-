import React from "react";
import { useState } from "react";
import pic1 from "../assets/images/200mm.jpg";
import pic2 from "../assets/images/100mm.jpg";
import pic3 from "../assets/images/48mm.jpg";
import pic5 from "../assets/images/35mm.jpg";
import pic6 from "../assets/images/24mm.jpg";
import pic7 from "../assets/images/13mm.jpg";

export default function Telephoto() {
  return (
    <>
      <section className="w-full h-screen">
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
        </div>
      </section>
    </>
  );
}
