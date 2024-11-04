import HomePage from '@/components/hero/Home';
import Subscription from '@/components/hero/Subscription';
import NavBar from '@/components/navbar/Nabvar';

// Main Home component
export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      {/* Background Circle 1 */}
      <div
        className='absolute top-1/2 left-1/2 w-52 h-52 rounded-full blur-[50px] 
                    transform -translate-x-1/2 -translate-y-1/2 z-[-1]'
        style={{
          background:
            'radial-gradient(circle, rgba(255, 165, 0, 1) 0%, rgba(255, 165, 0, 0) 100%)',
        }}
      ></div>

      {/* Background Circle 2 */}
      <div
        className='absolute top-2/3 left-1 w-5/12 h-28 rounded-full blur-[100px] 
                    transform -translate-x-1/2 -translate-y-1/2 z-[-1] 
                    scale-x-150 scale-y-75 rotate-[-30deg]'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255, 165, 0, 1) 0%, rgba(255, 165, 0, 0.5) 80%)',
          backgroundSize: '150% 100%',
        }}
      ></div>

      <div className='relative w-full h-full'>
        {/* Background Circle 3 */}
        <div className='absolute top-2/3 right-0 w-96 h-96 rounded-full blur-[100px] z-[-1] overflow-hidden transform -translate-x-[-50%] -translate-y-[50%]'>
          <div
            className='w-full h-full'
            style={{
              background:
                'radial-gradient(circle, rgba(255, 165, 0, 1) 0%, rgba(255, 165, 0, 0.5) 100%)',
            }}
          ></div>
        </div>

        <NavBar />
        <HomePage />
        <Subscription />
      </div>
    </div>
  );
}
