'use client';

import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react';

export default function ShaderBackground() {
  return (
    <Shader
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 10,
        pointerEvents: 'none',
      }}
    >
      {/* Base swirl — soft flowing gradient between light bg and green tint */}
      <Swirl
        colorA="#FAFBFD"
        colorB="#ecfdf5"
        detail={1.7}
      />
      {/* ChromaFlow — liquid color motion with green accent on all directions */}
      <ChromaFlow
        baseColor="#FAFBFD"
        downColor="#0ebd9f"
        leftColor="#0ebd9f"
        rightColor="#0ebd9f"
        upColor="#0ebd9f"
        momentum={13}
        radius={3.5}
      />
      {/* FlutedGlass — ribbed glass refraction overlay */}
      <FlutedGlass
        aberration={0.61}
        angle={31}
        frequency={8}
        highlight={0.12}
        highlightSoftness={0}
        lightAngle={-90}
        refraction={4}
        shape="rounded"
        softness={1}
        speed={0.15}
      />
      {/* FilmGrain — subtle analog noise */}
      <FilmGrain strength={0.05} />
    </Shader>
  );
}
