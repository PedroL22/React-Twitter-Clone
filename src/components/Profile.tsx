import {
  BsArrowLeftShort,
  BsGeoAlt,
  BsLink45Deg,
  BsCalendar3,
} from "react-icons/bs";
import { TbBallon } from "react-icons/tb";
import Posts from "./Posts";

export default function Profile() {
  return (
    <div className="xl:ml-16 ml-64 mr-[28rem] border border-gray-100 h-screen">
      <div className="flex p-1">
        <BsArrowLeftShort
          className="my-2 mx-3 hover:bg-gray-200 hover:rounded-full cursor-pointer transition-all duration-250 ease-in"
          size={32}
        />
        <div className="pl-2 cursor-pointer">
          <h1 className="text-xl font-medium">User Name</h1>
          <p className="text-gray-500 text-sm">10 Tweets</p>
        </div>
      </div>
      <div className="bg-gray-200 h-48 flex justify-between cursor-pointer">
        <div className="rounded-full  h-fit p-16 border-4 border-white bg-gray-200 mt-[120px] ml-5 hover:bg-gray-300 transition-all duration-250 ease-in"></div>
        <p className="bg-white h-fit rounded-full px-4 py-1 border border-gray-300 mt-52 mr-5 font-medium cursor-pointer hover:bg-gray-200 transition-all duration-250 ease-in">
          Edit profile
        </p>
      </div>
      <h1 className="font-bold text-xl pt-20 pl-5">User Name</h1>
      <p className="text-gray-500 pl-5 -mt-1">@username</p>
      <p className="pl-5 pt-3 pr-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet
        neque in est imperdiet, et tempor purus rutrum.
      </p>
      <div className="flex">
        <BsGeoAlt className="ml-5 mt-4 text-gray-500" />
        <p className="text-gray-500 mt-[14px] ml-[3px] text-sm">Location</p>
        <BsLink45Deg className="ml-3 mt-[15px] text-gray-500" size={20} />
        <p className="mt-[14px] ml-[1px] text-sm cursor-pointer hover:underline text-twitter">
          https://userwebsite.com
        </p>
        <TbBallon className="ml-3 mt-4 text-gray-500" size={18} />
        <p className="text-gray-500 mt-[14px] ml-[1px] text-sm">
          Born January 10, 2000
        </p>
      </div>
      <div className="flex">
        <BsCalendar3 className="ml-5 mt-1 text-gray-500" size={15} />
        <p className="text-gray-500 ml-[3px] mt-[2px] text-sm">
          Joined February 2014
        </p>
      </div>
      <div className="flex ml-5 mt-4">
        <p className="font-medium hover:underline cursor-pointer">
          50{" "}
          <span className="font-normal text-gray-500 mt-[2px] text-sm">
            Following
          </span>
        </p>
        <p className="font-medium pl-3 hover:underline cursor-pointer">
          25{" "}
          <span className="font-normal text-gray-500 mt-[2px] text-sm">
            Followers
          </span>
        </p>
      </div>
      <div className="flex justify-around mt-4">
        <div className="hover:bg-gray-200 px-10 py-4 border-2 border-b-twitter border-t-0 border-x-0 cursor-pointer transition-all duration-250 ease-in">
          <p className="font-medium ">Tweets</p>
        </div>
        <div className="hover:bg-gray-200 px-10 py-4 cursor-pointer transition-all duration-250 ease-in">
          <p className="font-medium text-gray-500">Tweets & replies</p>
        </div>
        <div className="hover:bg-gray-200 px-10 py-4 cursor-pointer transition-all duration-250 ease-in">
          <p className="font-medium text-gray-500">Media</p>
        </div>
        <div className="hover:bg-gray-200 px-10 py-4 cursor-pointer transition-all duration-250 ease-in">
          <p className="font-medium text-gray-500">Likes</p>
        </div>
      </div>
      <Posts />
    </div>
  );
}
