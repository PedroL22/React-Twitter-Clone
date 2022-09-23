import { IoIosSearch } from "react-icons/io";

export default function RightAside() {
  return (
    <aside className="lg:hidden block -mt-[100vh] float-right mr-16">
      <div className="flex">
        <IoIosSearch
          className="-mr-9 mt-[15px] z-10 text-gray-500 focus:text-twitter"
          size={20}
        />
        <input
          type="text"
          placeholder="Search Twitter"
          className="bg-gray-200 placeholder-gray-500 outline-1 outline-twitter focus:bg-white rounded-full mt-[5px] py-2 pl-10 pr-32"
        ></input>
      </div>
      <div className="mt-4 -ml-4 grid grid-cols-3 gap-[2px] cursor-pointer">
        <div className="bg-gray-200 h-28 rounded-tl-2xl">ㅤ</div>
        <div className="bg-gray-200 h-28">ㅤ</div>
        <div className="bg-gray-200 h-28 rounded-tr-2xl">ㅤ</div>
        <div className="bg-gray-200 h-28 rounded-bl-2xl">ㅤ</div>
        <div className="bg-gray-200 h-28">ㅤ</div>
        <div className="bg-gray-200 h-28 rounded-br-2xl">ㅤ</div>
      </div>
      <div className="-ml-4 my-5 rounded-2xl bg-[#f7f9f9]">
        <p className="font-bold text-xl pl-4 pt-4">You might like</p>

        <div className="flex cursor-pointer hover:bg-gray-100 transition-all duration-250 ease-in">
          <div className="rounded-full bg-gray-200 p-7 h-fit ml-4 my-3 hover:bg-gray-300"></div>
          <div>
            <p className="font-medium ml-3 mt-4 hover:underline">User Name</p>
            <p className="text-gray-500 -mt-1 ml-3">@username</p>
          </div>
          <p className="bg-black text-white font-medium h-fit ml-5 mt-6 py-1 px-5 rounded-full hover:text-gray-200">
            Follow
          </p>
        </div>
        <div className="flex cursor-pointer hover:bg-gray-100 transition-all duration-250 ease-in">
          <div className="rounded-full bg-gray-200 p-7 h-fit ml-4 my-3 hover:bg-gray-300"></div>
          <div>
            <p className="font-medium ml-3 mt-4 hover:underline">User Name</p>
            <p className="text-gray-500 -mt-1 ml-3">@username</p>
          </div>
          <p className="bg-black text-white font-medium h-fit ml-5 mt-6 py-1 px-5 rounded-full hover:text-gray-200">
            Follow
          </p>
        </div>
        <div className="flex cursor-pointer hover:bg-gray-100 transition-all duration-250 ease-in">
          <div className="rounded-full bg-gray-200 p-7 h-fit ml-4 my-3 hover:bg-gray-300"></div>
          <div>
            <p className="font-medium ml-3 mt-4 hover:underline">User Name</p>
            <p className="text-gray-500 -mt-1 ml-3">@username</p>
          </div>
          <p className="bg-black text-white font-medium h-fit ml-5 mt-6 py-1 px-5 rounded-full hover:text-gray-200">
            Follow
          </p>
        </div>

        <p className="text-twitter p-4 cursor-pointer hover:underline">
          Show more
        </p>
      </div>
    </aside>
  );
}
