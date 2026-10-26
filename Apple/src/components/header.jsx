import { useState } from "react";

export default function Header() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav((nav) => !nav);
    console.log(nav);
  }

  return (
    <>
      <header className="flex flex-row justify-between md:justify-between items-start gap-6 font-thin fixed w-screen pt-4 z-10 bg-neutral-950 ">
        <div className="ml-1">
          <i className="ri-apple-fill"></i>
        </div>
        <nav
          className={`absolute transform transition-transform duration-300 ease-in-out mt-6 md:static md:w-auto md:transform-none md:mt-0
          ${nav ? "translate-x-0 visible" : "translate-x-full invisible md:translate-x-0 md:visible"}`}
        >
          <ul className="flex flex-col w-screen justify-center items-center rounded-sm py-1 text-xs gap-6 bg-neutral-950  md:flex-row md:w-fit">
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>AirPods</li>
            <li>TV & Home</li>
            <li>Entertainment</li>
            <li>Accessories</li>
            <li>Support</li>
          </ul>
        </nav>
        <div className=" flex flex-row justify-center gap-6">
          <i className="ri-search-line"></i>
          <i className="ri-shopping-bag-line"></i>
          <i
            className={`cursor-pointer block md:hidden ${nav ? "ri-close-line" : "ri-menu-line"}`}
            onClick={handleNav}
          ></i>
        </div>
      </header>
    </>
  );
}
