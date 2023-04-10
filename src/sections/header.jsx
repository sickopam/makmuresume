import React from 'react'
import About from './about'
import CoverLetter from './cover-letter';

import { useFadeAbout } from '../components/fade-about';
import { useFadeCL } from '../components/fade-cover-letter';

export default function Header() {

  const [isVisibleAbout, setShowAbout, fadePropsAbout] = useFadeAbout();
  const [isVisibleCL, setShowCL, fadePropsCL] = useFadeCL()

  return (
    <div id='home'>
        <div id='header'>
            <p className='text-white text-2xl md:text-4xl'>hi, my name is naufal abiyyu. a computer science student who's enthusiastic about pursuing knowledge in diversity and depth :&#41;</p>
            <div id='btn-section'>
                <button onClick={() => setShowAbout(!isVisibleAbout)} id='btn' className='btn-effect'>
                    <h3 className='md:text-lg'>about</h3>
                </button>
                {isVisibleAbout && (
                    <About isVisibleAbout={isVisibleAbout} setShowAbout={setShowAbout} fadePropsAbout={fadePropsAbout}/>
                )}

                <button id='btn' className='btn-effect'>
                    <a href='https://instagram.com/folnau' target='_blank' rel='noreferrer' className='md:text-lg'>instagram</a>
                </button>

                <button id='btn' className='btn-effect'>
                    <h3 className='md:text-lg'>cv</h3>
                </button>

                <button id='btn' className='btn-effect'>
                    <a href='mailto:naubiyyu@gmail.com' className='md:text-lg'>email</a>
                </button>

                <button onClick={() => setShowCL(!isVisibleCL)} id='btn' className='btn-effect'>
                    <h3 className='md:text-lg'>cover letter</h3>
                </button>
                {isVisibleCL && (
                    <CoverLetter isVisibleCL={isVisibleCL} setShowCL={setShowCL} fadePropsCL={fadePropsCL}/>
                )}
            </div>
        </div>
    </div>
  )
}
