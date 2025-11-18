import React from "react";
import bg from "@/public/images/signUpBg.png";
import Image from "next/image";

export default function AuthAsideBg() {
  return (
    <div className="h-full relative hidden md:block">
      {/* Background image */}
      <Image src={bg} alt="background" fill priority className="object-cover" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#192BC2] to-[#0C145C]/98" />
    </div>
  );
}
