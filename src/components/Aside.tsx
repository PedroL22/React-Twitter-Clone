import {
  BsHouse,
  BsBookmark,
  BsCardList,
  BsFillPersonFill,
  BsPlusLg,
} from 'react-icons/bs'
import { GrTwitter } from 'react-icons/gr'
import { HiOutlineHashtag } from 'react-icons/hi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { FiMail, FiMoreHorizontal } from 'react-icons/fi'
import { CgMoreO } from 'react-icons/cg'

export const Aside = () => {
  return (
    <aside className='fixed h-full'>
      <ul className='w-min text-xl '>
        <li className='duration-250 my-2 flex w-fit cursor-pointer py-3 pl-5 transition-all ease-in hover:rounded-full hover:bg-blue-100'>
          <GrTwitter
            className='mr-5 text-twitter'
            size={26}
          />
        </li>
        <li className='duration-250 my-2 flex w-fit cursor-pointer py-3 pl-5 pr-8 transition-all ease-in hover:rounded-full hover:bg-gray-200 xl:my-3 xl:ml-4 xl:pl-1 xl:pr-0'>
          <BsHouse
            className='mr-5'
            size={26}
          />
          <p className='flex xl:hidden'>Home</p>
        </li>
        <li className='duration-250 my-2 flex w-fit cursor-pointer py-3 pl-5 pr-8 transition-all ease-in hover:rounded-full hover:bg-gray-200 xl:my-3 xl:ml-4 xl:pl-1 xl:pr-0'>
          <HiOutlineHashtag
            className='mr-5'
            size={26}
          />
          <p className='flex xl:hidden'>Explore</p>
        </li>
        <li className='duration-250 my-2 flex w-fit cursor-pointer py-3 pl-5 pr-8 transition-all ease-in hover:rounded-full hover:bg-gray-200 xl:my-3 xl:ml-4 xl:pl-1 xl:pr-0'>
          <IoMdNotificationsOutline
            className='mr-5'
            size={29}
          />
          <p className='flex xl:hidden'>Notifications</p>
        </li>
        <li className='duration-250 my-2 flex w-fit cursor-pointer py-3 pl-5 pr-8 transition-all ease-in hover:rounded-full hover:bg-gray-200 xl:my-3 xl:ml-4 xl:pl-1 xl:pr-0'>
          <FiMail
            className='mr-5'
            size={26}
          />{' '}
          <p className='flex xl:hidden'>Messages</p>
        </li>
        <li className='duration-250 my-2 flex w-fit cursor-pointer py-3 pl-5 pr-8 transition-all ease-in hover:rounded-full hover:bg-gray-200 xl:my-3 xl:ml-4 xl:pl-1 xl:pr-0 xlh:hidden'>
          <BsBookmark
            className='mr-5'
            size={23}
          />
          <p className='flex xl:hidden'>Bookmarks</p>
        </li>
        <li className='duration-250 my-2 flex w-fit cursor-pointer py-3 pl-5 pr-8 transition-all ease-in hover:rounded-full hover:bg-gray-200 xl:my-3 xl:ml-4 xl:pl-1 xl:pr-0 xlh:hidden'>
          <BsCardList
            className='mr-5'
            size={26}
          />
          <p className='flex xl:hidden'>Lists</p>
        </li>
        <li className='duration-250 my-2 flex w-fit cursor-pointer py-3 pl-5 pr-8 font-bold transition-all ease-in hover:rounded-full hover:bg-gray-200 xl:my-3 xl:ml-4 xl:pl-1 xl:pr-0'>
          <BsFillPersonFill
            className='mr-5'
            size={27}
          />
          <p className='flex xl:hidden'>Profile</p>
        </li>
        <li className='duration-250 my-2 flex w-fit cursor-pointer py-3 pl-5 pr-8 transition-all ease-in hover:rounded-full hover:bg-gray-200 xl:my-3 xl:ml-4 xl:pl-1 xl:pr-0'>
          <CgMoreO
            className='mr-5'
            size={25}
          />
          <p className='flex xl:hidden'>More</p>
        </li>
        <li className='duration-250 mx-auto flex w-fit cursor-pointer rounded-full bg-twitter px-20 py-3 font-medium text-white transition-all ease-in hover:bg-[#1a8cd8] xl:ml-3 xl:p-3'>
          <p className='xl:hidden '>Tweet</p>
          <BsPlusLg className='xl-min:hidden' />
        </li>
      </ul>
      <div className='duration-250 absolute bottom-0 mb-2 flex cursor-pointer px-3 py-3 transition-all ease-in hover:rounded-full hover:bg-gray-200'>
        <div className='flex justify-between'>
          <div className='h-11 w-11 rounded-full bg-gray-300'></div>
          <div className='block xl:hidden'>
            <p className='-mb-1 pl-3 font-medium'>User Name</p>
            <p className='pl-3 font-normal text-gray-500'>@username</p>
          </div>
        </div>
        <div className='xl:hidden'>
          <FiMoreHorizontal
            className='ml-16 mt-3'
            size={20}
          />
        </div>
      </div>
    </aside>
  )
}
