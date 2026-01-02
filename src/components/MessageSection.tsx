import React, { useState } from 'react'
import GlassSurface from './glass-surface/GlassSurface'
import Footer from './Footer'
import { useSendMessage } from '@/features/message/hooks/useSendMessage'

const MessageSection = () => {
    const [messageText, setMessageText] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)
    const { send, loading: sending } = useSendMessage()

    const handleSendMessage = async () => {
        if (!messageText.trim()) return
        
        await send(messageText)
        
        setMessageText('')
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 3000)
    }

    return (
        <div className='min-h-[100vh] w-full items-center justify-center flex flex-col snap-start snap-always'>
            <div className='w-full flex flex-col items-center justify-center flex-1 pt-12 px-4 md:px-0'>
                <div className='flex flex-col py-6 md:py-8 items-center'>
                    <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-medium relative z-10 text-center">Send a Message!</h1>
                    <p className="text-[#A0A0A0] mt-2 text-sm md:text-base relative z-10 text-center">
                        Send an anonymous message to this guy!
                    </p>
                </div>
                <GlassSurface borderRadius={36} backgroundOpacity={0.15} className="p-3 w-3/4 md:p-4 md:w-1/2">
                    <div className='w-full flex gap-2'>
                        <input 
                            className='flex-1 focus:outline-none focus:ring-0 border-0 bg-transparent text-white placeholder-white/50' 
                            type="text" 
                            placeholder='Write anything here...' 
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                            disabled={sending}
                        />
                        <img 
                            src="images/send-icon.svg" 
                            className={`hover:scale-120 cursor-pointer ${sending ? 'opacity-50' : ''}`}
                            onClick={handleSendMessage}
                            alt="" 
                        />
                    </div>
                </GlassSurface>
                {showSuccess && <p className='pt-4 text-green-400 font-medium text-sm md:text-base'>Message Sent!</p>}
            </div>
            <Footer />
        </div>
    )
}

export default MessageSection
