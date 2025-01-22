import { MdOutlineSell } from "react-icons/md";
import { IoPersonOutline , IoLogOutOutline} from "react-icons/io5";
import { RiHome5Line } from "react-icons/ri";
import Link from "next/link";

const BottomNav = () => {
    const navarray = [
        {id: 0, name: "Home", redirect: "/pages/home", icon: <RiHome5Line size={25}/>},
        {id: 1, name: "Marketplace", redirect: "/pages/marketplace", icon: <MdOutlineSell size={25}/>},
        {id: 2, name: "Profile", redirect: "/pages/profile", icon: <IoPersonOutline size={25}/>},
        {id: 3, name: "Logout", redirect: "/", icon: <IoLogOutOutline size={25}/>},
    ]
  return (
    <div className="flex justify-between px-3">
        {navarray.map((page)=>
        <Link href={page.redirect} key={page.id}>
            <div> {page.icon} </div>
            <span className="text-[10px] font-extrabold">{page.name}</span>
        </Link>
    )} 
    </div>
  );
};

export default BottomNav;
