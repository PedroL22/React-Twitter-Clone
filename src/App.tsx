import { Aside } from './components/Aside'
import { Profile } from './components/Profile'
import { RightAside } from './components/RightAside'

export const App = () => {
  return (
    <div>
      <div className='mx-auto max-w-[1280px]'>
        <Aside />
        <Profile />
        <RightAside />
      </div>
    </div>
  )
}
