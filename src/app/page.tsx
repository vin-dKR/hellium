import HomePage from '@/components/hero/Home';
import Subscription from '@/components/hero/Subscription';
import NavBar from '@/components/navbar/Nabvar';
import RadialBlur from '@/components/ui/RadialBlur';

// Main Home component
export default function Home() {
  return (
    <div className='relative overflow-x-hidden'>
      {/* <RadialBlur
        color='#FF8800'
        size='250px'
        blur='100px'
        position={{ top: '30px', left: '40%' }}
      /> */}

      <NavBar />
      <HomePage />
      <Subscription />
    </div>
  );
}
