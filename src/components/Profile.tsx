import {
  BsArrowLeftShort,
  BsGeoAlt,
  BsLink45Deg,
  BsCalendar3,
} from 'react-icons/bs'
import { TbBalloon } from 'react-icons/tb'
import { Posts } from './Posts'

export const Profile = () => {
  return (
    <div className='ml-64 mr-[28rem] h-screen border border-gray-100 xl:ml-16 lg:mr-10'>
      <div className='flex p-1'>
        <BsArrowLeftShort
          className='duration-250 mx-3 my-2 cursor-pointer transition-all ease-in hover:rounded-full hover:bg-gray-200'
          size={32}
        />
        <div className='cursor-pointer pl-2'>
          <h1 className='text-xl font-medium'>User Name</h1>
          <p className='text-sm text-gray-500'>10 Tweets</p>
        </div>
      </div>
      <div className='flex h-48 cursor-pointer justify-between bg-gray-200'>
        <div className='duration-250  ml-5 mt-[120px] h-fit rounded-full border-4 border-white bg-gray-200 p-16 transition-all ease-in hover:bg-gray-300'></div>
        <p className='duration-250 mr-5 mt-52 h-fit cursor-pointer rounded-full border border-gray-300 bg-white px-4 py-1 font-medium transition-all ease-in hover:bg-gray-200'>
          Edit profile
        </p>
      </div>
      <h1 className='pl-5 pt-20 text-xl font-bold'>User Name</h1>
      <p className='-mt-1 pl-5 text-gray-500'>@username</p>
      <p className='pl-5 pr-5 pt-3'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet
        neque in est imperdiet, et tempor purus rutrum.
      </p>
      <div className='flex'>
        <BsGeoAlt className='ml-5 mt-4 text-gray-500' />
        <p className='ml-[3px] mt-[14px] text-sm text-gray-500'>Location</p>
        <BsLink45Deg
          className='ml-3 mt-[15px] text-gray-500'
          size={20}
        />
        <p className='ml-[1px] mt-[14px] cursor-pointer text-sm text-twitter hover:underline'>
          https://userwebsite.com
        </p>
        <TbBalloon
          className='ml-3 mt-4 text-gray-500'
          size={18}
        />
        <p className='ml-[1px] mt-[14px] text-sm text-gray-500'>
          Born January 10, 2000
        </p>
      </div>
      <div className='flex'>
        <BsCalendar3
          className='ml-5 mt-1 text-gray-500'
          size={15}
        />
        <p className='ml-[3px] mt-[2px] text-sm text-gray-500'>
          Joined February 2014
        </p>
      </div>
      <div className='ml-5 mt-4 flex'>
        <p className='cursor-pointer font-medium hover:underline'>
          50{' '}
          <span className='mt-[2px] text-sm font-normal text-gray-500'>
            Following
          </span>
        </p>
        <p className='cursor-pointer pl-3 font-medium hover:underline'>
          25{' '}
          <span className='mt-[2px] text-sm font-normal text-gray-500'>
            Followers
          </span>
        </p>
      </div>
      <div className='mt-4 flex justify-around'>
        <div className='duration-250 cursor-pointer border-2 border-x-0 border-t-0 border-b-twitter px-10 py-4 transition-all ease-in hover:bg-gray-200'>
          <p className='font-medium '>Tweets</p>
        </div>
        <div className='duration-250 cursor-pointer px-10 py-4 transition-all ease-in hover:bg-gray-200'>
          <p className='font-medium text-gray-500'>Tweets & replies</p>
        </div>
        <div className='duration-250 cursor-pointer px-10 py-4 transition-all ease-in hover:bg-gray-200'>
          <p className='font-medium text-gray-500'>Media</p>
        </div>
        <div className='duration-250 cursor-pointer px-10 py-4 transition-all ease-in hover:bg-gray-200'>
          <p className='font-medium text-gray-500'>Likes</p>
        </div>
      </div>
      <Posts />
    </div>
  )
}
