import { IoIosSearch } from "react-icons/io";

export default function RightAside() {
  return (
    <aside className="block -mt-[100vh] float-right mr-16">
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
    </aside>
  );
}
