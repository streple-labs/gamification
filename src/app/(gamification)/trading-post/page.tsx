import { baloo } from "@/app/fonts";
import DarkYellowGlow from "@/assets/svg/dark-yellow-glow";
import GiantCoin from "@/assets/svg/giant-coin";
import {
  TradersCardGlowPurple,
  TradersCardGlowYellow,
} from "@/assets/svg/traders-card-glow";
import YellowBgGlow from "@/assets/svg/yellow-glow";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

export default function page() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <section className="flex flex-col gap-8 w-full">
        <h4
          className={`${baloo.className} font-normal text-2xl leading-10 tracking-[2px] text-white/70 drop-shadow-[0px_4px_4px] drop-shadow-[#847F1480]`}
        >
          Copy trading
        </h4>
        <div className="grid grid-cols-2 gap-6">
          <div className="border border-[#BDB5104D] rounded-[20px] backdrop-blur-xs bg-[#EEE3110D] h-[207px] pt-[30px] pl-4 relative overflow-hidden">
            <div className="space-y-6 max-w-[237px]">
              <p className="font-semibold text-base/6 tracking-[2px] bg-gradient-to-r from-white to-black/60 bg-clip-text text-transparent">
                Total balance
              </p>
              <h4
                className={`${baloo.className} text-[46px] leading-[45px] tracking-[2px] text-[#E0D610] font-normal`}
              >
                10,000<span className="text-xl">STP</span>
              </h4>
            </div>

            <span className="absolute right-0 bottom-0">
              <YellowBgGlow />
            </span>
            <span className="absolute right-0 bottom-0">
              <GiantCoin />
            </span>
            <span className="absolute right-0 top-[74px]">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 0L22.8616 13.1384L36 18L22.8616 22.8616L18 36L13.1384 22.8616L0 18L13.1384 13.1384L18 0Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
          <div className="border border-[#503C8B] rounded-[20px] backdrop-blur-xs bg-[#503C8B0D] h-[207px] pt-11 pl-4 relative overflow-hidden">
            <div className="space-y-3 max-w-[249px]">
              <p className="text-base/6 tracking-[2px] font-bold">
                Copy and earn x5 STP coins
              </p>

              <p className="text-sm/5 tracking-[1px]">
                Boost your rewards by copying top traders. Every win multiplies
                your STP stash
              </p>
            </div>

            <span className="absolute right-0 bottom-0">
              <DarkYellowGlow />
            </span>
            <div className="absolute right-0 bottom-0">
              <Image
                src={"/bag-of-coins.png"}
                alt="bag of coins"
                width={239}
                height={198}
                className="size-auto"
              />
            </div>
          </div>
        </div>
        <Link href={"#"} className="flex items-center gap-4">
          <p className="font-bold text-base/6 tracking-[2px] bg-gradient-to-r from-[#F4E90E] to-[#F4E90E]/60 bg-clip-text text-transparent">
            My Copy tradings
          </p>
          <FaArrowRight width={15} color="#F4E90E" />
        </Link>
      </section>
      <section className="flex flex-col gap-8 w-full">
        <div className="flex items-center justify-between">
          <h4
            className={`${baloo.className} font-normal text-2xl leading-10 tracking-[2px] text-white/70`}
          >
            All Traders
          </h4>

          <div className="w-[290px] rounded-full border border-white/10 h-[43px] py-3 px-4 flex items-center gap-3">
            <IoSearch width={12} color="#FFFFFF80" />

            <input
              aria-label="Search traders"
              className="bg-transparent outline-0 border-0 ring-0 text-sm placeholder:text-white/50 w-full"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 pb-10">
          <div className="relative py-8 px-5 rounded-[15px] space-y-5 w-full bg-white/[3%] overflow-hidden">
            <div className="flex items-center justify-between relative">
              <div className="flex items-center gap-3.5">
                <Image
                  src={"/traders-pfp-1.jpg"}
                  aria-label="traders avatar"
                  alt="traders avatar"
                  width={40}
                  height={40}
                  className="size-auto rounded-full"
                />

                <div className="space-y-1">
                  <p
                    className={`${baloo.className} text-base/6 tracking-[2px] font-normal bg-gradient-to-r from-white to-white/0 bg-clip-text text-transparent`}
                  >
                    Calero
                  </p>

                  <p className="flex gap-2 items-center text-xs/3 font-normal bg-gradient-to-r from-white to-white/0 bg-clip-text text-transparent">
                    <svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.3184 6.86636C8.00024 6.42057 8.51791 5.77111 8.79483 5.01404C9.07176 4.25696 9.09326 3.43246 8.85614 2.66246C8.61903 1.89246 8.13588 1.21784 7.47816 0.738359C6.82045 0.258881 6.02307 0 5.20395 0C4.38482 0 3.58745 0.258881 2.92973 0.738359C2.27201 1.21784 1.78887 1.89246 1.55175 2.66246C1.31463 3.43246 1.33613 4.25696 1.61306 5.01404C1.88999 5.77111 2.40765 6.42057 3.08949 6.86636C1.85611 7.3128 0.802767 8.13893 0.0866467 9.22147C0.0490099 9.2764 0.0228673 9.33814 0.00973857 9.40308C-0.00339018 9.46803 -0.00324318 9.53489 0.010171 9.59978C0.0235852 9.66467 0.049999 9.72629 0.087877 9.78107C0.125755 9.83584 0.174342 9.88268 0.230813 9.91885C0.287284 9.95503 0.350513 9.97981 0.416825 9.99178C0.483137 10.0037 0.551208 10.0026 0.617083 9.98854C0.682958 9.97444 0.745322 9.94762 0.800549 9.90964C0.855777 9.87166 0.902767 9.82328 0.938788 9.76731C1.40072 9.06957 2.03281 8.49621 2.77766 8.0993C3.5225 7.70238 4.35651 7.49448 5.20395 7.49448C6.05138 7.49448 6.88539 7.70238 7.63024 8.0993C8.37508 8.49621 9.00718 9.06957 9.46911 9.76731C9.54372 9.87622 9.65899 9.95192 9.78998 9.97804C9.92097 10.0042 10.0572 9.97859 10.1691 9.90688C10.2811 9.83516 10.3598 9.72306 10.3883 9.5948C10.4167 9.46654 10.3927 9.33243 10.3212 9.22147C9.60513 8.13893 8.55179 7.3128 7.3184 6.86636ZM2.40587 3.7487C2.40587 3.20521 2.56997 2.67393 2.87743 2.22203C3.18489 1.77014 3.62189 1.41793 4.13317 1.20994C4.64445 1.00196 5.20705 0.947541 5.74982 1.05357C6.2926 1.1596 6.79117 1.42132 7.18249 1.80562C7.5738 2.18993 7.84029 2.67956 7.94826 3.21261C8.05622 3.74566 8.00081 4.29817 7.78903 4.80029C7.57725 5.30241 7.21862 5.73158 6.75847 6.03353C6.29833 6.33548 5.75735 6.49664 5.20395 6.49664C4.46211 6.49581 3.7509 6.20603 3.22634 5.69088C2.70178 5.17572 2.40671 4.47725 2.40587 3.7487ZM15.7692 9.91282C15.6562 9.98519 15.5186 10.0105 15.3866 9.98323C15.2545 9.95594 15.139 9.87827 15.0653 9.76731C14.6039 9.06916 13.9719 8.49555 13.2269 8.0988C12.4819 7.70204 11.6476 7.49478 10.8001 7.49589C10.6652 7.49589 10.5358 7.44325 10.4404 7.34955C10.345 7.25586 10.2914 7.12877 10.2914 6.99626C10.2914 6.86376 10.345 6.73667 10.4404 6.64298C10.5358 6.54928 10.6652 6.49664 10.8001 6.49664C11.2122 6.49626 11.619 6.4065 11.9917 6.23378C12.3643 6.06107 12.6935 5.80965 12.9558 5.4975C13.218 5.18535 13.4068 4.82017 13.5087 4.42805C13.6106 4.03594 13.623 3.62657 13.5451 3.22919C13.4672 2.83181 13.3009 2.45623 13.058 2.12929C12.8152 1.80236 12.5018 1.53213 12.1403 1.33791C11.7788 1.1437 11.3781 1.0303 10.9668 1.00581C10.5555 0.981318 10.1437 1.04635 9.761 1.19625C9.69859 1.22274 9.63141 1.23668 9.56343 1.23725C9.49544 1.23781 9.42803 1.22499 9.36518 1.19953C9.30232 1.17408 9.2453 1.13651 9.19749 1.08905C9.14967 1.04158 9.11202 0.98519 9.08677 0.923196C9.06152 0.861203 9.04918 0.794868 9.05048 0.728111C9.05177 0.661354 9.06668 0.59553 9.09432 0.534527C9.12196 0.473525 9.16177 0.418582 9.2114 0.372944C9.26102 0.327307 9.31946 0.291901 9.38326 0.26882C10.2592 -0.0742658 11.2335 -0.086612 12.1182 0.234162C13.0029 0.554937 13.7353 1.1861 14.1741 2.0059C14.6129 2.8257 14.727 3.77604 14.4944 4.67358C14.2618 5.57113 13.699 6.35229 12.9146 6.86636C14.1479 7.3128 15.2013 8.13893 15.9174 9.22147C15.9911 9.33245 16.0169 9.46763 15.9891 9.59728C15.9613 9.72693 15.8822 9.84043 15.7692 9.91282Z"
                        fill="url(#paint0_linear_2821_1751)"
                        fill-opacity="0.5"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_2821_1751"
                          x1="2.19812"
                          y1="-5.29e-07"
                          x2="13.8019"
                          y2="10"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop
                            offset="1"
                            stop-color="white"
                            stop-opacity="0.2"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                    4/100
                  </p>
                </div>
              </div>

              <Image
                src={"/traders-badge-1.png"}
                aria-label="traders badge"
                alt="traders badge"
                width={24}
                height={24}
                className="size-auto"
              />
            </div>

            <div className="flex flex-col items-center gap-5 w-full">
              <div className="space-y-3 w-full">
                <div className="space-y-1">
                  <p className="font-semibold text-xs tracking-[2px] text-white/60">
                    ROI
                  </p>
                  <p
                    className={`${baloo.className} font-normal text-base tracking-[2px] text-[#09AF08]`}
                  >
                    +129.38%
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-xs tracking-[2px] text-white/60">
                    Risk score
                  </p>
                  <p
                    className={`${baloo.className} font-normal text-base tracking-[2px] text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20`}
                  >
                    2.4/10
                  </p>
                </div>
              </div>

              <button className="flex items-center justify-center gap-2.5 py-3 px-2.5 rounded-lg border border-white/30 h-[40px] w-[156px] font-semibold text-xs tracking-[2px] text-white/80">
                Copy now
              </button>
            </div>

            <span className="absolute -top-8 left-1/2 -translate-x-1/2">
              <TradersCardGlowPurple />
            </span>
          </div>
          <div className="relative py-8 px-5 rounded-[15px] space-y-5 w-full bg-white/[3%] overflow-hidden">
            <div className="flex items-center justify-between relative">
              <div className="flex items-center gap-3.5">
                <Image
                  src={"/traders-pfp-2.jpg"}
                  aria-label="traders avatar"
                  alt="traders avatar"
                  width={40}
                  height={40}
                  className="size-auto rounded-full"
                />

                <div className="space-y-1">
                  <p
                    className={`${baloo.className} text-base/6 tracking-[2px] font-normal bg-gradient-to-r from-white to-white/0 bg-clip-text text-transparent`}
                  >
                    Maldivaaa
                  </p>

                  <p className="flex gap-2 items-center text-xs/3 font-normal bg-gradient-to-r from-white to-white/0 bg-clip-text text-transparent">
                    <svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.3184 6.86636C8.00024 6.42057 8.51791 5.77111 8.79483 5.01404C9.07176 4.25696 9.09326 3.43246 8.85614 2.66246C8.61903 1.89246 8.13588 1.21784 7.47816 0.738359C6.82045 0.258881 6.02307 0 5.20395 0C4.38482 0 3.58745 0.258881 2.92973 0.738359C2.27201 1.21784 1.78887 1.89246 1.55175 2.66246C1.31463 3.43246 1.33613 4.25696 1.61306 5.01404C1.88999 5.77111 2.40765 6.42057 3.08949 6.86636C1.85611 7.3128 0.802767 8.13893 0.0866467 9.22147C0.0490099 9.2764 0.0228673 9.33814 0.00973857 9.40308C-0.00339018 9.46803 -0.00324318 9.53489 0.010171 9.59978C0.0235852 9.66467 0.049999 9.72629 0.087877 9.78107C0.125755 9.83584 0.174342 9.88268 0.230813 9.91885C0.287284 9.95503 0.350513 9.97981 0.416825 9.99178C0.483137 10.0037 0.551208 10.0026 0.617083 9.98854C0.682958 9.97444 0.745322 9.94762 0.800549 9.90964C0.855777 9.87166 0.902767 9.82328 0.938788 9.76731C1.40072 9.06957 2.03281 8.49621 2.77766 8.0993C3.5225 7.70238 4.35651 7.49448 5.20395 7.49448C6.05138 7.49448 6.88539 7.70238 7.63024 8.0993C8.37508 8.49621 9.00718 9.06957 9.46911 9.76731C9.54372 9.87622 9.65899 9.95192 9.78998 9.97804C9.92097 10.0042 10.0572 9.97859 10.1691 9.90688C10.2811 9.83516 10.3598 9.72306 10.3883 9.5948C10.4167 9.46654 10.3927 9.33243 10.3212 9.22147C9.60513 8.13893 8.55179 7.3128 7.3184 6.86636ZM2.40587 3.7487C2.40587 3.20521 2.56997 2.67393 2.87743 2.22203C3.18489 1.77014 3.62189 1.41793 4.13317 1.20994C4.64445 1.00196 5.20705 0.947541 5.74982 1.05357C6.2926 1.1596 6.79117 1.42132 7.18249 1.80562C7.5738 2.18993 7.84029 2.67956 7.94826 3.21261C8.05622 3.74566 8.00081 4.29817 7.78903 4.80029C7.57725 5.30241 7.21862 5.73158 6.75847 6.03353C6.29833 6.33548 5.75735 6.49664 5.20395 6.49664C4.46211 6.49581 3.7509 6.20603 3.22634 5.69088C2.70178 5.17572 2.40671 4.47725 2.40587 3.7487ZM15.7692 9.91282C15.6562 9.98519 15.5186 10.0105 15.3866 9.98323C15.2545 9.95594 15.139 9.87827 15.0653 9.76731C14.6039 9.06916 13.9719 8.49555 13.2269 8.0988C12.4819 7.70204 11.6476 7.49478 10.8001 7.49589C10.6652 7.49589 10.5358 7.44325 10.4404 7.34955C10.345 7.25586 10.2914 7.12877 10.2914 6.99626C10.2914 6.86376 10.345 6.73667 10.4404 6.64298C10.5358 6.54928 10.6652 6.49664 10.8001 6.49664C11.2122 6.49626 11.619 6.4065 11.9917 6.23378C12.3643 6.06107 12.6935 5.80965 12.9558 5.4975C13.218 5.18535 13.4068 4.82017 13.5087 4.42805C13.6106 4.03594 13.623 3.62657 13.5451 3.22919C13.4672 2.83181 13.3009 2.45623 13.058 2.12929C12.8152 1.80236 12.5018 1.53213 12.1403 1.33791C11.7788 1.1437 11.3781 1.0303 10.9668 1.00581C10.5555 0.981318 10.1437 1.04635 9.761 1.19625C9.69859 1.22274 9.63141 1.23668 9.56343 1.23725C9.49544 1.23781 9.42803 1.22499 9.36518 1.19953C9.30232 1.17408 9.2453 1.13651 9.19749 1.08905C9.14967 1.04158 9.11202 0.98519 9.08677 0.923196C9.06152 0.861203 9.04918 0.794868 9.05048 0.728111C9.05177 0.661354 9.06668 0.59553 9.09432 0.534527C9.12196 0.473525 9.16177 0.418582 9.2114 0.372944C9.26102 0.327307 9.31946 0.291901 9.38326 0.26882C10.2592 -0.0742658 11.2335 -0.086612 12.1182 0.234162C13.0029 0.554937 13.7353 1.1861 14.1741 2.0059C14.6129 2.8257 14.727 3.77604 14.4944 4.67358C14.2618 5.57113 13.699 6.35229 12.9146 6.86636C14.1479 7.3128 15.2013 8.13893 15.9174 9.22147C15.9911 9.33245 16.0169 9.46763 15.9891 9.59728C15.9613 9.72693 15.8822 9.84043 15.7692 9.91282Z"
                        fill="url(#paint0_linear_2821_1751)"
                        fill-opacity="0.5"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_2821_1751"
                          x1="2.19812"
                          y1="-5.29e-07"
                          x2="13.8019"
                          y2="10"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop
                            offset="1"
                            stop-color="white"
                            stop-opacity="0.2"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                    4/100
                  </p>
                </div>
              </div>

              <Image
                src={"/traders-badge-2.png"}
                aria-label="traders badge"
                alt="traders badge"
                width={24}
                height={24}
                className="size-auto"
              />
            </div>

            <div className="flex flex-col items-center gap-5 w-full">
              <div className="space-y-3 w-full">
                <div className="space-y-1">
                  <p className="font-semibold text-xs tracking-[2px] text-white/60">
                    ROI
                  </p>
                  <p
                    className={`${baloo.className} font-normal text-base tracking-[2px] text-[#09AF08]`}
                  >
                    +129.38%
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-xs tracking-[2px] text-white/60">
                    Risk score
                  </p>
                  <p
                    className={`${baloo.className} font-normal text-base tracking-[2px] text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20`}
                  >
                    2.4/10
                  </p>
                </div>
              </div>

              <button className="flex items-center justify-center gap-2.5 py-3 px-2.5 rounded-lg border border-white/30 h-[40px] w-[156px] font-semibold text-xs tracking-[2px] text-white/80">
                Copy now
              </button>
            </div>

            <span className="absolute -top-8 left-1/2 -translate-x-1/2">
              <TradersCardGlowYellow />
            </span>
          </div>
          <div className="relative py-8 px-5 rounded-[15px] space-y-5 w-full bg-white/[3%] overflow-hidden">
            <div className="flex items-center justify-between relative">
              <div className="flex items-center gap-3.5">
                <Image
                  src={"/traders-pfp-3.jpg"}
                  aria-label="traders avatar"
                  alt="traders avatar"
                  width={40}
                  height={40}
                  className="size-auto rounded-full"
                />

                <div className="space-y-1">
                  <p
                    className={`${baloo.className} text-base/6 tracking-[2px] font-normal bg-gradient-to-r from-white to-white/0 bg-clip-text text-transparent`}
                  >
                    AnabellaXX
                  </p>

                  <p className="flex gap-2 items-center text-xs/3 font-normal bg-gradient-to-r from-white to-white/0 bg-clip-text text-transparent">
                    <svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.3184 6.86636C8.00024 6.42057 8.51791 5.77111 8.79483 5.01404C9.07176 4.25696 9.09326 3.43246 8.85614 2.66246C8.61903 1.89246 8.13588 1.21784 7.47816 0.738359C6.82045 0.258881 6.02307 0 5.20395 0C4.38482 0 3.58745 0.258881 2.92973 0.738359C2.27201 1.21784 1.78887 1.89246 1.55175 2.66246C1.31463 3.43246 1.33613 4.25696 1.61306 5.01404C1.88999 5.77111 2.40765 6.42057 3.08949 6.86636C1.85611 7.3128 0.802767 8.13893 0.0866467 9.22147C0.0490099 9.2764 0.0228673 9.33814 0.00973857 9.40308C-0.00339018 9.46803 -0.00324318 9.53489 0.010171 9.59978C0.0235852 9.66467 0.049999 9.72629 0.087877 9.78107C0.125755 9.83584 0.174342 9.88268 0.230813 9.91885C0.287284 9.95503 0.350513 9.97981 0.416825 9.99178C0.483137 10.0037 0.551208 10.0026 0.617083 9.98854C0.682958 9.97444 0.745322 9.94762 0.800549 9.90964C0.855777 9.87166 0.902767 9.82328 0.938788 9.76731C1.40072 9.06957 2.03281 8.49621 2.77766 8.0993C3.5225 7.70238 4.35651 7.49448 5.20395 7.49448C6.05138 7.49448 6.88539 7.70238 7.63024 8.0993C8.37508 8.49621 9.00718 9.06957 9.46911 9.76731C9.54372 9.87622 9.65899 9.95192 9.78998 9.97804C9.92097 10.0042 10.0572 9.97859 10.1691 9.90688C10.2811 9.83516 10.3598 9.72306 10.3883 9.5948C10.4167 9.46654 10.3927 9.33243 10.3212 9.22147C9.60513 8.13893 8.55179 7.3128 7.3184 6.86636ZM2.40587 3.7487C2.40587 3.20521 2.56997 2.67393 2.87743 2.22203C3.18489 1.77014 3.62189 1.41793 4.13317 1.20994C4.64445 1.00196 5.20705 0.947541 5.74982 1.05357C6.2926 1.1596 6.79117 1.42132 7.18249 1.80562C7.5738 2.18993 7.84029 2.67956 7.94826 3.21261C8.05622 3.74566 8.00081 4.29817 7.78903 4.80029C7.57725 5.30241 7.21862 5.73158 6.75847 6.03353C6.29833 6.33548 5.75735 6.49664 5.20395 6.49664C4.46211 6.49581 3.7509 6.20603 3.22634 5.69088C2.70178 5.17572 2.40671 4.47725 2.40587 3.7487ZM15.7692 9.91282C15.6562 9.98519 15.5186 10.0105 15.3866 9.98323C15.2545 9.95594 15.139 9.87827 15.0653 9.76731C14.6039 9.06916 13.9719 8.49555 13.2269 8.0988C12.4819 7.70204 11.6476 7.49478 10.8001 7.49589C10.6652 7.49589 10.5358 7.44325 10.4404 7.34955C10.345 7.25586 10.2914 7.12877 10.2914 6.99626C10.2914 6.86376 10.345 6.73667 10.4404 6.64298C10.5358 6.54928 10.6652 6.49664 10.8001 6.49664C11.2122 6.49626 11.619 6.4065 11.9917 6.23378C12.3643 6.06107 12.6935 5.80965 12.9558 5.4975C13.218 5.18535 13.4068 4.82017 13.5087 4.42805C13.6106 4.03594 13.623 3.62657 13.5451 3.22919C13.4672 2.83181 13.3009 2.45623 13.058 2.12929C12.8152 1.80236 12.5018 1.53213 12.1403 1.33791C11.7788 1.1437 11.3781 1.0303 10.9668 1.00581C10.5555 0.981318 10.1437 1.04635 9.761 1.19625C9.69859 1.22274 9.63141 1.23668 9.56343 1.23725C9.49544 1.23781 9.42803 1.22499 9.36518 1.19953C9.30232 1.17408 9.2453 1.13651 9.19749 1.08905C9.14967 1.04158 9.11202 0.98519 9.08677 0.923196C9.06152 0.861203 9.04918 0.794868 9.05048 0.728111C9.05177 0.661354 9.06668 0.59553 9.09432 0.534527C9.12196 0.473525 9.16177 0.418582 9.2114 0.372944C9.26102 0.327307 9.31946 0.291901 9.38326 0.26882C10.2592 -0.0742658 11.2335 -0.086612 12.1182 0.234162C13.0029 0.554937 13.7353 1.1861 14.1741 2.0059C14.6129 2.8257 14.727 3.77604 14.4944 4.67358C14.2618 5.57113 13.699 6.35229 12.9146 6.86636C14.1479 7.3128 15.2013 8.13893 15.9174 9.22147C15.9911 9.33245 16.0169 9.46763 15.9891 9.59728C15.9613 9.72693 15.8822 9.84043 15.7692 9.91282Z"
                        fill="url(#paint0_linear_2821_1751)"
                        fill-opacity="0.5"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_2821_1751"
                          x1="2.19812"
                          y1="-5.29e-07"
                          x2="13.8019"
                          y2="10"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop
                            offset="1"
                            stop-color="white"
                            stop-opacity="0.2"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                    4/100
                  </p>
                </div>
              </div>

              <Image
                src={"/traders-badge-3.png"}
                aria-label="traders badge"
                alt="traders badge"
                width={24}
                height={24}
                className="size-auto"
              />
            </div>

            <div className="flex flex-col items-center gap-5 w-full">
              <div className="space-y-3 w-full">
                <div className="space-y-1">
                  <p className="font-semibold text-xs tracking-[2px] text-white/60">
                    ROI
                  </p>
                  <p
                    className={`${baloo.className} font-normal text-base tracking-[2px] text-[#09AF08]`}
                  >
                    +129.38%
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-xs tracking-[2px] text-white/60">
                    Risk score
                  </p>
                  <p
                    className={`${baloo.className} font-normal text-base tracking-[2px] text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20`}
                  >
                    2.4/10
                  </p>
                </div>
              </div>

              <button className="flex items-center justify-center gap-2.5 py-3 px-2.5 rounded-lg border border-white/30 h-[40px] w-[156px] font-semibold text-xs tracking-[2px] text-white/80">
                Copy now
              </button>
            </div>

            <span className="absolute -top-8 left-1/2 -translate-x-1/2">
              <TradersCardGlowPurple />
            </span>
          </div>
          <div className="relative py-8 px-5 rounded-[15px] space-y-5 w-full bg-white/[3%] overflow-hidden">
            <div className="flex items-center justify-between relative">
              <div className="flex items-center gap-3.5">
                <Image
                  src={"/traders-pfp-4.jpg"}
                  aria-label="traders avatar"
                  alt="traders avatar"
                  width={40}
                  height={40}
                  className="size-auto rounded-full"
                />

                <div className="space-y-1">
                  <p
                    className={`${baloo.className} text-base/6 tracking-[2px] font-normal bg-gradient-to-r from-white to-white/0 bg-clip-text text-transparent`}
                  >
                    TrDerXX
                  </p>

                  <p className="flex gap-2 items-center text-xs/3 font-normal bg-gradient-to-r from-white to-white/0 bg-clip-text text-transparent">
                    <svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.3184 6.86636C8.00024 6.42057 8.51791 5.77111 8.79483 5.01404C9.07176 4.25696 9.09326 3.43246 8.85614 2.66246C8.61903 1.89246 8.13588 1.21784 7.47816 0.738359C6.82045 0.258881 6.02307 0 5.20395 0C4.38482 0 3.58745 0.258881 2.92973 0.738359C2.27201 1.21784 1.78887 1.89246 1.55175 2.66246C1.31463 3.43246 1.33613 4.25696 1.61306 5.01404C1.88999 5.77111 2.40765 6.42057 3.08949 6.86636C1.85611 7.3128 0.802767 8.13893 0.0866467 9.22147C0.0490099 9.2764 0.0228673 9.33814 0.00973857 9.40308C-0.00339018 9.46803 -0.00324318 9.53489 0.010171 9.59978C0.0235852 9.66467 0.049999 9.72629 0.087877 9.78107C0.125755 9.83584 0.174342 9.88268 0.230813 9.91885C0.287284 9.95503 0.350513 9.97981 0.416825 9.99178C0.483137 10.0037 0.551208 10.0026 0.617083 9.98854C0.682958 9.97444 0.745322 9.94762 0.800549 9.90964C0.855777 9.87166 0.902767 9.82328 0.938788 9.76731C1.40072 9.06957 2.03281 8.49621 2.77766 8.0993C3.5225 7.70238 4.35651 7.49448 5.20395 7.49448C6.05138 7.49448 6.88539 7.70238 7.63024 8.0993C8.37508 8.49621 9.00718 9.06957 9.46911 9.76731C9.54372 9.87622 9.65899 9.95192 9.78998 9.97804C9.92097 10.0042 10.0572 9.97859 10.1691 9.90688C10.2811 9.83516 10.3598 9.72306 10.3883 9.5948C10.4167 9.46654 10.3927 9.33243 10.3212 9.22147C9.60513 8.13893 8.55179 7.3128 7.3184 6.86636ZM2.40587 3.7487C2.40587 3.20521 2.56997 2.67393 2.87743 2.22203C3.18489 1.77014 3.62189 1.41793 4.13317 1.20994C4.64445 1.00196 5.20705 0.947541 5.74982 1.05357C6.2926 1.1596 6.79117 1.42132 7.18249 1.80562C7.5738 2.18993 7.84029 2.67956 7.94826 3.21261C8.05622 3.74566 8.00081 4.29817 7.78903 4.80029C7.57725 5.30241 7.21862 5.73158 6.75847 6.03353C6.29833 6.33548 5.75735 6.49664 5.20395 6.49664C4.46211 6.49581 3.7509 6.20603 3.22634 5.69088C2.70178 5.17572 2.40671 4.47725 2.40587 3.7487ZM15.7692 9.91282C15.6562 9.98519 15.5186 10.0105 15.3866 9.98323C15.2545 9.95594 15.139 9.87827 15.0653 9.76731C14.6039 9.06916 13.9719 8.49555 13.2269 8.0988C12.4819 7.70204 11.6476 7.49478 10.8001 7.49589C10.6652 7.49589 10.5358 7.44325 10.4404 7.34955C10.345 7.25586 10.2914 7.12877 10.2914 6.99626C10.2914 6.86376 10.345 6.73667 10.4404 6.64298C10.5358 6.54928 10.6652 6.49664 10.8001 6.49664C11.2122 6.49626 11.619 6.4065 11.9917 6.23378C12.3643 6.06107 12.6935 5.80965 12.9558 5.4975C13.218 5.18535 13.4068 4.82017 13.5087 4.42805C13.6106 4.03594 13.623 3.62657 13.5451 3.22919C13.4672 2.83181 13.3009 2.45623 13.058 2.12929C12.8152 1.80236 12.5018 1.53213 12.1403 1.33791C11.7788 1.1437 11.3781 1.0303 10.9668 1.00581C10.5555 0.981318 10.1437 1.04635 9.761 1.19625C9.69859 1.22274 9.63141 1.23668 9.56343 1.23725C9.49544 1.23781 9.42803 1.22499 9.36518 1.19953C9.30232 1.17408 9.2453 1.13651 9.19749 1.08905C9.14967 1.04158 9.11202 0.98519 9.08677 0.923196C9.06152 0.861203 9.04918 0.794868 9.05048 0.728111C9.05177 0.661354 9.06668 0.59553 9.09432 0.534527C9.12196 0.473525 9.16177 0.418582 9.2114 0.372944C9.26102 0.327307 9.31946 0.291901 9.38326 0.26882C10.2592 -0.0742658 11.2335 -0.086612 12.1182 0.234162C13.0029 0.554937 13.7353 1.1861 14.1741 2.0059C14.6129 2.8257 14.727 3.77604 14.4944 4.67358C14.2618 5.57113 13.699 6.35229 12.9146 6.86636C14.1479 7.3128 15.2013 8.13893 15.9174 9.22147C15.9911 9.33245 16.0169 9.46763 15.9891 9.59728C15.9613 9.72693 15.8822 9.84043 15.7692 9.91282Z"
                        fill="url(#paint0_linear_2821_1751)"
                        fill-opacity="0.5"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_2821_1751"
                          x1="2.19812"
                          y1="-5.29e-07"
                          x2="13.8019"
                          y2="10"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop
                            offset="1"
                            stop-color="white"
                            stop-opacity="0.2"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                    4/100
                  </p>
                </div>
              </div>

              <Image
                src={"/traders-badge-1.png"}
                aria-label="traders badge"
                alt="traders badge"
                width={24}
                height={24}
                className="size-auto"
              />
            </div>

            <div className="flex flex-col items-center gap-5 w-full">
              <div className="space-y-3 w-full">
                <div className="space-y-1">
                  <p className="font-semibold text-xs tracking-[2px] text-white/60">
                    ROI
                  </p>
                  <p
                    className={`${baloo.className} font-normal text-base tracking-[2px] text-[#09AF08]`}
                  >
                    +129.38%
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-xs tracking-[2px] text-white/60">
                    Risk score
                  </p>
                  <p
                    className={`${baloo.className} font-normal text-base tracking-[2px] text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20`}
                  >
                    2.4/10
                  </p>
                </div>
              </div>

              <button className="flex items-center justify-center gap-2.5 py-3 px-2.5 rounded-lg border border-white/30 h-[40px] w-[156px] font-semibold text-xs tracking-[2px] text-white/80">
                Copy now
              </button>
            </div>

            <span className="absolute -top-8 left-1/2 -translate-x-1/2">
              <TradersCardGlowYellow />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
