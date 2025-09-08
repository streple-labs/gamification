"use client";

import { Toaster } from "sonner";
import QueryProvider from "./query-provider";
import { AuthProvider } from "../context/auth-context";
import { Next13ProgressBar } from "next13-progressbar";
import { BackgroundMusicProvider } from "../context/bg-music-context";
import BackgroundMusic from "../component/ui/bg-music";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Next13ProgressBar
        height="4px"
        color="#B39FF0"
        options={{ showSpinner: false }}
        showOnShallow={true}
      />
      <QueryProvider>
        <AuthProvider>
          <BackgroundMusicProvider>
            <Toaster position="bottom-right" />
            <BackgroundMusic />
            {children}
          </BackgroundMusicProvider>
        </AuthProvider>
      </QueryProvider>
    </>
  );
}
