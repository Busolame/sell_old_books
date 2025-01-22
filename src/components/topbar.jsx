import { useRouter } from "next/navigation";
import { FaArrowLeftLong, FaEllipsisVertical } from "react-icons/fa6";

const TopBar = ({ text, showOption, activeProfile = false }) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center my-4">
        <FaArrowLeftLong
          color="#647295"
          onClick={() => router.back()}
          className="cursor-pointer w-[25px] h-[25px]"
        />
        <span className="ml-3 text-appindigo font-bold text-[20px]">{text}</span>
      </div>
      {activeProfile && (
        <FaEllipsisVertical
          onClick={() => showOption("show")}
          className="w-[25px] h-[25px] text-[#ffffff]"
        />
      )}
    </div>
  );
};

export default TopBar;
