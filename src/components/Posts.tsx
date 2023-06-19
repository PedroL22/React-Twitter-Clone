import { BsPinFill, BsHeart, BsBoxArrowUp } from 'react-icons/bs'
import { FiMoreHorizontal } from 'react-icons/fi'
import { FaRegComment } from 'react-icons/fa'
import { TbArrowAutofitRight } from 'react-icons/tb'
import { GoGraph } from 'react-icons/go'

export const Posts = () => {
  return (
    <div className='duration-250 -mt-4 cursor-pointer pb-4 transition-all ease-in hover:bg-gray-100'>
      <div className='ml-14 mt-4 flex h-full'>
        <BsPinFill
          className='mt-3 text-gray-500'
          size={15}
        />
        <p className='ml-1 pt-3 text-sm font-medium'>Pinned Tweet</p>
      </div>
      <div className='flex justify-between'>
        <div className='flex'>
          <div className='duration-250 ml-5 mt-1 rounded-full bg-gray-200 p-6 transition-all ease-in hover:bg-gray-300'></div>
          <p className='pl-2 font-medium hover:underline'>User Name</p>
          <p className='pl-1 text-gray-500'>@username</p>
        </div>
        <FiMoreHorizontal
          className='mr-3 flex rounded-full p-1 hover:bg-blue-100 hover:text-twitter'
          size={25}
        />
      </div>
      <p className='-mt-7 ml-[76px] mr-4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet
        venenatis laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Integer auctor risus sodales velit vulputate volutpat.
      </p>
      <div className='ml-10 mt-4 flex w-auto justify-around text-gray-500'>
        <FaRegComment className='duration-250 transition-all ease-in hover:text-twitter' />
        <TbArrowAutofitRight className='duration-250 transition-all ease-in hover:text-green-400' />
        <BsHeart className='duration-250 transition-all ease-in hover:text-red-400' />
        <BsBoxArrowUp className='duration-250 transition-all ease-in hover:text-twitter' />
        <GoGraph className='duration-250 transition-all ease-in hover:text-twitter' />
      </div>
    </div>
  )
}
