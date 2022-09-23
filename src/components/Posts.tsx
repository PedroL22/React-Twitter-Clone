import { BsPinFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";

export default function Posts() {
  return (
    <div className="cursor-pointer -mt-4 pb-4 hover:bg-gray-100 transition-all duration-250 ease-in">
      <div className="flex h-full ml-14 mt-4">
        <BsPinFill className="text-gray-500 mt-3" size={15} />
        <p className="ml-1 pt-3 font-medium text-sm">Pinned Tweet</p>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <div className="rounded-full p-6 ml-5 mt-1 bg-gray-200 hover:bg-gray-300 transition-all duration-250 ease-in"></div>
          <p className="pl-2 font-medium hover:underline">User Name</p>
          <p className="pl-1 text-gray-500">@username</p>
        </div>
        <FiMoreHorizontal
          className="flex p-1 mr-3 rounded-full hover:text-twitter hover:bg-blue-100"
          size={25}
        />
      </div>
      <p className="ml-[76px] -mt-7 mr-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet
        venenatis laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Integer auctor risus sodales velit vulputate volutpat.
      </p>
    </div>
  );
}
