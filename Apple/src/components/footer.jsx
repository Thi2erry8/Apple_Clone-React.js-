import React from "react";

export default function Footer() {
  return (
    <footer className="w-full h-[20vh] bg-black flex flex-col items-center justify-center pt-10">
      <hr className="w-8/10 h-0.5 bg-neutral-600" />
      <div className="text-sm text-neutral-500 flex flex-row items-center justify-between w-8/10">
        <div className="">
          <p>Copyright 2026 Apple Inc.All rights reserved.</p>
        </div>
        <div className="flex flex-row gap-3">
          <p>Privacy Policy</p>
          <p>Term of Use</p>
          <p>Sales Policy</p>
          <p>Legal</p>
          <p>Site Map</p>
        </div>
      </div>
    </footer>
  );
}
