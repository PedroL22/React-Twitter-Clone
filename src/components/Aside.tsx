import {
  BsHouse,
  BsBookmark,
  BsCardList,
  BsFillPersonFill,
  BsPlusLg,
} from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { HiOutlineHashtag } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMail, FiMoreHorizontal } from "react-icons/fi";
import { CgMoreO } from "react-icons/cg";

export default function Aside() {
  return (
    <aside className="fixed h-full">
      <ul className="text-xl w-min ">
        <li className="flex w-fit py-4 pl-5 hover:bg-blue-100 hover:rounded-full cursor-pointer transition-all duration-250 ease-in">
          <GrTwitter className="mr-5 text-twitter" size={26} />
        </li>
        <li className="xl:py-3 flex w-fit py-4 pl-5 pr-8 hover:bg-gray-200 hover:rounded-full cursor-pointer transition-all duration-250 ease-in">
          <BsHouse className="mr-5" size={26} />
          <p className="xl:hidden flex">Home</p>
        </li>
        <li className="xl:py-3 flex w-fit py-4 pl-5 pr-8 hover:bg-gray-200 hover:rounded-full cursor-pointer transition-all duration-250 ease-in">
          <HiOutlineHashtag className="mr-5" size={26} />
          <p className="xl:hidden flex">Explore</p>
        </li>
        <li className="xl:py-3 flex w-fit py-4 pl-5 pr-8 hover:bg-gray-200 hover:rounded-full cursor-pointer transition-all duration-250 ease-in">
          <IoMdNotificationsOutline className="mr-5" size={29} />
          <p className="xl:hidden flex">Notifications</p>
        </li>
        <li className="xl:py-3 flex w-fit py-4 pl-5 pr-8 hover:bg-gray-200 hover:rounded-full cursor-pointer transition-all duration-250 ease-in">
          <FiMail className="mr-5" size={26} />{" "}
          <p className="xl:hidden flex">Messages</p>
        </li>
        <li className="xl:py-3 xlh:hidden flex w-fit py-4 pl-5 pr-8 hover:bg-gray-200 hover:rounded-full cursor-pointer transition-all duration-250 ease-in">
          <BsBookmark className="mr-5" size={23} />
          <p className="xl:hidden flex">Bookmarks</p>
        </li>
        <li className="xl:py-3 xlh:hidden flex w-fit py-4 pl-5 pr-8 hover:bg-gray-200 hover:rounded-full cursor-pointer transition-all duration-250 ease-in">
          <BsCardList className="mr-5" size={26} />
          <p className="xl:hidden flex">Lists</p>
        </li>
        <li className="xl:py-3 font-bold flex w-fit py-4 pl-5 pr-8 hover:bg-gray-200 hover:rounded-full cursor-pointer transition-all duration-250 ease-in">
          <BsFillPersonFill className="mr-5" size={27} />
          <p className="xl:hidden flex">Profile</p>
        </li>
        <li className="xl:py-3 flex w-fit py-4 pl-5 pr-8 hover:bg-gray-200 hover:rounded-full cursor-pointer transition-all duration-250 ease-in">
          <CgMoreO className="mr-5" size={25} />
          <p className="xl:hidden flex">More</p>
        </li>
        <li className="xl:p-3 ml-3 font-medium flex w-fit py-3 px-20 ml-2 bg-twitter mx-auto rounded-full text-white hover:bg-[#1a8cd8] cursor-pointer transition-all duration-250 ease-in">
          <p className="xl:hidden ">Tweet</p>
          <BsPlusLg className="xl-min:hidden" />
        </li>
      </ul>
      <div className="flex absolute bottom-0 mb-2 py-3 px-3 hover:bg-gray-200 hover:rounded-full cursor-pointer transition-all duration-250 ease-in">
        <div className="flex justify-between">
          <div className="bg-gray-300 h-11 w-11 rounded-full"></div>
          <div className="block xl:hidden">
            <p className="pl-3 -mb-1 font-medium">User Name</p>
            <p className="pl-3 font-normal text-gray-500">@username</p>
          </div>
        </div>
        <div className="xl:hidden">
          <FiMoreHorizontal className="ml-16 mt-3" size={20} />
        </div>
      </div>
    </aside>
  );
}
