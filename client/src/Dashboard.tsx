import Challenge from './components/dashboard/Challenge'
import Tutorial from './components/dashboard/Tutorial'
import User from './components/dashboard/User'

const Dashboard = () => {
  return (
    <div className="h-screen w-full px-32 py-4 flex justify-between gap-40">
      <div className="flex flex-col w-3/5">
        <div className="flex items-center">
          <img src="/CodeVenture-transparent.png" alt="CodeVenture logo" className="w-40 h-40" />
        </div>
        <h1 className='font-bold text-3xl text-center pb-8'>Challenges</h1>
        <div className='flex flex-col gap-8 w-[750px] overflow-y-auto'>
          <div className='flex gap-8'>
            <Tutorial number={1} completed={true} title="Basic Syntax" />
            <Challenge number={1} completed={true} stars={3} title="Basic Syntax" />
          </div>
          <div className='flex gap-8'>
            <Tutorial number={2} completed={true} title="Conditional Logic" />
            <Challenge number={2} completed={true} stars={1} title="Conditional Logic" />
          </div>
          <div className='flex gap-8'>
            <Tutorial number={3} completed={true} title="Loops" />
            <Challenge number={3} completed={true} stars={2} title="Loops" />
          </div>
          <div className='flex gap-8'>
            <Tutorial number={4} completed={false} title="Arrays" />
            <Challenge number={4} completed={false} stars={0} title="Arrays" />
          </div>
          <div className='flex gap-8'>
            <Tutorial number={5} completed={false} title="Functions" />
            <Challenge number={5} completed={false} stars={0} title="Functions" />
          </div>
        </div>
      </div>
      <div className='flex flex-col w-2/5 pt-24'>
        <User />
        <ul className="mt-4 bg-white shadow-lg rounded-lg border border-gray-200">
          <li className='text-xl py-2 px-4 hover:bg-gray-100 rounded-md cursor-pointer border-b border-gray-200'>Challenge Statistics</li>
          <li className='text-xl py-2 px-4 hover:bg-gray-100 rounded-md cursor-pointer border-b border-gray-200'>Badges</li>
          <li className='text-xl py-2 px-4 hover:bg-gray-100 rounded-md cursor-pointer border-b border-gray-200'>Social</li>
          <li className='text-xl py-2 px-4 hover:bg-gray-100 rounded-md cursor-pointer border-b border-gray-200'>Profile Information</li>
          <li className='text-xl py-2 px-4 hover:bg-gray-100 rounded-md cursor-pointer border-b border-gray-200'>Settings</li>
          <li className='text-xl py-2 px-4 hover:bg-gray-100 rounded-md cursor-pointer'>Log Out</li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard