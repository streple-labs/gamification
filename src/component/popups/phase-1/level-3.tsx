"use client";

import { anton, baloo } from "@/app/fonts";
import { useAuth } from "@/context/auth-context";
import { useBackgroundMusic } from "@/context/bg-music-context";
import useSoundEffects from "@/hooks/useSoundEffects";
import { updateUserGameData } from "@/utils/action";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { PiThumbsDown, PiThumbsUp } from "react-icons/pi";
import { toast } from "sonner";
import RayOfLight from "../../icons/ray-of-light";
import VideoWrapper from "../../icons/video-wrapper";
import Banner from "../../ui/banner";
import Modal from "../../ui/modal";

type Stages = "lesson" | "test" | "awards";

export default function Phase1Level3({
  isOpen,
  closeCourse,
}: {
  isOpen: boolean;
  closeCourse: () => void;
}) {
  const { playSound } = useSoundEffects();

  const { setUser, user } = useAuth();

  const [stage, setStage] = useState<Stages>("lesson");

  const close = useCallback(() => {
    setStage("lesson");
    closeCourse();
  }, [closeCourse]);

  const [courseStartTime, setCourseStartTime] = useState<number>(0);

  const { mutate: handleCompletePhase1Level3 } = useMutation({
    mutationKey: ["phase-1-level-3-complete"],
    mutationFn: async () => {
      if (user.game_data.phase >= 2) {
        close();
        return {
          success: false,
          message:
            "Great job refreshing your knowledge! You've already completed this lesson.",
        };
      } else
        return await updateUserGameData({
          phase: "Phase 2",
          level: "Level 1",
          score: 250,
        });
    },
    onSuccess: (res) => {
      if (res.success) {
        toast.success("Phase 1 level 3 completed");
        if (user.user_data)
          setUser({
            ...user,
            user_data: { ...user.user_data },
            game_data: {
              level: Math.max(user.game_data.level, 2),
              phase:
                user.game_data.level === 2
                  ? Math.max(user.game_data.phase, 1)
                  : 1,
              totalScore: user.game_data.totalScore + 250,
              hasAnswer: true,
            },
          });
        close();
      } else toast.error(res.message);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      console.error(error);
      toast.error("An unexpected error occurred. Please try again.");
    },
  });
  const returnStageComponent = useMemo(() => {
    if (stage === "lesson")
      return (
        <CryptoLesson
          setCourseStartTime={setCourseStartTime}
          close={close}
          setStage={setStage}
        />
      );
    if (stage === "test")
      return (
        <CryptoTest
          review={() => {
            playSound("lesson");
            setStage("lesson");
          }}
          next={() => {
            playSound("reward");
            setStage("awards");
          }}
          close={close}
        />
      );
    if (stage === "awards")
      return (
        <Completed
          courseStartTime={courseStartTime}
          close={() => {
            playSound("level_complete");
            handleCompletePhase1Level3();
          }}
        />
      );
  }, [stage, close, courseStartTime, handleCompletePhase1Level3, playSound]);

  return (
    <Modal isOpen={isOpen} onClose={close}>
      {returnStageComponent}
    </Modal>
  );
}

function CryptoLesson({
  setStage,
  close,
  setCourseStartTime,
}: {
  setStage: (stage: Stages) => void;
  close: () => void;
  setCourseStartTime: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { playSound } = useSoundEffects();

  const [step, setStep] = useState<"intro" | "course">("intro");

  useEffect(() => {
    setCourseStartTime(Date.now());
  }, [setCourseStartTime]);

  return (
    <div className="w-screen h-screen relative bg-[#141314] overflow-y-auto hide-scrollbar">
      {step === "intro" && (
        <div className="size-full flex flex-col justify-center items-center gap-6 relative">
          <div className="flex items-center">
            <Image src={"/mascot-4.png"} alt="" width={231} height={194} />
            <p className="-ml-16 text-2xl leading-8 tracking-[1px] font-semibold">
              Now let&apos;s start with your first lesson
            </p>
          </div>

          <button
            onClick={() => {
              playSound("lesson");
              setStep("course");
            }}
            className="text-[#181812B2] text-base font-bold flex items-center justify-center shadow-[inset_4px_3px_2px_0px_#EDEBB680] border border-[#ACA40F80] bg-[#BDB510] rounded-[10px] h-[60px] w-[191px]"
          >
            Begin
          </button>
        </div>
      )}

      {step === "course" && (
        <CryptoCourse
          next={() => {
            playSound("lesson");
            setStage("test");
          }}
          close={close}
        />
      )}
    </div>
  );
}

function CryptoCourse({
  next,
  close,
}: {
  next: () => void;
  close: () => void;
}) {
  const { playSound } = useSoundEffects();

  const { pause } = useBackgroundMusic();

  const [courseStage, setCourseStage] = useState<"welcome" | "course">(
    "welcome"
  );

  useEffect(() => {
    if (courseStage === "welcome") pause();

    return () => {};
  }, [courseStage, pause]);

  return (
    <div className="size-full flex flex-col relative pt-20">
      {courseStage === "welcome" && (
        <span
          className="absolute top-30 left-40 cursor-pointer"
          onClick={close}
        >
          <svg
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.037 22.865C25.1532 22.9812 25.2453 23.119 25.3081 23.2708C25.371 23.4225 25.4033 23.5851 25.4033 23.7494C25.4033 23.9136 25.371 24.0762 25.3081 24.228C25.2453 24.3797 25.1532 24.5176 25.037 24.6337C24.9209 24.7498 24.783 24.8419 24.6313 24.9048C24.4796 24.9676 24.3169 25 24.1527 25C23.9885 25 23.8258 24.9676 23.6741 24.9048C23.5224 24.8419 23.3845 24.7498 23.2684 24.6337L12.9033 14.2671L2.53827 24.6337C2.30373 24.8682 1.98563 25 1.65395 25C1.32226 25 1.00416 24.8682 0.76962 24.6337C0.535082 24.3992 0.40332 24.0811 0.40332 23.7494C0.40332 23.4177 0.535082 23.0996 0.76962 22.865L11.1362 12.5L0.76962 2.13495C0.535082 1.90041 0.40332 1.58231 0.40332 1.25063C0.40332 0.918939 0.535082 0.600837 0.76962 0.3663C1.00416 0.131762 1.32226 0 1.65395 0C1.98563 0 2.30373 0.131762 2.53827 0.3663L12.9033 10.7329L23.2684 0.3663C23.5029 0.131762 23.821 -6.53833e-09 24.1527 0C24.4844 6.53833e-09 24.8025 0.131762 25.037 0.3663C25.2716 0.600837 25.4033 0.918939 25.4033 1.25063C25.4033 1.58231 25.2716 1.90041 25.037 2.13495L14.6704 12.5L25.037 22.865Z"
              fill="white"
              fillOpacity="0.7"
            />
          </svg>
        </span>
      )}

      {courseStage === "welcome" && (
        <div className="flex flex-col w-full items-center gap-10">
          <div className="flex flex-col items-center gap-5">
            <Banner label="PHASE 1 : CALL TO DISCOVERY" />
            <h1
              className={`${anton.className} text-2xl text-[#efe73c] drop-shadow-sm drop-shadow-[#49460D]`}
            >
              WHAT IS CRYPTO?
            </h1>
          </div>

          <div className="space-y-6">
            <p className="text-base/8 tracking-[1px] font-semibold drop-shadow-sm drop-shadow-[#A082F966]">
              Many have heard of Bitcoin, few understand it. Your journey starts
              here, from the dusty roads to digital gold
            </p>

            <div className="flex">
              <Image
                src={"/mascot-4.png"}
                alt=""
                width={259}
                height={195}
                className="-ml-30 h-[195px] size-auto"
              />
              <div className="space-y-4 mt-6">
                <p className="text-base/8 tracking-[1px] font-semibold drop-shadow-sm drop-shadow-[#A082F966]">
                  In this lesson, you will learn :
                </p>
                <div className="flex items-center gap-4">
                  <svg
                    width="19"
                    height="11"
                    viewBox="0 0 19 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.18359 10.2642V1.58252L16.9854 6.45459L1.18359 10.2642Z"
                      fill="#F4E90E"
                      stroke="#605F44"
                    />
                  </svg>

                  <p className="text-[14px]/8 tracking-[1px] font-semibold text-white/80">
                    What is Crypto
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <svg
                    width="19"
                    height="11"
                    viewBox="0 0 19 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.18359 10.2642V1.58252L16.9854 6.45459L1.18359 10.2642Z"
                      fill="#F4E90E"
                      stroke="#605F44"
                    />
                  </svg>

                  <p className="text-[14px]/8 tracking-[1px] font-semibold text-white/80">
                    Understanding wallets
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <svg
                    width="19"
                    height="11"
                    viewBox="0 0 19 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.18359 10.2642V1.58252L16.9854 6.45459L1.18359 10.2642Z"
                      fill="#F4E90E"
                      stroke="#605F44"
                    />
                  </svg>

                  <p className="text-[14px]/8 tracking-[1px] font-semibold text-white/80">
                    Crypto in the market
                  </p>
                </div>
                <div className="pt-6 flex items-center gap-[52px] text-white/80">
                  <p
                    className={`${baloo.className} text-2xl/8 text-[#A082F9] tracking-[1px] font-normal`}
                  >
                    500 STP REWARD
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              playSound("lesson");
              setCourseStage("course");
            }}
            className="text-[#181812B2] text-base font-bold flex items-center justify-center shadow-[inset_4px_3px_2px_0px_#EDEBB680] border border-[#ACA40F80] bg-[#BDB510] rounded-[10px] h-[60px] w-[191px]"
          >
            Begin
          </button>
        </div>
      )}

      {courseStage === "course" && (
        <>
          <div className="flex items-center justify-center gap-10 w-full max-w-5xl mx-auto">
            <span onClick={close} className="cursor-pointer">
              <svg
                width="26"
                height="25"
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.037 22.865C25.1532 22.9812 25.2453 23.119 25.3081 23.2708C25.371 23.4225 25.4033 23.5851 25.4033 23.7494C25.4033 23.9136 25.371 24.0762 25.3081 24.228C25.2453 24.3797 25.1532 24.5176 25.037 24.6337C24.9209 24.7498 24.783 24.8419 24.6313 24.9048C24.4796 24.9676 24.3169 25 24.1527 25C23.9885 25 23.8258 24.9676 23.6741 24.9048C23.5224 24.8419 23.3845 24.7498 23.2684 24.6337L12.9033 14.2671L2.53827 24.6337C2.30373 24.8682 1.98563 25 1.65395 25C1.32226 25 1.00416 24.8682 0.76962 24.6337C0.535082 24.3992 0.40332 24.0811 0.40332 23.7494C0.40332 23.4177 0.535082 23.0996 0.76962 22.865L11.1362 12.5L0.76962 2.13495C0.535082 1.90041 0.40332 1.58231 0.40332 1.25063C0.40332 0.918939 0.535082 0.600837 0.76962 0.3663C1.00416 0.131762 1.32226 0 1.65395 0C1.98563 0 2.30373 0.131762 2.53827 0.3663L12.9033 10.7329L23.2684 0.3663C23.5029 0.131762 23.821 -6.53833e-09 24.1527 0C24.4844 6.53833e-09 24.8025 0.131762 25.037 0.3663C25.2716 0.600837 25.4033 0.918939 25.4033 1.25063C25.4033 1.58231 25.2716 1.90041 25.037 2.13495L14.6704 12.5L25.037 22.865Z"
                  fill="white"
                  fillOpacity="0.7"
                />
              </svg>
            </span>

            <div className="w-full h-[36px] bg-[#F9F8F9] rounded-[46px]">
              <div
                className="h-[38px] bg-[#503C8B] rounded-full flex items-center -my-px"
                style={{
                  width: `40%`,
                }}
              >
                <div className="h-2.5 w-full mx-7 rounded-full bg-blend-overlay bg-gradient-to-br from-white/45 from-[30.58%] to-[#fbfafd22] to-[70.32%]" />
              </div>
            </div>

            <div className="flex items-center shrink-0 gap-3">
              <Image
                src={"/coin-learn.png"}
                alt="coin"
                width={35}
                height={35}
              />
              <p className="text-2xl/6 font-semibold text-white/80">+500 STP</p>
            </div>
          </div>

          <div className="flex flex-col items-end w-full max-w-5xl mx-auto">
            <div className="relative flex items-center justify-center w-full aspect-video">
              <VideoWrapper className="absolute size-full" />

              <video
                className="size-[80%] object-cover relative rounded-2xl"
                controls
                autoPlay
                playsInline
                preload="metadata"
              >
                <source src="/gamification-lessons/P1L3.mp4" type="video/mp4" />
              </video>
            </div>

            <button
              onClick={next}
              className="text-[#181812B2] relative text-base font-bold flex items-center justify-center shadow-[inset_4px_3px_2px_0px_#EDEBB680] border border-[#ACA40F80] bg-[#BDB510] rounded-[10px] h-[60px] w-[191px]"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function CryptoTest({
  review,
  next,
  close,
}: {
  next: () => void;
  review: () => void;
  close: () => void;
}) {
  const { playSound } = useSoundEffects();

  const { play } = useBackgroundMusic();

  const [courseStage, setCourseStage] = useState(5);
  const [timer, setTimer] = useState(40);

  useEffect(() => {
    play();
  }, [play]);

  useEffect(() => {
    setTimer(40);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev > 0) return prev - 1;
        else setQuizResults((prev) => ({ ...prev, [courseStage]: false }));
        clearInterval(interval);
        return 0;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [courseStage]);

  const [quizForm, setQuizForm] = useState<Record<number, number | null>>({
    6: null,
    7: null,
    8: null,
    9: null,
  });
  const [quizResults, setQuizResults] = useState<
    Record<number, boolean | null>
  >({
    6: null,
    7: null,
    8: null,
    9: null,
  });

  const quizFormQuestions: Record<
    number,
    { question: string; options: string[]; answer: number }
  > = {
    6: {
      question: "What is blockchain?",
      options: [
        "A messaging app for traders",
        "A public ledger that records transactions",
        "A type of hardware wallet",
      ],
      answer: 1,
    },
    7: {
      question: "Which of these is a stablecoin?",
      options: ["USDT", "BTC", "ETH"],
      answer: 0,
    },
    8: {
      question: "Which of the following is not a cryptocurrency?",
      options: ["Solana", "Ethereum", "Paypal"],
      answer: 2,
    },
    9: {
      question: "The smallest unit of Bitcoin is called a ______.",
      options: ["Satoshi", "Bitlet", "Byte"],
      answer: 0,
    },
  };
  const quizFormAnswersDescription: Record<number, string> = {
    6: "Blockchain is a decentralized digital ledger that securely records transactions across many computers in a way that ensures the records cannot be altered retroactively. Think of it like a public notebook where every transaction is permanently written down and visible to everyone in the network.",
    7: "USDT is a stablecoin because it's tied to the value of a real-world currency like the US dollar, so its price stays stable. Coins like ETH, BTC, and DOGE go up and down in price a lot.",
    8: "PayPal is a digital payment platform, not a cryptocurrency. The others—Ethereum, Solana, and Binance Coin—are actual crypto assets built on blockchain networks.",
    9: "A Satoshi is the tiniest unit of Bitcoin, named after its creator, Satoshi Nakamoto. 100 million satoshis make up 1 full Bitcoin.",
  };

  return (
    <div className="w-screen h-screen relative bg-[#141314] overflow-y-auto hide-scrollbar">
      <div className="size-full flex flex-col gap-16 relative pt-20">
        <div className="flex items-center justify-center gap-10 w-full max-w-5xl mx-auto">
          <span className="cursor-pointer" onClick={close}>
            <svg
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.037 22.865C25.1532 22.9812 25.2453 23.119 25.3081 23.2708C25.371 23.4225 25.4033 23.5851 25.4033 23.7494C25.4033 23.9136 25.371 24.0762 25.3081 24.228C25.2453 24.3797 25.1532 24.5176 25.037 24.6337C24.9209 24.7498 24.783 24.8419 24.6313 24.9048C24.4796 24.9676 24.3169 25 24.1527 25C23.9885 25 23.8258 24.9676 23.6741 24.9048C23.5224 24.8419 23.3845 24.7498 23.2684 24.6337L12.9033 14.2671L2.53827 24.6337C2.30373 24.8682 1.98563 25 1.65395 25C1.32226 25 1.00416 24.8682 0.76962 24.6337C0.535082 24.3992 0.40332 24.0811 0.40332 23.7494C0.40332 23.4177 0.535082 23.0996 0.76962 22.865L11.1362 12.5L0.76962 2.13495C0.535082 1.90041 0.40332 1.58231 0.40332 1.25063C0.40332 0.918939 0.535082 0.600837 0.76962 0.3663C1.00416 0.131762 1.32226 0 1.65395 0C1.98563 0 2.30373 0.131762 2.53827 0.3663L12.9033 10.7329L23.2684 0.3663C23.5029 0.131762 23.821 -6.53833e-09 24.1527 0C24.4844 6.53833e-09 24.8025 0.131762 25.037 0.3663C25.2716 0.600837 25.4033 0.918939 25.4033 1.25063C25.4033 1.58231 25.2716 1.90041 25.037 2.13495L14.6704 12.5L25.037 22.865Z"
                fill="white"
                fillOpacity="0.7"
              />
            </svg>
          </span>

          <div className="w-full h-[36px] bg-[#F9F8F9] rounded-[46px]">
            <div
              className="h-[38px] bg-[#503C8B] rounded-full flex items-center -my-px"
              style={{
                width: `${(courseStage / 9) * 100}%`,
              }}
            >
              <div className="h-2.5 w-full mx-7 rounded-full bg-blend-overlay bg-gradient-to-br from-white/45 from-[30.58%] to-[#fbfafd22] to-[70.32%]" />
            </div>
          </div>

          <div className="flex items-center shrink-0 gap-3">
            <Image src={"/coin-learn.png"} alt="coin" width={35} height={35} />
            <p className="text-2xl/6 font-semibold text-white/80">+500 STP</p>
          </div>
        </div>

        {courseStage === 5 && (
          <div className="size-full flex flex-col justify-center items-center gap-40 relative">
            <div className="flex items-center">
              <Image src={"/mascot-4.png"} alt="" width={231} height={194} />
              <p className="-ml-16 text-2xl leading-8 tracking-[1px] font-semibold">
                Now let&apos;s answer some questions
              </p>
            </div>

            <div className="w-full flex items-center justify-between max-w-4xl">
              <button
                onClick={review}
                className={`text-[#B7B7AF] text-base font-bold flex items-center justify-center border-[2px] border-[#B7B7AF80] rounded-[10px] h-[60px] w-[191px]`}
              >
                Review
              </button>

              <button
                onClick={() => {
                  playSound("lesson");
                  setCourseStage((prev) => prev + 1);
                }}
                className="text-[#181812B2] text-base font-bold flex items-center justify-center shadow-[inset_4px_3px_2px_0px_#EDEBB680] border border-[#ACA40F80] bg-[#BDB510] rounded-[10px] h-[60px] w-[191px]"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {courseStage >= 6 && (
          <div className="size-full flex flex-col items-center">
            <div className="max-w-4xl flex gap-3 w-full">
              <Image
                src={"/mascot-4.png"}
                alt=""
                width={100}
                height={83}
                className="w-[100px] h-[83px]"
              />
              <div className="flex flex-col gap-10 w-full">
                <h4 className="text-2xl leading-[150%] tracking-[2px] font-semibold">
                  {quizFormQuestions[courseStage].question}
                </h4>
                <div className="space-y-8 w-full">
                  {quizFormQuestions[courseStage].options.map((option, i) => (
                    <button
                      key={i}
                      className={`w-full rounded-3xl border-[5px] ${
                        quizForm[courseStage] === i &&
                        quizResults[courseStage] === true
                          ? "border-[#009632B2] shadow-[0px_5px_0px_0px_#00963299] bg-[#0096321A]"
                          : quizForm[courseStage] === i &&
                            quizResults[courseStage] === false
                          ? "bg-[#F982821A] border-[#F98282B2] shadow-[0px_5px_0px_0px_#F9828299]"
                          : "border-[#5E5C6680] shadow-[0px_5px_0px_0px_#473E3E40]"
                      } text-white/50 font-base leading-[150%] tracking-[2px] h-[81px] py-4 px-6 flex items-center gap-4 disabled:opacity-100!`}
                      onClick={() => {
                        setQuizForm((prev) => ({
                          ...prev,
                          [courseStage]: i,
                        }));
                        setQuizResults((prev) => ({
                          ...prev,
                          [courseStage]:
                            i === quizFormQuestions[courseStage].answer,
                        }));
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto w-full bg-[#1F1E22] py-10">
              <div className="w-full max-w-4xl flex flex-col gap-4 mx-auto">
                <div className="w-full flex justify-between items-center">
                  <button
                    className={`${
                      quizResults[courseStage] === true
                        ? "text-[#009632] border-[#009632]"
                        : quizResults[courseStage] === false
                        ? "text-[#F98282] border-[#F98282]"
                        : "text-[#B7B7AF] border-[#B7B7AF80]"
                    } text-base font-bold flex items-center justify-center gap-2.5 cursor-pointer border-[2px] rounded-[10px] h-[60px] w-[191px]`}
                  >
                    {quizResults[courseStage] === true && (
                      <PiThumbsUp color="#06C330" width={21} />
                    )}
                    {quizResults[courseStage] === false && (
                      <PiThumbsDown color="#F98282" width={21} />
                    )}
                    {quizResults[courseStage] !== null
                      ? `${quizResults[courseStage] ? "Correct" : "Incorrect"}`
                      : `00:${timer}`}
                  </button>

                  <button
                    onClick={() => {
                      if (courseStage === 9) next();
                      else setCourseStage((prev) => prev + 1);
                    }}
                    disabled={quizResults[courseStage] !== true}
                    className={`${
                      quizResults[courseStage] === true
                        ? "text-[#181812B2] bg-[#009632]"
                        : quizResults[courseStage] === false
                        ? "text-[#000000B2] bg-[#F98282]"
                        : "text-[#F1F0DFB2] bg-[#414139]"
                    } text-base font-bold flex items-center justify-center rounded-[10px] h-[60px] w-[191px]`}
                  >
                    Next
                  </button>
                </div>
                {quizResults[courseStage] !== null && (
                  <p>{quizFormAnswersDescription[courseStage]}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Completed({
  close,
  courseStartTime,
}: {
  close: () => void;
  courseStartTime: number;
}) {
  const { playSound } = useSoundEffects();

  const [step, setStep] = useState(1);
  const next = () => {
    if (step == 3) close();
    else {
      playSound("lesson");
      setStep((prev) => prev + 1);
    }
  };

  const elapsedTime = useMemo(() => {
    if (!courseStartTime) return "0:00";
    const elapsedMs = Date.now() - courseStartTime;
    const minutes = Math.floor(elapsedMs / (1000 * 60));
    const seconds = Math.floor((elapsedMs % (1000 * 60)) / 1000);

    if (minutes === 0) return `${seconds}s`;
    else return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }, [courseStartTime]);

  const lists = useMemo(
    () => [
      "Brilliant work, Crypto Hero!",
      "You’re a village guardian, Crypto Hero!",
      "You’re a market star, Crypto Hero!",
      "You’re a quick learner, Crypto Hero!",
      "Your crypto journey is becoming real, Keep going!",
      "You are getting closer to becoming a Copy commander",
    ],
    []
  );
  const [word, setWord] = useState("Brilliant work, Crypto Hero!");
  useEffect(() => {
    const interval = setInterval(() => {
      setWord((prevWord) => {
        const currentIndex = lists.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % lists.length;
        return lists[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [lists]);

  const [showBadge, setShowBadge] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowBadge(true);
    }, 5000);
  }, []);

  return (
    <div className="w-screen h-screen relative bg-[#141314] overflow-y-auto hide-scrollbar">
      <Image
        src={"/spotlight.png"}
        alt="spotlight"
        width={640}
        height={385.13}
        className="absolute left-1/2 -translate-x-1/2 size-auto"
      />

      {showBadge && (
        <div className="fixed z-20 inset-0 flex items-center justify-center size-full">
          <div
            className="absolute inset-0 backdrop-blur-xl"
            onClick={() => {
              playSound("lesson");
              setShowBadge(false);
            }}
          />

          <div className="flex relative flex-col items-center gap-10">
            <h2 className={`${baloo.className} text-[42px]/[50px]`}>
              NEW BADGE UNLOCKED
            </h2>
            <div className="border border-[#c0bb4f] bg-[#19171d] backdrop-blur-3xl relative flex flex-col items-center justify-center rounded-[31px] w-[281px] h-[313px]">
              <p className={`${baloo.className} text-2xl/[35px]`}>
                CRYPTO INITIATE
              </p>
              <Image
                src={"/wooden-staff.png"}
                alt="wooden staff badge illustration"
                width={111}
                height={111}
                className="relative"
              />

              <Image
                src={"/eclipse-28.png"}
                alt=""
                width={100}
                height={100}
                className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      )}

      <div className="size-full flex flex-col items-center justify-center gap-20 relative">
        {step === 1 && (
          <div className="flex flex-col items-center">
            <Image src={"/mascot-5.png"} alt="" width={351} height={271} />
            <div className="gap-6 flex items-center justify-center flex-col">
              <h2 className="text-4xl font-bold text-[#EEE311] max-w-[550px] h-20 text-center">
                {word}
              </h2>
              <p className="-mt-4 text-base text-[#939389]">
                You are 30% closer to unlocking your Crypto Initiate badge
              </p>

              <div className="flex gap-9">
                <div className="bg-[#24222A99] rounded-[10px] py-5 px-7 flex items-center flex-col justify-center gap-2">
                  <Image src={"/target.png"} alt="" width={50} height={50} />
                  <p className="text-base leading-8 tracking-[1px] text-white/80">
                    30 %
                  </p>
                </div>
                <div className="bg-[#24222A99] rounded-[10px] py-5 px-7 flex items-center flex-col justify-center gap-2">
                  <Image
                    src={"/time-streak.png"}
                    alt=""
                    width={50}
                    height={50}
                  />
                  <p className="text-base leading-8 tracking-[1px] text-white/80">
                    {elapsedTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex items-center justify-center flex-col gap-20">
            <h2 className="text-4xl font-bold text-[#EEE311]">
              2 daily quests completed
            </h2>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <Image src={"/book.png"} alt="book" width={50} height={50} />
                <div className="py-[32px] px-10 rounded-[15px] border border-white/70 relative overflow-hidden">
                  <span className="absolute left-0 top-0">
                    <Image
                      src={"/blur-eclipse.png"}
                      alt=""
                      width={211}
                      height={86}
                    />
                  </span>
                  <p className="font-extrabold text-xl text-white">
                    Complete one lesson in a day
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Image
                  src={"/lightling.png"}
                  alt="book"
                  width={50}
                  height={50}
                />
                <div className="py-[32px] px-10 rounded-[15px] border border-white/70 relative overflow-hidden">
                  <span className="absolute left-0 top-0">
                    <Image
                      src={"/blur-eclipse.png"}
                      alt=""
                      width={211}
                      height={86}
                    />
                  </span>
                  <p className="font-extrabold text-xl text-white">
                    Finish a quiz in under 3 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex items-center justify-center">
            <>
              <RayOfLight className="absolute h-[340px] left-1/2 -translate-x-1/2 -top-10 rotate-[130deg]" />
              <RayOfLight className="absolute h-[340px] left-2/5 -translate-x-2/5 -top-0 rotate-[80deg]" />
              <RayOfLight className="absolute h-[340px] left-[35%] -translate-x-[35%] top-52" />
              <RayOfLight className="absolute h-[340px] left-3/5 -translate-x-3/5 top-0 rotate-180" />
              <RayOfLight className="absolute h-[340px] left-1/2 -translate-x-1/2 top-64 -rotate-[55deg]" />
              <RayOfLight className="absolute h-[340px] left-[65%] -translate-x-[65%] top-44 -rotate-[120deg]" />
            </>

            <div className="flex items-center justify-center flex-col gap-6 mb-10 relative">
              <Image
                src={"/stp-coin.png"}
                alt="stp reward illustration"
                width={250}
                height={250}
                className="relative"
              />
              <p
                className={`${baloo.className} text-[#F4E90E] text-[36px] relative`}
              >
                +250 Coins
              </p>
            </div>
          </div>
        )}

        <div className="w-full flex items-center justify-between max-w-5xl">
          <button className="text-[#32322B] bg-[#F7F6F4] text-base font-bold flex items-center justify-center rounded-[10px] h-[60px] w-[191px]">
            Share
          </button>

          <button
            onClick={next}
            className="text-[#181812B2] text-base font-bold flex items-center justify-center shadow-[inset_4px_3px_2px_0px_#EDEBB680] border border-[#ACA40F80] bg-[#BDB510] rounded-[10px] h-[60px] w-[191px]"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
