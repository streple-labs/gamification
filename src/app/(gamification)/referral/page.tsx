import { baloo } from "@/app/fonts";
import Image from "next/image";
import mascot from "../../../../public/mascot-3.png";

export default function page() {
  return (
    <div className="space-y-10 w-full overflow-y-auto hide-scrollbar relative">
      <div className="h-[290px] rounded-3xl overflow-hidden relative flex justify-between pt-[38px] px-[52px]">
        <Image
          src="/learn-bg.jpg"
          alt="background"
          fill
          className="absolute size-full inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        />

        <div className="space-y-6 flex-1 relative max-w-[455px]">
          <h2
            className={`${baloo.className} text-4xl drop-shadow-[#25251A80] drop-shadow-[0px_4px_4px]`}
          >
            Earn <span className="text-[#BDB510]">5000STPs</span> by referring
            your friends!!!
          </h2>
          <p className="text-xs/6 tracking-[2px]">
            If you invite 5 friends today, you&apos;ll earn 50 STRP and unlock
            your first badge. Start earning more with referrals
          </p>
          <button className="text-[#181812CC] text-xs font-semibold flex items-center justify-center shadow-[inset_4px_3px_2px_0px_#EDEBB680] border border-[#ACA40F80] bg-[#BDB510] rounded-[10px] h-[34px] w-[128px]">
            Refer now
          </button>
        </div>

        <span className="absolute -right-12 bottom-0">
          <svg
            width="439"
            height="290"
            viewBox="0 0 439 290"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_3568_6395)">
              <ellipse cx="297" cy="192" rx="143" ry="114" fill="#C8A85C" />
            </g>
            <defs>
              <filter
                id="filter0_f_3568_6395"
                x="0.5"
                y="-75.5"
                width="593"
                height="535"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="76.75"
                  result="effect1_foregroundBlur_3568_6395"
                />
              </filter>
            </defs>
          </svg>
        </span>
        <div className="absolute right-0 bottom-0">
          <Image
            src={"/bag-of-coins.png"}
            alt="bag of coins"
            width={341}
            height={282}
            quality={100}
            className="size-auto"
          />
        </div>
      </div>

      <div className="space-y-4 w-full">
        <h6 className={`${baloo.className} text-2xl/10 tracking-[2px]`}>
          How it works
        </h6>

        <div className="p-2.5 space-y-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-[11px] bg-[#503C8B0D] flex flex-col gap-2.5">
              <Image
                src={"/paper-plane.png"}
                alt="paper place"
                width={24}
                height={24}
              />

              <h6 className={`${baloo.className} text-base`}>
                Share your code
              </h6>

              <p className="text-xs">Send your referral link to friends</p>
            </div>
            <div className="p-6 rounded-[11px] bg-[#503C8B0D] flex flex-col gap-2.5">
              <Image
                src={"/puzzle-piece.png"}
                alt="paper place"
                width={24}
                height={24}
              />

              <h6 className={`${baloo.className} text-base`}>
                They join & complete 1 milestone
              </h6>

              <p className="text-xs">Like taking their first crypto lesson</p>
            </div>
            <div className="p-6 rounded-[11px] bg-[#503C8B0D] flex flex-col gap-2.5">
              <Image
                src={"/referral-coin-illustration.png"}
                alt="paper place"
                width={24}
                height={24}
              />

              <h6 className={`${baloo.className} text-base`}>
                You both earn rewards
              </h6>

              <p className="text-xs">Win STR Points instantly.</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[45px] w-full">
            <div className="max-w-xs w-full space-y-3">
              <h6 className={`${baloo.className} text-white/60 text-base`}>
                Your referral code
              </h6>
              <div className="flex items-center justify-between w-full h-[51px] p-4 border border-[#A082F9] rounded-[10px] bg-[#FFFFFF0D]">
                <p className={`${baloo.className} text-xs`}>OL47JR0U123</p>
                <button
                  className={`${baloo.className} rounded-[20px] py-2 px-3 bg-[#A082F9] text-[#1B191C] text-xs`}
                >
                  COPY
                </button>
              </div>
            </div>
            <Image
              src={mascot}
              alt="welcome mascot"
              width={217}
              height={164}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
