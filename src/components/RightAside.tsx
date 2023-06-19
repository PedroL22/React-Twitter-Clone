import { IoIosSearch } from 'react-icons/io'
import { GrLinkedinOption } from 'react-icons/gr'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'

export const RightAside = () => {
  return (
    <aside className='float-right -mt-[100vh] mr-16 block lg:hidden'>
      <div className='flex'>
        <IoIosSearch
          className='z-10 -mr-9 mt-[15px] text-gray-500 focus:text-twitter'
          size={20}
        />
        <input
          type='text'
          placeholder='Search Twitter'
          className='mt-[5px] rounded-full bg-gray-200 py-2 pl-10 pr-32 placeholder-gray-500 outline-1 outline-twitter focus:bg-white'
        ></input>
      </div>
      <div className='-ml-4 mt-4 grid cursor-pointer grid-cols-3 gap-[2px]'>
        <div className='h-28 rounded-tl-2xl bg-gray-200'>ㅤ</div>
        <div className='h-28 bg-gray-200'>ㅤ</div>
        <div className='h-28 rounded-tr-2xl bg-gray-200'>ㅤ</div>
        <div className='h-28 rounded-bl-2xl bg-gray-200'>ㅤ</div>
        <div className='h-28 bg-gray-200'>ㅤ</div>
        <div className='h-28 rounded-br-2xl bg-gray-200'>ㅤ</div>
      </div>
      <div className='my-5 -ml-4 rounded-2xl bg-[#f7f9f9]'>
        <p className='pl-4 pt-4 text-xl font-bold'>You might like</p>

        <div className='duration-250 flex cursor-pointer transition-all ease-in hover:bg-gray-100'>
          <div className='my-3 ml-4 h-fit rounded-full bg-gray-200 p-7 hover:bg-gray-300'></div>
          <div>
            <p className='ml-3 mt-4 font-medium hover:underline'>User Name</p>
            <p className='-mt-1 ml-3 text-gray-500'>@username</p>
          </div>
          <p className='ml-5 mt-6 h-fit rounded-full bg-black px-5 py-1 font-medium text-white hover:text-gray-200'>
            Follow
          </p>
        </div>
        <div className='duration-250 flex cursor-pointer transition-all ease-in hover:bg-gray-100'>
          <div className='my-3 ml-4 h-fit rounded-full bg-gray-200 p-7 hover:bg-gray-300'></div>
          <div>
            <p className='ml-3 mt-4 font-medium hover:underline'>User Name</p>
            <p className='-mt-1 ml-3 text-gray-500'>@username</p>
          </div>
          <p className='ml-5 mt-6 h-fit rounded-full bg-black px-5 py-1 font-medium text-white hover:text-gray-200'>
            Follow
          </p>
        </div>
        <div className='duration-250 flex cursor-pointer transition-all ease-in hover:bg-gray-100'>
          <div className='my-3 ml-4 h-fit rounded-full bg-gray-200 p-7 hover:bg-gray-300'></div>
          <div>
            <p className='ml-3 mt-4 font-medium hover:underline'>User Name</p>
            <p className='-mt-1 ml-3 text-gray-500'>@username</p>
          </div>
          <p className='ml-5 mt-6 h-fit rounded-full bg-black px-5 py-1 font-medium text-white hover:text-gray-200'>
            Follow
          </p>
        </div>

        <p className='cursor-pointer p-4 text-twitter hover:underline'>
          Show more
        </p>
        <div className='flex justify-around pb-6 '>
          <a
            href='https://www.linkedin.com/in/pedrolucena22/'
            target='_blank'
            rel='noreferrer'
          >
            <GrLinkedinOption
              className='text-[#00639c]'
              size={40}
            />
          </a>
          <a
            href='https://github.com/PedroL22/'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillGithub
              className='text-black'
              size={40}
            />
          </a>
          <a
            href='https://twitter.com/lucena_l22/'
            target='_blank'
            rel='noreferrer'
          >
            <AiOutlineTwitter
              className='text-twitter'
              size={40}
            />
          </a>
        </div>
      </div>
    </aside>
  )
}
