import React from 'react'
import GlassSurface from './glass-surface/GlassSurface'

const Footer = () => {
    return (
        <div className='flex flex-col items-center gap-4 py-8 md:py-12 px-4 md:px-0'>
            <p className='text-[#A0A0A0] text-xs md:text-sm text-center'>Made with love as an effort of getting an internship</p>
            <div className='items-center justify-center flex flex-wrap gap-2 md:gap-4'>
                <div onClick={() => window.open("https://github.com/rizqiaditya222", "_blank")}>
                    <GlassSurface borderRadius={36} backgroundOpacity={0.15} className="px-2 py-1 hover:scale-105 cursor-pointer transition-transform duration-300">
                        <div className='w-full flex gap-2 items-center'>
                            <img src="images/logo/GITHUB.svg" className='h-5 md:h-6' alt="" />
                            <p className='text-white font-bold text-sm md:text-base'>GitHub</p>
                        </div>
                    </GlassSurface>
                </div>
                <div onClick={() => window.open("https://www.linkedin.com/in/muhammad-rizqi-aditya", "_blank")}>
                    <GlassSurface borderRadius={36} backgroundOpacity={0.15} className="px-2 py-1 hover:scale-105 cursor-pointer transition-transform duration-300">
                        <div className='w-full flex gap-2 items-center'>
                            <img src="images/logo/LINKEDIN.svg" className='h-5 md:h-6' alt="" />
                            <p className='text-white font-bold text-sm md:text-base'>LinkedIn</p>
                        </div>
                    </GlassSurface>
                </div>
                <div onClick={() => window.open("https://www.instagram.com/rizqiadit.ya/", "_blank")}>
                    <GlassSurface borderRadius={36} backgroundOpacity={0.15} className="px-2 py-1 hover:scale-105 cursor-pointer transition-transform duration-300">
                        <div className='w-full flex gap-2 items-center'>
                            <img src="images/logo/INSTAGRAM.svg" className='h-5 md:h-6' alt="" />
                            <p className='text-white font-bold text-sm md:text-base'>Instagram</p>
                        </div>
                    </GlassSurface>
                </div>
                <div>
                    <GlassSurface borderRadius={36} backgroundOpacity={0.15} className="px-2 py-1 hover:scale-105 cursor-pointer transition-transform duration-300">
                        <div className='w-full flex gap-2 items-center'>
                            <img src="images/logo/DOCS.svg" className='h-5 md:h-6' alt="" />
                            <p className='text-white font-bold text-sm md:text-base'>Resume</p>
                        </div>
                    </GlassSurface>
                </div>
            </div>
        </div>
    )
}

export default Footer
