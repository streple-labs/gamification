"use client";

import { baloo } from "@/app/fonts";
import { FaChevronDown } from "react-icons/fa6";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "01/12",
    pv: 2400,
    amt: 2400,
  },
  {
    name: "06/12",
    pv: 1398,
    amt: 2210,
  },
  {
    name: "11/12",
    pv: 9800,
    amt: 2290,
  },
  {
    name: "16/12",
    pv: 3908,
    amt: 2000,
  },
  {
    name: "21/12",
    pv: 4800,
    amt: 2181,
  },
  {
    name: "26/12",
    pv: 3800,
    amt: 2500,
  },
  {
    name: "31/12",
    pv: 4300,
    amt: 2100,
  },
];

export default function PerformanceChart() {
  return (
    <div className="w-full h-[441px] rounded-[20px] border border-[#FFFFFF1A] bg-[#6151911A] px-6 py-8 flex flex-col justify-between gap-8">
      <div className="w-full flex items-center justify-between ">
        <p className={`${baloo.className} font-base text-white/80 font-normal`}>
          Performance chart
        </p>

        <div className="h-6 w-[72px] flex items-center justify-center cursor-pointer gap-2 rounded-[5px] bg-white/5 border border-white/5 text-white/5 py-1 px-2">
          <p className="text-xs text-white/60">7D</p>
          <FaChevronDown width={10} height={5} fill="#FFFFFF99" />
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid vertical={false} stroke="#FFFFFF1A" />
          <XAxis
            dataKey="name"
            tickMargin={16}
            axisLine={false}
            tickLine={false}
          />
          <YAxis tickMargin={16} axisLine={false} tickLine={false} />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={<span className="size-3 bg-[#A082F9] rounded-full" />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
