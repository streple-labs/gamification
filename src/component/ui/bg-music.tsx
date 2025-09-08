"use client";

import { useBackgroundMusic } from "@/context/bg-music-context";

export default function BackgroundMusic() {
  const { audioRef } = useBackgroundMusic();

  return <audio ref={audioRef} src={"/sfx/bg-tune.mp3"} loop />;
}
