import {
  BsHouse,
  BsBookmark,
  BsCardList,
  BsFillPersonFill,
} from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { HiOutlineHashtag } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import { CgMoreO } from "react-icons/cg";

export default function Aside() {
  return (
    <aside className="xl:px-24">
      <ul className="text-xl w-min">
        <li className="flex w-fit py-4 pl-3 hover:bg-blue-100 hover:rounded-full cursor-pointer transition-all duration-250 ease-in">
          <GrTwitter className="mr-5 text-blue-400" size={26} />
        </li>
        <li className="flex w-fit py-4 pl-3 pr-8 hover:bg-gray-200 hover:rounded-full cursor-pointer transition-all duration-250 ease-in">
          <BsHouse className="mr-5" size={26} />
          <p className="">Home</p>
        </li>
        <li className="flex w-fit py-4 pl-3 pr-8 hover:bg-gray-200 hover:rounded-full cursor-pointer transition-all duration-250 ease-in">
          <HiOutlineHashtag className="mr-5" size={26} />
          <p className="">Explore</p>
        </li>
        <li className="flex w-fit py-4 pl-3 pr-8 hover:bg-gray-200 hover:rounded-full cursor-pointer transition-all duration-250 ease-in">
          <IoMdNotificationsOutline className="mr-5" size={29} />
          <p className="">Notifications</p>
        </li>
        <li className="flex w-fit py-4 pl-3 pr-8 hover:bg-gray-200 hover:rounded-full cursor-pointer transition-all duration-250 ease-in">
          <FiMail className="mr-5" size={26} /> <p className="">Messages</p>
        </li>
        <li className="flex w-fit py-4 pl-3 pr-8 hover:bg-gray-200 hover:rounded-full cursor-pointer transition-all duration-250 ease-in">
          <BsBookmark className="mr-5" size={23} />
          <p className="">Bookmarks</p>
        </li>
        <li className="flex w-fit py-4 pl-3 pr-8 hover:bg-gray-200 hover:rounded-full cursor-pointer transition-all duration-250 ease-in">
          <BsCardList className="mr-5" size={26} />
          <p className="">Lists</p>
        </li>
        <li className="flex w-fit py-4 pl-3 pr-8 hover:bg-gray-200 hover:rounded-full cursor-pointer transition-all duration-250 ease-in">
          <BsFillPersonFill className="mr-5" size={27} />
          <p className="">Profile</p>
        </li>
        <li className="flex w-fit py-4 pl-3 pr-8 hover:bg-gray-200 hover:rounded-full cursor-pointer transition-all duration-250 ease-in">
          <CgMoreO className="mr-5" size={25} />
          <p className="">More</p>
        </li>
        <li className="flex py-1 w-max hover:bg-gray-200 hover:rounded-full cursor-pointer transition-all duration-250 ease-in">
          Tweet
        </li>
      </ul>
    </aside>
  );
}
