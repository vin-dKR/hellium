import BentoWrapper from '@/components/hero/BentoWrapper';
import ChatbotIntro from '@/components/hero/ChatbotIntro';
import Footer from '@/components/hero/Footer';
import HomePage from '@/components/hero/Home';
import Subscription from '@/components/hero/Subscription';
import NavBar from '@/components/navbar/Nabvar';
import RadialBlur from '@/components/ui/RadialBlur';
import TorchBlur from '@/components/ui/TorchBlur';
import ChatbotEmbded from "./ChatbotEmbded"

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
      <BentoWrapper />
      <Subscription />
      <Footer />
      <ChatbotEmbded
        domainId="b2ef15db-d57d-486c-bcca-bce201f7f364"
        position={{ bottom: "20px", right: "20px" }}
      />
    </div>
  );
}
