import { BsArrowLeftShort } from "react-icons/bs";

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
    </div>
  );
}
