"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type BackgroundMusicContextValue = {
  isPlaying: boolean;
  play: () => Promise<void>;
  pause: () => void;
  toggle: () => Promise<void>;
  audioRef: React.RefObject<HTMLAudioElement | null>;
};

const BackgroundMusicContext =
  createContext<BackgroundMusicContextValue | null>(null);

export function BackgroundMusicProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const play = useCallback(async () => {
    if (!audioRef.current) return;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
      try {
        localStorage.setItem("bgmPaused", "false");
      } catch {}
    } catch (e) {
      setIsPlaying(false);
      throw e;
    }
  }, []);

  const pause = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
    try {
      localStorage.setItem("bgmPaused", "true");
    } catch {}
  }, []);

  const toggle = useCallback(async () => {
    if (isPlaying) pause();
    else await play();
  }, [isPlaying, pause, play]);

  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("bgmPaused") : null;
    const shouldPlay = stored !== "true"; // default to play unless user paused

    const attemptPlay = () => {
      if (!shouldPlay) return; // user had paused previously
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            setIsPlaying(false);
            const onUserInteract = () => {
              if (audioRef.current) {
                audioRef.current
                  .play()
                  .then(() => {
                    setIsPlaying(true);
                  })
                  .catch(() => {
                    setIsPlaying(false);
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
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <BackgroundMusicContext.Provider
      value={{ isPlaying, play, pause, toggle, audioRef }}
    >
      {children}
    </BackgroundMusicContext.Provider>
  );
}

export function useBackgroundMusic() {
  const ctx = useContext(BackgroundMusicContext);
  if (!ctx)
    throw new Error(
      "useBackgroundMusic must be used within BackgroundMusicProvider"
    );
  return ctx;
}
