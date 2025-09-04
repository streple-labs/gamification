import React from "react";
import Modal from "../ui/modal";
import Link from "next/link";
import Banner from "../ui/banner";
import useSoundEffects from "@/hooks/useSoundEffects";
import Image from "next/image";
import mascot from "../../../public/mascot-3.png";

export default function MissionChest({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) {
  const { playSound } = useSoundEffects();

  return (
    <Modal isOpen={isOpen} onClose={close}>
      <div className="relative bg-[url('/learn-bg.jpg')] bg-cover bg-center bg-no-repeat w-5xl rounded-[29px] overflow-hidden min-h-[587px]">
        <div className="absolute inset-0 size-full bg-[#141314] opacity-95" />

        <div className="relative flex items-center justify-center flex-col gap-10 mt-10 w-fit mx-auto">
          <div className="flex items-center flex-col">
            <Image
              src={mascot}
              alt="welcome mascot"
              width={217}
              height={215}
              className="-mb-[60px]"
            />
            <Banner label="MISSION CHEST UNLOCKED" size="big" />
          </div>

          <div className="flex flex-col items-center justify-center gap-4 text-2xl leading-[150%] tracking-[2px] text-white/80">
            <p className="text-shadow-2xs text-shadow-[#8066CF80]">
              Now you learn by doing. Your copy trading journey starts now
            </p>
          </div>

          <div className="flex justify-center w-full">
            <Link href={"/trading-post"}>
              <button
                onClick={() => {
                  playSound("lesson");
                }}
                className="text-[#181812B2] text-base font-bold flex items-center justify-center shadow-[inset_4px_3px_2px_0px_#EDEBB680] border border-[#ACA40F80] bg-[#BDB510] rounded-[10px] h-[60px] w-[229px]"
              >
                Let&apos;s begin
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
}
