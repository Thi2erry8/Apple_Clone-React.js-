import Header from "../components/header";
import Hero from "../components/hero";
import Highlights from "../components/highlights";
import Design from "../components/design";
import Camera from "../components/camera";
import Telephoto from "../components/Telephoto";
import Pixel from "../components/pixel";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Highlights />
      <Design />
      <Camera />
      <Telephoto />
      <h1 className="text-4xl font-semibold bg-black pl-30 pb-4">
        Pro results down to the pixel.
      </h1>
      <Pixel />
    </>
  );
}
