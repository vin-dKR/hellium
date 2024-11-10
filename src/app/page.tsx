import Bento from '@/components/hero/Bento';
import ChatbotIntro from '@/components/hero/ChatbotIntro';
import HomePage from '@/components/hero/Home';
import Subscription from '@/components/hero/Subscription';
import NavBar from '@/components/navbar/Nabvar';
import RadialBlur from '@/components/ui/RadialBlur';
import TorchBlur from '@/components/ui/TorchBlur';

// Main Home component
export default function Home() {
  return (
    <div className='relative overflow-x-hidden'>
      <RadialBlur
        color='#fff'
        size='100px'
        blur='100px'
        position={{ top: '100px', left: '47%' }}
      />
      <TorchBlur blur='100px' position={{ top: '20%', left: '0' }} />
      <NavBar />
      <HomePage />
      <ChatbotIntro />
      <Bento />
      <Subscription />
    </div>
  );
}
