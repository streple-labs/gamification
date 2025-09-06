"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const attemptPlay = () => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            console.log("Audio is playing successfully.");
          })
          .catch((error) => {
            console.error("Autoplay was prevented:", error);

            // alert("Tap anywhere to enable sound 🔊");
            const onUserInteract = () => {
              if (audioRef.current) {
                audioRef.current
                  .play()
                  .then(() => {
                    console.log("Audio started after user interaction.");
                  })
                  .catch((err) => {
                    console.error("Playback still failed:", err);
                  });
              }
            };
            document.addEventListener("click", onUserInteract, { once: true });
            document.addEventListener("touchstart", onUserInteract, {
              once: true,
            });
          });
      }
    };

    const timeoutId = setTimeout(attemptPlay, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return <audio ref={audioRef} src={"/sfx/bg-tune.mp3"} loop />;
}
