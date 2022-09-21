import { BsArrowLeftShort } from "react-icons/bs";

export default function Profile() {
  return (
    <div className="xl:ml-16 ml-64 mr-[30rem] border border-gray-200 h-screen">
      <div className="flex pt-1">
        <BsArrowLeftShort className="my-2 mx-3" size={32} />
        <div className="pl-5">
          <h1 className="text-xl font-medium">Pedro Lucena</h1>
          <p className="text-gray-500 text-sm">10 Tweets</p>
        </div>
      </div>
    </div>
  );
}
