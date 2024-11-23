'use client';
import { useToast } from '@/components/ui/use-toast';
import { Copy } from 'lucide-react';
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-ignore
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { BorderBeam } from '@/components/ui/border-beam';

const CodeSnippet = () => {
  const { toast } = useToast();
  const [id, setId] = useState<string>('${id}');
  let snippet = `const iframe = document.createElement("iframe");
    
const iframeStyles = (styleString) => {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
}
    
iframeStyles('
        .chat-frame {
            position: fixed;
            bottom: 50px;
            right: 50px;
            border: none;
        }
')
    
 iframe.src = "http://localhost:3000/chatbot"
 iframe.classList.add('chat-frame')
 document.body.appendChild(iframe)
    
 window.addEventListener("message", (e) => {
        if(e.origin !== "http://localhost:3000") return null
        let dimensions = JSON.parse(e.data)
        iframe.width = dimensions.width
        iframe.height = dimensions.height
        iframe.contentWindow.postMessage("${id}", "http://localhost:3000/")
 })`;

  return (
    <div className='mt-2 flex flex-col gap-5 items-start'>
      <div className='px-1 py-2 bg-brown w-full rounded-lg inline-block relative'>
        <BorderBeam />
        <Copy
          className='absolute top-5 right-5 text-slate-700 z-0 cursor-pointer'
          onClick={() => {
            navigator.clipboard.writeText(snippet);
            toast({
              title: 'Copied to clipboard',
              description: 'You can now paste the code inside your website',
            });
          }}
        />
        <SyntaxHighlighter
          language='javascript'
          style={darcula}
          customStyle={{
            background: 'rbga(0, 0, 0, 0.8)',
            backdropFilter: 'blur(100px)',
            WebkitBackdropFilter: 'blur(200px)',
            fontSize: '0.7rem',
            lineHeight: '1',
            zIndex: 0,
          }}
          wrapLines={true}
          wrapLongLines={true}
          showLineNumbers={true}
        >
          {snippet}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeSnippet;
