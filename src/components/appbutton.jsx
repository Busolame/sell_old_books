import { ThreeDots } from 'react-loader-spinner'


const AppButton = ({ text, handleButton, active = true, buttonLoading = false }) => {
  return active ? (
    <div className="flex justify-center">
      <div onClick={handleButton} className="w-[80%] uppercase cursor-pointer rounded-s-[10px] p-2 flex justify-center text-appwhite font-bold bg-appindigo my-4">
        {buttonLoading ? <ThreeDots visible={true} height="24" width="35" color="#f5f5f5" radius="9" ariaLabel="three-dots-loading" /> : text}
        </div>
    </div>
  ) : (
    <div className="flex justify-center">
      <div className=" w-[80%] uppercase rounded-s-[10px] p-2 text-center text-[#D3D3D3] font-bold bg-appindigo my-4"> {text} </div>
    </div>
  );
};

export default AppButton;
