import { IoIosCheckmark } from "react-icons/io";

const AppCheckBox = ({ checked = false, text, textcontd, handleCheck }) => {
  return (
    <div className="flex items-center">
      <div
        onClick={handleCheck}
        className="border-appindigo w-[18px] h-[19px] border-[2px] rounded-[3px]"
      >
        {checked && (
          <div className="bg-[#8294bf] h-[15px]  text-center">
            <IoIosCheckmark color="#f5f5f5" />
          </div>
        )}
      </div>
      <span className="text-[10px] font-bold ml-2">{text}</span>
    </div>
  );
};

export default AppCheckBox;
