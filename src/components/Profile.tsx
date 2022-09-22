import { BsArrowLeftShort, BsGeoAlt, BsLink45Deg } from "react-icons/bs";

export default function Profile() {
  return (
    <div className="xl:ml-16 ml-64 mr-[30rem] border border-gray-200 h-screen">
      <div className="flex p-1">
        <BsArrowLeftShort
          className="my-2 mx-3 hover:bg-gray-200 hover:rounded-full cursor-pointer transition-all duration-250 ease-in"
          size={32}
        />
        <div className="pl-2">
          <h1 className="text-xl font-medium">User Name</h1>
          <p className="text-gray-500 text-sm">10 Tweets</p>
        </div>
      </div>
      <div className="bg-gray-200 h-48 flex justify-between">
        <div className="rounded-full  h-fit p-16 border-4 border-white bg-gray-200 mt-[120px] ml-5"></div>
        <p className="bg-white h-fit rounded-full px-4 py-1 border border-gray-300 mt-52 mr-5 font-medium">
          Edit profile
        </p>
      </div>
      <h1 className="font-bold text-xl pt-20 pl-5">User Name</h1>
      <p className="text-gray-500 pl-5 -mt-1">@username</p>
      <p className="pl-5 pt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet
        neque in est imperdiet, et tempor purus rutrum.
      </p>
      <div className="flex">
        <BsGeoAlt className="ml-5 mt-4 text-gray-500" />{" "}
        <p className="text-gray-500 mt-[14px] ml-[3px] text-sm">Country</p>
        <BsLink45Deg className="ml-3 mt-4 text-gray-500" size={22} />
        <p className="text-gray-500 mt-[14px] ml-[3px] text-sm cursor-pointer hover:underline text-twitter">
          https://userwebsite.com
        </p>
      </div>
    </div>
  );
}
