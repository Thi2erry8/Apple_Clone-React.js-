export default function Header() {
  return (
    <>
      <header className="flex flex-row justify-center items-center gap-6 font-thin fixed w-full pt-4 z-10 bg-neutral-950">
        <div className="">
          <i className="ri-apple-fill"></i>
        </div>
        <nav className="">
          <ul className="flex text-xs gap-6">
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
        </div>
      </header>
    </>
  );
}
