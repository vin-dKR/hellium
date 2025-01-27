'use client'
import SectionLabel from '@/components/section-label/SectionLabel'
import { useToast } from '@/components/ui/use-toast'
import { Copy } from 'lucide-react'
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = ({ id }: IdProps) => {
    const { toast } = useToast()
    let snippet =
        `const iframe = document.createElement("iframe");
    
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
})`

    return (
        <div className="mt-10 flex flex-col gap-5 items-start">
            <SectionLabel
                label="Code snippet"
                message="Copy and paste this code snippet into the header tag of your website"
            />
            <div className="bg-brown px-1 rounded-lg inline-block relative w-full md:w-9/12">
                <Copy
                    className="absolute top-5 right-5 text-gray-400 cursor-pointer"
                    onClick={() => {
                        navigator.clipboard.writeText(snippet)
                        toast({
                            title: 'Copied to clipboard',
                            description: 'You can now paste the code inside your website',
                        })
                    }}
                />
                <SyntaxHighlighter
                    language="javascript"
                    style={vscDarkPlus}
                    customStyle={{
                        background: 'transparent',
                        padding: '1.5rem',
                        fontSize: '0.9rem',
                        lineHeight: '1.5',
                        zIndex: 0,
                    }}
                    wrapLines={true}
                    wrapLongLines={true}
                    showLineNumbers={true}  // Add this line
                    lineNumberStyle={{ color: '#666' }}
                >
                    {snippet}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default CodeSnippet
