import AppButton from "./appbutton";

const AppCard = ({ amount, title, year, image, date, genre, handlePay }) => {
  return (
    <div>
      <div className="relative bg-appwhite  rounded-[10px] overflow-hidden">
        <div className="absolute right-4 top-4 uppercase bg-appindigo rounded-full px-3 py-1 text-appwhite text-[11px] font-[540]">
          {genre}
        </div>
        <div className="flex flex-row justify-center my-1">
          <img src={`../assets/images/${image}`} className="h-[180px] w-auto" />
        </div>
        <div className="text-center p-[10px]">
          <h5 className="text-apppink font-bold ">{title}</h5>
          <span className="text-apppink font-bold">({year})</span>
        </div>
        <div className="border-[0.5px] border-appgray w-full"></div>
        <p className="text-[10px]  text-center p-1">{date}</p>
        <div className="text-center text-[20px] text-apppink font-semibold mt-1">
          &#8358;{amount}
        </div>
        <AppButton text={"Buy Book"} handleButton={handlePay} />    
      </div>
    </div>
  );
};

export default AppCard;
