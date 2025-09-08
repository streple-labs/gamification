"use client";

import { baloo } from "@/app/fonts";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import Loader from "../ui/loader";
import { useAuth } from "@/context/auth-context";

export default function CopyTrader({
  handleCopyTrader,
  loading,
}: {
  handleCopyTrader: (amount: number) => void;
  loading: boolean;
}) {
  const {
    user: { game_data },
  } = useAuth();
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setSliderValue(value);

    const slider = e.target;
    const percentage = ((value - 50) / (500 - 50)) * 100;
    slider.style.background = `linear-gradient(to right, #9e82f2 0%, #9e82f2 ${percentage}%, #3c3b3f ${percentage}%, #3c3b3f 100%)`;
  };

  const [showMoreSettings, setShowMoreSettings] = useState(false);
  const toggleMoreSettings = () => {
    setShowMoreSettings((prev) => !prev);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCopyTrader(sliderValue);
      }}
      className="space-y-10 size-full max-w-3xl mx-auto"
    >
      <div className="space-y-4 w-full">
        <h4
          className={`pl-5 ${baloo.className} text-2xl/[30px] tracking-[4%] text-[#E6E2F066]`}
        >
          {sliderValue > 50
            ? `Copy trader with ${sliderValue} STP`
            : "Min of 50STP"}
        </h4>

        <div className="flex flex-col gap-6">
          <label htmlFor="amount" className="flex flex-col gap-1">
            <input
              type="range"
              name="stp-amount"
              id="amount"
              min="50"
              max={game_data.totalScore}
              value={sliderValue}
              onChange={handleSliderChange}
              className="w-full"
              disabled={loading}
            />

            <p
              className={`${baloo.className} text-[#E6E2F04D] text-right w-full text-xs/[15px] tracking-[4%]`}
            >
              Available balance: <span className="text-[#E6E2F0]">500STP</span>
            </p>
          </label>

          <div
            onClick={toggleMoreSettings}
            className="cursor-pointer p-4 flex items-center justify-between h-12 rounded-[20px] border-[5px] border-white/10 w-full"
          >
            <p className="text-xs/[15px] tracking-[4%] text-white/70">
              More settings
            </p>
            <FaChevronDown
              className={`w-[11px] h-2.5 fill-white/70 ${
                showMoreSettings && "rotate-180"
              }`}
            />
          </div>

          {showMoreSettings && (
            <div className="flex flex-col gap-4">
              <label
                htmlFor="copy-all-positions"
                className="flex items-center gap-2 cursor-pointer"
              >
                <span
                  className={`size-4 rounded-[2px] border-2 border-white/60 peer-checked:bg-white/60`}
                />
                <input
                  type="checkbox"
                  id="copy-all-positions"
                  className="peer hidden"
                  disabled={loading}
                />
                <p
                  className={`${baloo.className} text-base/[25px] tracking-[4%] text-white/60`}
                >
                  Copy all postions
                </p>
              </label>

              <label htmlFor="stop-loss-ratio" className="space-y-4 w-full">
                <p
                  className={`${baloo.className} text-base/[25px] tracking-[4%] text-white/60`}
                >
                  Stop Loss Ratio
                </p>
                <input
                  disabled={loading}
                  type="text"
                  name="stop-loss-ratio"
                  id="stop-loss-ratio"
                  placeholder="(0-400%)"
                  className="w-full p-4 flex items-center justify-between h-12 rounded-[20px] border border-white/20 outline-0 ring-0 text-base/[15px] tracking-[4%] placeholder:text-white/40"
                />
              </label>
              <label htmlFor="take-profit-ratio" className="space-y-4 w-full">
                <p
                  className={`${baloo.className} text-base/[25px] tracking-[4%] text-white/60`}
                >
                  Take profile ratio
                </p>
                <input
                  disabled={loading}
                  type="text"
                  name="take profit-ratio"
                  id="take profit-ratio"
                  placeholder="(0-400%)"
                  className="w-full p-4 flex items-center justify-between h-12 rounded-[20px] border border-white/20 outline-0 ring-0 text-base/[15px] tracking-[4%] placeholder:text-white/40"
                />
              </label>
              <label htmlFor="maximum-copy" className="space-y-4 w-full">
                <p
                  className={`${baloo.className} text-base/[25px] tracking-[4%] text-white/60`}
                >
                  Maximum copy
                </p>
                <input
                  disabled={loading}
                  type="text"
                  name="maximum-copy"
                  id="maximum-copy"
                  placeholder="1000STP"
                  className="w-full p-4 flex items-center justify-between h-12 rounded-[20px] border border-white/20 outline-0 ring-0 text-base/[15px] tracking-[4%] placeholder:text-white/40"
                />
              </label>
              <label htmlFor="slippage-limit" className="space-y-4 w-full">
                <p
                  className={`${baloo.className} text-base/[25px] tracking-[4%] text-white/60`}
                >
                  Slippage limit
                </p>
                <input
                  disabled={loading}
                  type="text"
                  name="slippage-limit"
                  id="slippage-limit"
                  placeholder="(0.1-1.0)"
                  className="w-full p-4 flex items-center justify-between h-12 rounded-[20px] border border-white/20 outline-0 ring-0 text-base/[15px] tracking-[4%] placeholder:text-white/40"
                />
              </label>
              <label className="space-y-4 w-full">
                <p
                  className={`${baloo.className} text-base/[25px] tracking-[4%] text-white/60`}
                >
                  Margin mode
                </p>
                <div className="cursor-pointer p-4 flex items-center justify-between h-12 rounded-[20px] border border-white/20 w-full">
                  <p className="text-xs/[15px] tracking-[4%] text-white/40">
                    Margin mode
                  </p>
                  <FaChevronDown
                    className={`w-[11px] h-2.5 fill-white/70 ${
                      showMoreSettings && "rotate-180"
                    }`}
                  />
                </div>
              </label>
              <label className="space-y-4 w-full">
                <p
                  className={`${baloo.className} text-base/[25px] tracking-[4%] text-white/60`}
                >
                  Leverage
                </p>
                <div className="cursor-pointer p-4 flex items-center justify-between h-12 rounded-[20px] border border-white/20 w-full">
                  <p className="text-xs/[15px] tracking-[4%] text-white/40">
                    Leverage
                  </p>
                  <FaChevronDown
                    className={`w-[11px] h-2.5 fill-white/70 ${
                      showMoreSettings && "rotate-180"
                    }`}
                  />
                </div>
              </label>
            </div>
          )}
        </div>
      </div>

      <button
        disabled={loading}
        type="submit"
        aria-label="handle copy trader"
        className="text-[#181812B2] mx-auto relative text-base font-bold flex items-center justify-center shadow-[inset_4px_3px_2px_0px_#EDEBB680] border border-[#ACA40F80] bg-[#BDB510] rounded-[10px] h-[60px] w-[229px]"
      >
        {loading ? <Loader /> : "Copy"}
      </button>
    </form>
  );
}
