import { HiHome } from "react-icons/hi2";
import { FaRankingStar } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";

function Navigations() {
  return (
    <div className="fixed bottom-0 right-0 px-12 bg-[#fff] w-full h-[60px] flex justify-between items-center p-4">
      <div className="flex items-center justify-center flex-col text-[#2A266A] cursor-pointer">
        <HiHome className="text-xl" />
        <span className="text-xs">Home</span>
      </div>
      <div className="flex items-center justify-center flex-col text-[#2A266A] cursor-pointer">
        <FaRankingStar className="text-xl" />
        <span className="text-xs">Leaderboard</span>
      </div>
      <div className="flex items-center justify-center flex-col text-[#2A266A] cursor-pointer">
        <IoPeople  className="text-xl" />
        <span className="text-xs">Freinds</span>
      </div>
    </div>
  );
}

export default Navigations;
