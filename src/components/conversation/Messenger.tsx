'use client';

import React from 'react';
import { Loader } from '@/components/loader/Loader';
import { useChatWindow } from '@/hooks/conversation/useConversation';
import Bubble from '../chatbot/Bubble';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { PaperclipIcon, SendHorizontal } from 'lucide-react';

const Messenger = () => {
  const {
    messageWindowRef,
    chats,
    loading,
    chatRoom,
    onHandleSentMessage,
    register,
  } = useChatWindow();
  return (
    <div className='flex-1 flex flex-col h-0 relative'>
      <div className='flex-1 h-0 w-full flex flex-col'>
        <Loader loading={loading}>
          <div
            ref={messageWindowRef}
            className='w-full flex-1 h-0 flex flex-col gap-3 pl-5 py-5 chat-window overflow-y-auto'
          >
            {chats.length ? (
              chats.map((chat) => (
                <Bubble
                  key={chat.id}
                  message={{
                    role: chat.role!,
                    content: chat.message,
                  }}
                  createdAt={chat.createdAt}
                />
              ))
            ) : (
              <div>No Chat Selected</div>
            )}
          </div>
        </Loader>
      </div>
      <form
        onSubmit={onHandleSentMessage}
        className='flex px-4 py-3 flex-col bg-white dark:bg-brown w-full border-t border-gray-600'
      >
        <div className='flex space-x-3'>
          <span className='mt-2'>
            <PaperclipIcon className='text-gray-400' />
          </span>
          <Input
            {...register('content')}
            placeholder='Type your message...'
            className='flex-1 p-2 border border-gray-300 rounded-md outline-0 focus:border-blue-500'
          />
          <Button
            type='submit'
            className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
            disabled={!chatRoom}
          >
            <SendHorizontal />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Messenger;
