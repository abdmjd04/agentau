"use client";
import Link from "next/link";
import Calendly from "../(components)/Calandy";


export default function Booking() {
  return (
    <div className=" p-4 bg-white h-screen">
      <div className=" fixed top-4 p-1 bg-white z-99">
        <Link href="/" className="flex items-center">
          <span className="text-[#ff3366] font-bold text-3xl mr-1">ai</span>
          <span className="text-black font-bold text-3xl">af</span>
        </Link>
      </div>
      <Calendly />
    </div>
  );
}
