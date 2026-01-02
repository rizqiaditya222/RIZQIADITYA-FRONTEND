import React, { use, useState, useEffect } from 'react'
import GlassSurface from './glass-surface/GlassSurface'
import PokemonStory from './PokemonStory'
import { Story } from '@/features/story/types/story'
import { useSubmitComment } from '@/features/comments/hooks/useSubmitComment'
import { useSendMessage } from '@/features/message/hooks/useSendMessage'

type Props = {
    particleColor: string
    setParticleColor: (c: string) => void
    stories: Story[]
}

const StorySection = ({ particleColor, setParticleColor, stories }: Props) => {

    const [storyCounter, setStoryCounter] = useState(3)
    const [activeIndex, setActiveIndex] = useState(0)
    const [commentText, setCommentText] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)
    const { submit, loading: submitting } = useSubmitComment()

    useEffect(() => {
        setStoryCounter(stories.length || 0)
    }, [stories])

    const handlePrev = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : storyCounter - 1))
    }

    const handleNext = () => {
        setActiveIndex((prev) => (prev < storyCounter - 1 ? prev + 1 : 0))
    }

    const handleSubmitComment = async () => {
        if (!commentText.trim() || !stories[activeIndex]) return
        
        await submit({
            storyId: stories[activeIndex]._id,
            comment: commentText
        })
        
        setCommentText('')
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 3000)
    }


    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center snap-start snap-always relative px-4 md:px-0'>
            <div className='flex flex-col py-6 md:py-8 items-center pointer-events-none'>

                <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-medium relative z-10 text-center">Todays Story!</h1>
                <p className="text-[#A0A0A0] mt-2 text-sm md:text-base relative z-10 text-center">
                    what could possibly happen today?
                </p>
            </div>

            <div className="w-[80vw] max-w-[40vh] h-1 pb-4 grid gap-0.5 z-30 pointer-events-none" style={{ gridTemplateColumns: `repeat(${storyCounter}, minmax(0, 1fr))` }}>
                {Array.from({ length: storyCounter }).map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 w-full rounded-full ${index === activeIndex ? 'bg-white' : 'bg-white/50'}`}
                    ></div>
                ))}
            </div>

            <div className='w-full flex justify-center items-center z-30 pointer-events-none gap-2 md:gap-0'>
                <button onClick={handlePrev} className='w-12 h-12 md:w-16 md:h-16 bg-white/90 text-black hover:bg-white/100 backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:scale-110 md:hover:scale-120 cursor-pointer pointer-events-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <GlassSurface borderRadius={12} backgroundOpacity={0.15} className="p-3 md:p-4 mb-4 mx-3 md:mx-8 lg:mx-18">
                    <div className="justify-items-center h-[40vh] w-[70vw] sm:h-[45vh] sm:w-[40vh] md:h-[50vh] md:w-[36vh] relative rounded-xl overflow-hidden">
                        {stories.length > 0 && stories[activeIndex] ? (
                            <>
                                <img src={stories[activeIndex].photoUrl} className="h-full w-full object-cover" alt="" />
                                {stories[activeIndex].caption && (
                                    <p className='w-full z-30 absolute bottom-20 bg-black/60 text-center py-2'>
                                        {stories[activeIndex].caption}
                                    </p>
                                )}
                            </>
                        ) : (
                            <div className="h-full w-full flex items-center justify-center bg-white/10">
                                <p className="text-white/50">No stories available</p>
                            </div>
                        )}
                    </div>
                </GlassSurface>
                <button onClick={handleNext} className='w-12 h-12 md:w-16 md:h-16 bg-white/90 text-black hover:bg-white/100 backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:scale-110 md:hover:scale-120 cursor-pointer pointer-events-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>


            <GlassSurface borderRadius={12} backgroundOpacity={0.15} className="p-3 md:p-4 z-30 pointer-events-none w-[70vw] sm:w-[40vh] md:w-[36vh]">
                <div className='w-full flex gap-2'>
                    <input 
                        className='flex-1 focus:outline-none focus:ring-0 border-0 pointer-events-auto bg-transparent text-white placeholder-white/50' 
                        type="text" 
                        placeholder='Leave a comment :)' 
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSubmitComment()}
                        disabled={submitting || stories.length === 0}
                    />
                    <img 
                        src="images/send-icon.svg" 
                        className={`hover:scale-120 cursor-pointer pointer-events-auto ${submitting ? 'opacity-50' : ''}`}
                        onClick={handleSubmitComment}
                        alt="" 
                    />
                </div>
            </GlassSurface>

            {showSuccess && <p className='pt-4 text-green-400 font-medium text-sm md:text-base'>Comment Sent!</p>}
            
            <div className="hidden lg:block">
                <PokemonStory 
                    particleColor={particleColor} 
                    setParticleColor={setParticleColor} 
                />
            </div>
        </div>
    )
}

export default StorySection
