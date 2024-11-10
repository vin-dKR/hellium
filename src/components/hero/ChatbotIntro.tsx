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

      <div className='w-full lg:w-5/6 p-4 md:p-12 lg:p-36'>
        <div>
          <h1 className='text-3xl md:text-4xl lg:text-6xl'>Integrate</h1>
          <h1 className='text-3xl md:text-4xl lg:text-6xl'>AI Chatbot</h1>
          <p className='text-gray-500'>Integrate it with fast as fuck boi!!</p>
          <div className='grid grid-cols-1 md:grid-cols-5 gap-6 mt-8 lg:mt-16'>
            <div className='md:col-span-2 flex flex-col justify-between py-5 lg:py-10'>
              <div>
                <Image
                  src='/images/Big Logo.svg'
                  alt='big-logo.com'
                  width={240}
                  height={240}
                  className='w-[180px] md:w-[200px] lg:w-[240px]'
                />
              </div>
              <div>
                <h1 className='text-2xl md:text-3xl lg:text-4xl'>Just</h1>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
                  Ctrl + C
                </h1>
                <span className='text-xl md:text-2xl lg:text-3xl place-item-end pr-4'>
                  &
                </span>
                <span className='text-4xl md:text-5xl lg:text-6xl font-bold'>
                  Ctrl + V
                </span>
                <p>and there you go!</p>
              </div>
            </div>
            <div className='md:col-span-3'>
              <CodeSnippet />
            </div>
          </div>
        </div>
      </div>
      <RadialBlur
        color='#FF9D2D'
        size='300px'
        blur='100px'
        position={{ top: '1200px', left: '-150px' }}
      />
    </div>
  );
};

export default ChatbotIntro;
