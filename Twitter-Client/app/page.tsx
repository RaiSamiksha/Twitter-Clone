import Image from "next/image";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitterX } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import { Inter } from "next/font/google";
import Feedcard from "@/components/Feedcard";

const inter = Inter({subsets: ["latin"] });

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SidebarmenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash/>,
  },
  {
    title: "Notifications",
    icon: <BsBell/>,
  },
  {
    title: "Messages",
    icon: <BsEnvelope/>
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark/>,
  },
  {
    title: "Twitter blue",
    icon: <BiMoney/>,
  },
  {
    title: "Profile",
    icon: <BiUser/>,
  },
  {
    title: "More",
    icon: <SlOptions />,
  }
];

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 flex flex-col justify-start ml-6 border pt-1">
          <div className="text-lg h-fit cursor-pointer transition-all">
            <BsTwitterX />
          </div>
          <div className="mt-2 text-sm font-medium pr-4"> {/* Added margin-top for spacing */}
            <ul>
              {SidebarmenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-1 w-fit cursor-pointer"key={item.title}>
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
            <button className="bg-[#1d9bf0] font-semibold text-md p-2 rounded-full w-full">Tweet</button>
            </div>
           
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] border border-gray-600">
          <Feedcard/>
          <Feedcard/>
          <Feedcard/>
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
