"use client";

import MissionChest from "@/component/popups/mission-chest";
import Phase1Level1 from "@/component/popups/phase-1/level-1";
import Phase1Level2 from "@/component/popups/phase-1/level-2";
import Phase1Level3 from "@/component/popups/phase-1/level-3";
import Phase2Level1 from "@/component/popups/phase-2/level-1";
import Banner from "@/component/ui/banner";
import { useAuth } from "@/context/auth-context";
import useSoundEffects from "@/hooks/useSoundEffects";
import Image from "next/image";
import { useMemo, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { baloo } from "../fonts";

export default function Gamification() {
  const { user } = useAuth();

  const { playSound } = useSoundEffects();

  const [showMissionChestModal, setShowMissionChestModal] = useState(false);

  const [showSelectedCourse, setShowSelectedCourse] = useState<null | string>(
    null
  );

  const UserCourses = useMemo(() => {
    if (showSelectedCourse === "Phase1Level1")
      return (
        <Phase1Level1
          isOpen={!!showSelectedCourse}
          closeCourse={() => {
            setShowSelectedCourse(null);
          }}
        />
      );
    if (showSelectedCourse === "Phase1Level2")
      return (
        <Phase1Level2
          isOpen={!!showSelectedCourse}
          closeCourse={() => {
            setShowSelectedCourse(null);
          }}
        />
      );
    if (showSelectedCourse === "Phase1Level3")
      return (
        <Phase1Level3
          isOpen={!!showSelectedCourse}
          closeCourse={() => {
            setShowSelectedCourse(null);
          }}
        />
      );

    if (showSelectedCourse === "Phase2Level1")
      return (
        <Phase2Level1
          isOpen={!!showSelectedCourse}
          closeCourse={() => {
            setShowSelectedCourse(null);
          }}
        />
      );
    // if (showSelectedCourse === "Phase2Level2")
    //   return (
    //     <Phase1Level3
    //       isOpen={!!showSelectedCourse}
    //       closeCourse={() => {
    //         setShowSelectedCourse(null);
    //       }}
    //     />
    //   );

    return null;
  }, [showSelectedCourse]);

  return (
    <>
      <MissionChest
        isOpen={showMissionChestModal}
        close={() => {
          setShowMissionChestModal(false);
        }}
      />

      {UserCourses}

      <div className="space-y-4 md:space-y-8 w-full">
        <Banner label="PHASE 1 : CALL TO DISCOVERY" />

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 [&>div]:bg-blend-luminosity [&>div]:active:scale-95">
          <div
            onClick={() => {
              playSound("lesson");
              if (user.game_data.phase >= 1 && user.game_data.level >= 0)
                setShowSelectedCourse("Phase1Level1");
            }}
            className={`bg-[#24222A99] min-h-[85px] rounded-[10px] p-4 md:py-[22px] md:px-6 flex items-center justify-between gap-4 ${
              user.game_data.phase >= 1 && user.game_data.level >= 0
                ? "cursor-pointer hover:border-4 hover:border-[#958F16]/50"
                : "grayscale-100 && cursor-not-allowed"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <Image
                src={"/what-is-crypto-illustration.png"}
                alt="what is crypto illustration"
                width={40}
                height={40}
                className="size-8 md:size-10"
              />

              <span className="inline-block text-xs/6 md:text-base/8 tracking-[1px] drop-shadow-xs drop-shadow-[#F4E90E80]">
                What is crypto?
              </span>
            </div>
            <span className="max-md:hidden">
              <FaChevronRight width={9} color="#958F16CC" />
            </span>
          </div>

          <div
            onClick={() => {
              playSound("lesson");

              if (user.game_data.phase >= 1 && user.game_data.level >= 0)
                setShowSelectedCourse("Phase1Level2");
            }}
            className={`bg-[#24222A99] min-h-[85px] rounded-[10px] p-4 md:py-[22px] md:px-6 flex items-center justify-between gap-4 ${
              user.game_data.phase >= 1 && user.game_data.level >= 1
                ? "cursor-pointer hover:border-4 hover:border-[#A082F980]"
                : "grayscale-100 && cursor-not-allowed"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <Image
                src={"/wallet.png"}
                alt="wallet illustration"
                width={40}
                height={40}
                className="size-8 md:size-10"
              />

              <span className="inline-block text-xs/6 md:text-base/8 tracking-[1px] drop-shadow-xs drop-shadow-[#A082F980]">
                Understanding wallets
              </span>
            </div>
            <span className="max-md:hidden">
              <FaChevronRight width={9} color="#B59EF9" />
            </span>
          </div>

          <div
            onClick={() => {
              playSound("lesson");

              if (user.game_data.phase >= 1 && user.game_data.level >= 0)
                setShowSelectedCourse("Phase1Level3");
            }}
            className={`bg-[#24222A99] max-md:col-span-2 min-h-[85px] rounded-[10px] p-4 md:py-[22px] md:px-6 flex items-center justify-between gap-4 ${
              user.game_data.phase >= 1 && user.game_data.level >= 2
                ? "cursor-pointer"
                : "grayscale-100 && cursor-not-allowed"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <Image
                src={"/bitcoin-wallet.png"}
                alt="bitcoin wallet illustration"
                width={40}
                height={40}
                className="size-8 md:size-10"
              />

              <span className="inline-block text-xs/6 md:text-base/8 tracking-[1px] drop-shadow-xs drop-shadow-[#F4E90E80]">
                Crypto in the market
              </span>
            </div>
            <span className="max-md:hidden">
              <FaChevronRight width={9} color="#B59EF9" />
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-4 md:space-y-8 w-full [&>div]:bg-blend-luminosity">
        <Banner
          label="PHASE 2 : WALK WITH THE WISE"
          disabled={user.game_data?.phase < 2}
        />

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 [&>div]:active:scale-95">
          <div
            onClick={() => {
              playSound("lesson");
              if (user.game_data.phase >= 2 && user.game_data.level >= 1)
                setShowSelectedCourse("Phase2Level1");
            }}
            className={`bg-[#24222A99] min-h-[85px] rounded-[10px] p-4 md:py-[22px] md:px-6 flex items-center justify-between gap-4 ${
              user.game_data.phase >= 2 && user.game_data.level >= 1
                ? "cursor-pointer"
                : "grayscale-100 && cursor-not-allowed"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <Image
                src={"/what-is-copy-trading.png"}
                alt="what is copy trading illustration"
                width={40}
                height={40}
                className="size-8 md:size-10"
              />

              <span className="inline-block text-xs/6 md:text-base/8 tracking-[1px] drop-shadow-xs drop-shadow-[#F4E90E80]">
                What is Copy-Trading
              </span>
            </div>
            <span className="max-md:hidden">
              <FaChevronRight width={9} color="#B59EF9" />
            </span>
          </div>

          <div
            onClick={() => {
              playSound("lesson");
            }}
            className={`bg-[#24222A99] min-h-[85px] rounded-[10px] p-4 md:py-[22px] md:px-6 flex items-center justify-between gap-4 ${
              user.game_data.phase >= 2 && user.game_data.level >= 2
                ? "cursor-pointer"
                : "grayscale-100 && cursor-not-allowed"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <Image
                src={"/choose-a-trader.png"}
                alt="choose a trader illustration"
                width={40}
                height={40}
                className="size-8 md:size-10"
              />

              <span className="inline-block text-xs/6 md:text-base/8 tracking-[1px] drop-shadow-xs drop-shadow-[#F4E90E80]">
                How to choose a trader
              </span>
            </div>
            <span className="max-md:hidden">
              <FaChevronRight width={9} color="#B59EF9" />
            </span>
          </div>

          <div
            onClick={() => {
              playSound("lesson");
            }}
            className={`bg-[#24222A99] min-h-[85px] rounded-[10px] p-4 md:py-[22px] md:px-6 flex items-center justify-between gap-4 ${
              user.game_data.phase >= 2 && user.game_data.level >= 3
                ? "cursor-pointer"
                : "grayscale-100 && cursor-not-allowed"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <Image
                src={"/why-trades-work.png"}
                alt="why trades work illustration"
                width={40}
                height={40}
                className="size-8 md:size-10"
              />

              <span className="inline-block text-xs md:text-base/8 tracking-[1px] drop-shadow-xs drop-shadow-[#F4E90E80]">
                Why Trades Work
              </span>
            </div>
            <span>
              <FaChevronRight width={9} color="#B59EF9" />
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 [&>div]:bg-blend-luminosity pt-4 [&>div]:active:scale-95">
        <div
          onClick={() => {
            playSound("modal");
            if (user.game_data.phase >= 3) setShowMissionChestModal(true);
          }}
          className={`bg-[#24222A99] ${
            baloo.className
          } min-h-[85px] rounded-[10px] py-[22px] px-6 flex items-center justify-between gap-4 shadow-[inset_9px_-9px_0px_0px_#A082F9] ${
            user.game_data.phase >= 3
              ? "cursor-pointer"
              : "grayscale-100 && cursor-not-allowed"
          }`}
        >
          <div className="flex items-center relative">
            <Image
              src={"/treasure-chest.png"}
              alt="treasure chest illustration"
              width={91.08}
              height={71.41}
              className="rotate-[6.47deg] absolute -top-4 -left-4"
            />

            <span className="inline-block ml-20 text-[#E4DCFD] text-xl/8 tracking-[1px] drop-shadow-[#F4E90E80] drop-shadow-[0px_4px_0px]">
              MISSION CHEST
            </span>
          </div>
          <span>
            <FaChevronRight width={9} color="#B59EF9" />
          </span>
        </div>
      </div>
    </>
  );
}
