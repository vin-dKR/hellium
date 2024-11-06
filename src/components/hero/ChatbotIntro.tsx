import CodeSnippet from '../landing/CodeSnippet';

const ChatbotIntro = () => {
  return (
    <div className='flex w-full my-36 items-center justify-center bg-brown'>
      <div className='w-2/3 p-28'>
        <div className='bg-black'>
          <h1 className='text-6xl'>Integrate</h1>
          <h1 className='text-6xl'>AI Chatbot</h1>
          <div className='grid grid-cols-5 gap-6 mt-36'>
            <div className='col-span-2'>
              <div>
                <h1 className='text-3xl'>Just</h1>
                <h1 className='text-5xl'>Ctrl + C</h1>
                <h1 className='text-2xl'>&</h1>
                <h1 className='text-5xl'>Ctrl + V</h1>
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
