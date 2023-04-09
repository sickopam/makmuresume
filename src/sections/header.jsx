import React, { useState } from 'react'
import About from './about'
import { useFade } from '../components/fade';

export default function Header() {

  const [isVisible, setVisible, fadeProps] = useFade();

  return (
    <div id='home'>
        <div id='header'>
            <p className='text-white text-2xl md:text-4xl'>hi, my name is naufal abiyyu. a computer science student who's enthusiastic about pursuing knowledge in diversity and depth :&#41;</p>
            <div id='btn-section'>
                <button onClick={() => setVisible(!isVisible)} id='btn' className='btn-effect'>
                    <h3 className='md:text-lg'>about</h3>
                </button>
                {isVisible && (
                    <About/>
                )}

                <button id='btn' className='btn-effect'>
                    <a href='https://instagram.com/folnau' target='_blank' className='md:text-lg'>instagram</a>
                </button>

                <button id='btn' className='btn-effect'>
                    <h3 className='md:text-lg'>cv</h3>
                </button>

                <button id='btn' className='btn-effect'>
                    <h3 className='md:text-lg'>email</h3>
                </button>

                <button id='btn' className='btn-effect'>
                    <h3 className='md:text-lg'>cover letter</h3>
                </button>
            </div>
        </div>
    </div>
  )
}

