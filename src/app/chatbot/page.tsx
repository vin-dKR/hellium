"use client"

import React, { useEffect } from 'react'
import AiChatbot from '@/components/chatbot/AiChatbot'

const ChatBot = () => {
	useEffect(() => {
		document.body.setAttribute('data-route', 'chatbot');
		return () => {
			document.body.removeAttribute('data-route');
		};
	}, []);

	return (
		<div>
			<AiChatbot />
		</div>
	)
}

export default ChatBot