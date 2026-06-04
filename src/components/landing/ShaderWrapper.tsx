'use client';

import dynamic from "next/dynamic";
import Navbar from "./Navbar";

const ShaderBackground = dynamic(() => import("./ShaderBackground"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-br from-[#FAFBFD] via-[#ecfdf5]/40 to-[#FAFBFD]" />
  ),
});

export default function ShaderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-[#FAFBFD]">
      {/* Animated Shader Background Overlay — covers all children */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <ShaderBackground />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-gradient-to-b from-[#0ebd9f]/8 to-transparent rounded-full blur-[120px] pointer-events-none z-[11]" />

      {/* Navbar — fixed, inside the shader-covered area */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* Content — above the shader */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}
