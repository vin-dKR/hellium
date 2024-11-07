import Image from 'next/image';
import CodeSnippet from '../landing/CodeSnippet';
import RadialBlur from '../ui/RadialBlur';

const ChatbotIntro = () => {
  return (
    <div className='flex w-full my-36 items-center justify-center'>
      <RadialBlur
        color='#FF9D2D'
        size='300px'
        blur='100px'
        position={{ top: '500px', right: '-150px' }}
      />

      <div className='w-9/12 p-28'>
        <div className=''>
          <h1 className='text-6xl'>Integrate</h1>
          <h1 className='text-6xl'>AI Chatbot</h1>
          <div className='grid grid-cols-5 gap-6 mt-28'>
            <div className='col-span-2 flex flex-col justify-between py-10'>
              <div>
                <Image
                  src='/images/Big Logo.svg'
                  alt='big-logo.com'
                  width={240}
                  height={240}
                />
              </div>
              <div>
                <h1 className='text-4xl'>Just</h1>
                <h1 className='text-6xl font-bold'>Ctrl + C</h1>
                <h1 className='text-3xl place-item-end'>&</h1>
                <h1 className='text-6xl font-bold'>Ctrl + V</h1>
                <p>and there you go!</p>
              </div>
            </div>
            <div className='col-span-3'>
              <CodeSnippet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotIntro;
